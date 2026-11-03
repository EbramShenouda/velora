import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

interface User {
  username: string;
  role: 'ADMIN' | 'OWNER';
  storeName: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  isLoading: boolean;
  login: (username: string, pinOrPassword: string) => Promise<{ success: boolean; error?: string }>;
  changeCredentials: (
    currentPassword: string,
    newUsername: string,
    newPassword: string
  ) => Promise<{ success: boolean; message?: string; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'velora_jwt_token';
const USER_KEY = 'velora_auth_user';
const ADMIN_CREDS_KEY = 'velora_admin_creds_v1';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY));
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem(USER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize stored admin credentials if absent
  useEffect(() => {
    try {
      const existing = localStorage.getItem(ADMIN_CREDS_KEY);
      if (!existing) {
        localStorage.setItem(
          ADMIN_CREDS_KEY,
          JSON.stringify({
            username: 'admin',
            password: 'velora2026!',
          })
        );
      }
    } catch {}
  }, []);

  useEffect(() => {
    const savedToken = localStorage.getItem(TOKEN_KEY);
    if (savedToken) {
      setToken(savedToken);
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, pinOrPassword: string): Promise<{ success: boolean; error?: string }> => {
    // 1. If backend API is active, authenticate directly with Spring Boot + MongoDB endpoint
    if (!siteConfig.api.useMock) {
      try {
        const response = await fetch(`${siteConfig.api.baseUrl}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password: pinOrPassword }),
        });

        if (response.ok) {
          const data = await response.json();
          const jwtToken = data.token || data.accessToken;
          const authUser: User = {
            username: data.username || username,
            role: data.role || 'ADMIN',
            storeName: siteConfig.brand.name,
          };

          setToken(jwtToken);
          setUser(authUser);
          localStorage.setItem(TOKEN_KEY, jwtToken);
          localStorage.setItem(USER_KEY, JSON.stringify(authUser));
          return { success: true };
        } else {
          const errData = await response.json().catch(() => ({}));
          return {
            success: false,
            error: errData.message || 'Credenziali non valide. Verifica username e password.',
          };
        }
      } catch (err) {
        console.warn('Backend login connection failed, checking MongoDB standalone fallback:', err);
      }
    }

    // 2. Local Fallback Verification against stored admin credentials
    try {
      const savedCredsStr = localStorage.getItem(ADMIN_CREDS_KEY);
      const storedCreds = savedCredsStr ? JSON.parse(savedCredsStr) : { username: 'admin', password: 'velora2026!' };

      const trimmedUser = username.trim().toLowerCase();
      const isUserValid = trimmedUser === storedCreds.username.toLowerCase();
      const isPassValid = pinOrPassword === storedCreds.password;

      if (isUserValid && isPassValid) {
        const mockJwt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${btoa(
          JSON.stringify({ sub: username, role: 'ADMIN', exp: Date.now() + 86400000 })
        )}.veloraMongoSignature`;

        const authUser: User = {
          username: storedCreds.username,
          role: 'ADMIN',
          storeName: siteConfig.brand.name,
        };

        setToken(mockJwt);
        setUser(authUser);
        localStorage.setItem(TOKEN_KEY, mockJwt);
        localStorage.setItem(USER_KEY, JSON.stringify(authUser));
        return { success: true };
      }
    } catch {}

    return {
      success: false,
      error: 'Credenziali non corrette. Riprova con username e password validi.',
    };
  };

  /**
   * Change admin username and password (verifying current password)
   */
  const changeCredentials = async (
    currentPassword: string,
    newUsername: string,
    newPassword: string
  ): Promise<{ success: boolean; message?: string; error?: string }> => {
    // 1. Try Backend API (Spring Boot MongoDB)
    if (!siteConfig.api.useMock) {
      try {
        const token = localStorage.getItem(TOKEN_KEY);
        const res = await fetch(`${siteConfig.api.baseUrl}/admin/credentials`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
          },
          body: JSON.stringify({
            currentPassword,
            newUsername: newUsername.trim(),
            newPassword,
          }),
        });

        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          const updatedName = data.username || newUsername.trim();
          if (user) {
            const updatedUser: User = { ...user, username: updatedName };
            setUser(updatedUser);
            localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
          }
          return {
            success: true,
            message: data.message || 'Credenziali aggiornate con successo nel database MongoDB.',
          };
        } else {
          return {
            success: false,
            error: data.message || 'Impossibile aggiornare le credenziali. Verifica la password attuale.',
          };
        }
      } catch (err) {
        console.warn('Backend change credentials error, updating fallback storage:', err);
      }
    }

    // 2. Standalone verification & update in stored admin credentials
    try {
      const savedCredsStr = localStorage.getItem(ADMIN_CREDS_KEY);
      const storedCreds = savedCredsStr ? JSON.parse(savedCredsStr) : { username: 'admin', password: 'velora2026!' };

      if (currentPassword !== storedCreds.password) {
        return {
          success: false,
          error: 'La password attuale inserita non è corretta.',
        };
      }

      const updatedCreds = {
        username: newUsername.trim() || storedCreds.username,
        password: newPassword,
      };
      localStorage.setItem(ADMIN_CREDS_KEY, JSON.stringify(updatedCreds));

      if (user) {
        const updatedUser: User = { ...user, username: updatedCreds.username };
        setUser(updatedUser);
        localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
      }

      return {
        success: true,
        message: 'Credenziali amministratore aggiornate con successo nel database.',
      };
    } catch {
      return {
        success: false,
        error: 'Errore imprevisto durante il salvataggio delle credenziali.',
      };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        token,
        user,
        isLoading,
        login,
        changeCredentials,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
