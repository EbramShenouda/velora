import React, { createContext, useContext, useEffect, useState } from 'react';
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
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (!localStorage.getItem(ADMIN_CREDS_KEY)) {
          localStorage.setItem(
            ADMIN_CREDS_KEY,
            JSON.stringify({ username: 'admin', password: 'velora2026!' })
          );
        }

        // If browser has a leftover offline 'mock.' token, automatically upgrade it to a real backend JWT
        const currentToken = localStorage.getItem(TOKEN_KEY);
        if (!siteConfig.api.useMock && currentToken && currentToken.startsWith('mock.')) {
          const savedCredsStr = localStorage.getItem(ADMIN_CREDS_KEY);
          const creds = savedCredsStr
            ? JSON.parse(savedCredsStr)
            : { username: 'admin', password: 'velora2026!' };

          try {
            const res = await fetch(`${siteConfig.api.baseUrl}/auth/login`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username: creds.username, password: creds.password }),
            });
            if (res.ok) {
              const data = await res.json();
              const realJwt = data.token || data.accessToken;
              if (realJwt) {
                setToken(realJwt);
                localStorage.setItem(TOKEN_KEY, realJwt);
                setIsLoading(false);
                return;
              }
            }
          } catch {
            // Backend unreachable during init
          }
          // Discard invalid mock token so user logs in cleanly against backend
          setToken(null);
          setUser(null);
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem(USER_KEY);
        }
      } catch {
        // Local storage may be unavailable in private browsing contexts.
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (username: string, password: string) => {
    if (!siteConfig.api.useMock) {
      try {
        const response = await fetch(`${siteConfig.api.baseUrl}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: username.trim(), password }),
        });

        if (response.ok) {
          const data = await response.json();
          const authUser: User = {
            username: data.username || username.trim(),
            role: data.role || 'ADMIN',
            storeName: siteConfig.brand.name,
          };
          const jwtToken = data.token || data.accessToken;

          setToken(jwtToken);
          setUser(authUser);
          localStorage.setItem(TOKEN_KEY, jwtToken);
          localStorage.setItem(USER_KEY, JSON.stringify(authUser));
          localStorage.setItem(
            ADMIN_CREDS_KEY,
            JSON.stringify({ username: username.trim(), password })
          );
          return { success: true };
        }

        const error = await response.json().catch(() => ({}));
        return { success: false, error: error.message || 'Credenziali non valide.' };
      } catch (error) {
        console.warn('Backend login connection failed, checking local credentials:', error);
      }
    }

    try {
      const savedCredentials = localStorage.getItem(ADMIN_CREDS_KEY);
      const credentials = savedCredentials
        ? JSON.parse(savedCredentials)
        : { username: 'admin', password: 'velora2026!' };

      if (
        username.trim().toLowerCase() !== credentials.username.toLowerCase() ||
        password !== credentials.password
      ) {
        return { success: false, error: 'Credenziali non corrette. Riprova con username e password validi.' };
      }

      const authUser: User = {
        username: credentials.username,
        role: 'ADMIN',
        storeName: siteConfig.brand.name,
      };
      const mockToken = `mock.${btoa(JSON.stringify({ sub: username, role: 'ADMIN', exp: Date.now() + 86400000 }))}.signature`;

      setToken(mockToken);
      setUser(authUser);
      localStorage.setItem(TOKEN_KEY, mockToken);
      localStorage.setItem(USER_KEY, JSON.stringify(authUser));
      return { success: true };
    } catch {
      return { success: false, error: 'Errore imprevisto durante l’autenticazione.' };
    }
  };

  const changeCredentials = async (
    currentPassword: string,
    newUsername: string,
    newPassword: string
  ): Promise<{ success: boolean; message?: string; error?: string }> => {
    if (!siteConfig.api.useMock) {
      try {
        const response = await fetch(`${siteConfig.api.baseUrl}/admin/credentials`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ currentPassword, newUsername: newUsername.trim(), newPassword }),
        });
        const data = await response.json().catch(() => ({}));

        if (response.ok) {
          if (user) {
            const updatedUser = { ...user, username: data.username || newUsername.trim() };
            setUser(updatedUser);
            localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
          }
          return { success: true, message: data.message || 'Credenziali aggiornate con successo.' };
        }
        return { success: false, error: data.message || 'Impossibile aggiornare le credenziali.' };
      } catch (error) {
        console.warn('Backend credential update failed, updating local credentials:', error);
      }
    }

    try {
      const savedCredentials = localStorage.getItem(ADMIN_CREDS_KEY);
      const credentials = savedCredentials
        ? JSON.parse(savedCredentials)
        : { username: 'admin', password: 'velora2026!' };

      if (currentPassword !== credentials.password) {
        return { success: false, error: 'La password attuale inserita non è corretta.' };
      }

      const updatedCredentials = {
        username: newUsername.trim() || credentials.username,
        password: newPassword,
      };
      localStorage.setItem(ADMIN_CREDS_KEY, JSON.stringify(updatedCredentials));

      if (user) {
        const updatedUser = { ...user, username: updatedCredentials.username };
        setUser(updatedUser);
        localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
      }
      return { success: true, message: 'Credenziali amministratore aggiornate con successo.' };
    } catch {
      return { success: false, error: 'Errore imprevisto durante il salvataggio delle credenziali.' };
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
      value={{ isAuthenticated: !!token, token, user, isLoading, login, changeCredentials, logout }}
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
