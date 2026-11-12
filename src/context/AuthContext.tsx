import React, { createContext, useContext, useEffect, useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { API_BASE_URL } from '../services/api';

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
  const [token, setToken] = useState<string | null>(() => {
    const saved = localStorage.getItem(TOKEN_KEY);
    if (saved && saved.startsWith('mock.')) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      return null;
    }
    return saved;
  });

  const [user, setUser] = useState<User | null>(() => {
    try {
      const savedToken = localStorage.getItem(TOKEN_KEY);
      if (!savedToken || savedToken.startsWith('mock.')) return null;
      const saved = localStorage.getItem(USER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Discard any legacy mock token on mount
    const currentToken = localStorage.getItem(TOKEN_KEY);
    if (currentToken && currentToken.startsWith('mock.')) {
      setToken(null);
      setUser(null);
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  }, []);

  const login = async (username: string, password: string) => {
    const maxAttempts = 2;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
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
        return {
          success: false,
          error: error.message || 'Credenziali non valide. Verifica username e password.',
        };
      } catch (err) {
        if (attempt < maxAttempts) {
          await new Promise((r) => setTimeout(r, 2000));
          continue;
        }
        console.error('Backend login connection failed:', err);
        return {
          success: false,
          error:
            'Il server su Render si sta avviando (cold start) o non è raggiungibile. Attendi qualche secondo e riprova.',
        };
      }
    }
    return { success: false, error: 'Impossibile completare il login.' };
  };

  const changeCredentials = async (
    currentPassword: string,
    newUsername: string,
    newPassword: string
  ): Promise<{ success: boolean; message?: string; error?: string }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/credentials`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ currentPassword, newUsername: newUsername.trim(), newPassword }),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        const updatedUsername = data.username || newUsername.trim();
        if (user) {
          const updatedUser = { ...user, username: updatedUsername };
          setUser(updatedUser);
          localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
        }
        localStorage.setItem(
          ADMIN_CREDS_KEY,
          JSON.stringify({ username: updatedUsername, password: newPassword })
        );
        return {
          success: true,
          message: data.message || 'Credenziali aggiornate con successo su MongoDB.',
        };
      }
      return {
        success: false,
        error: data.message || 'Impossibile aggiornare le credenziali su MongoDB.',
      };
    } catch (error) {
      console.error('Backend credential update failed:', error);
      return {
        success: false,
        error: 'Errore di connessione al server durante la modifica delle credenziali.',
      };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(ADMIN_CREDS_KEY);
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
