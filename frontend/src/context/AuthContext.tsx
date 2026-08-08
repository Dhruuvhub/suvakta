import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const AUTH_STORAGE_KEY = "suvakta_auth";

export type AuthUser = {
  email: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  signIn: (email: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function readStoredUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AuthUser;
    return parsed?.email ? parsed : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => readStoredUser());

  const signIn = useCallback((email: string) => {
    const next = { email };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(next));
    setUser(next);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      signIn,
      signOut,
    }),
    [user, signIn, signOut],
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

export function leaderboardHref(isAuthenticated: boolean) {
  return isAuthenticated ? LEADERBOARD_PATH : LOGIN_PATH;
}

/**
 * Synchronous auth check against localStorage (the source of truth).
 * Needed by navigation code that runs inside delayed animation callbacks,
 * where React context values may be stale.
 */
export function hasStoredUser(): boolean {
  return Boolean(readStoredUser());
}
