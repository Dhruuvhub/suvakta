import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { api, ApiError, setStoredToken, clearStoredToken, getStoredToken } from "@/lib/api";

export type AuthUser = {
  id: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
  role: string;
  department: string | null;
  year: string | null;
  collegeEmail: string | null;
};

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string, confirmPassword: string, department: string, year: string, collegeEmail: string) => Promise<void>;
  updateUser: (name: string, avatarUrl: string | null) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // On mount, try to restore session from stored token
  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      setIsLoading(false);
      return;
    }

    api
      .get<{ user: AuthUser }>("/api/auth/me")
      .then((data) => {
        setUser(data.user);
      })
      .catch(() => {
        // Token invalid / expired and refresh failed
        clearStoredToken();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const data = await api.post<{ accessToken: string; user: AuthUser }>(
      "/api/auth/signin",
      { email, password }
    );
    setStoredToken(data.accessToken);
    setUser(data.user);
  }, []);

  const signUp = useCallback(
    async (name: string, email: string, password: string, confirmPassword: string, department: string, year: string, collegeEmail: string) => {
      const data = await api.post<{ accessToken: string; user: AuthUser }>(
        "/api/auth/signup",
        { name, email, password, confirmPassword, department, year, collegeEmail }
      );
      setStoredToken(data.accessToken);
      setUser(data.user);
    },
    []
  );

  const updateUser = useCallback(async (name: string, avatarUrl: string | null) => {
    const data = await api.put<{ user: AuthUser }>("/api/auth/profile", {
      name,
      avatarUrl,
    });
    setUser(data.user);
  }, []);

  const signOut = useCallback(async () => {
    try {
      await api.post("/api/auth/signout");
    } catch {
      // even if the request fails, clear locally
    }
    clearStoredToken();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      signIn,
      signUp,
      updateUser,
      signOut,
    }),
    [user, isLoading, signIn, signUp, updateUser, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}

/** Leaderboard requires login — send unauthenticated users to sign-in first. */
export const LEADERBOARD_PATH = "/leaderboard";
export const LOGIN_PATH = "/login";
export const SIGNUP_PATH = "/signup";

export function leaderboardHref(isAuthenticated: boolean) {
  return isAuthenticated ? LEADERBOARD_PATH : LOGIN_PATH;
}

/**
 * Synchronous auth check against localStorage (the source of truth).
 * Needed by navigation code that runs inside delayed animation callbacks,
 * where React context values may be stale.
 */
export function hasStoredUser(): boolean {
  return Boolean(getStoredToken());
}

export { ApiError };
