import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

export type SignIn1Props = {
  onSubmit?: (email: string, password: string) => Promise<void>;
  title?: string;
  subtitle?: string;
  onSignUpClick?: () => void;
};

const SignIn1 = ({
  onSubmit,
  title = "Welcome back",
  subtitle = "Sign in to view the leaderboard",
  onSignUpClick,
}: SignIn1Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await onSubmit?.(email, password);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Sign in failed. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-suvakta-50 px-4 py-10">
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-suvakta-900/10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-suvakta-50 shadow-sm border border-suvakta-900/10">
          <img
            src="/logo.png"
            alt="Suvakta"
            className="h-9 w-9 object-contain"
          />
        </div>

        <h2 className="mb-2 text-center text-2xl font-bold text-suvakta-900 font-quicksand">
          {title}
        </h2>
        <p className="mb-6 text-center text-sm font-medium text-suvakta-800/70 font-quicksand">{subtitle}</p>

        <div className="flex w-full flex-col gap-4 font-quicksand font-medium">
          <div className="flex w-full flex-col gap-3">
            <input
              placeholder="Email"
              type="email"
              value={email}
              autoComplete="email"
              disabled={loading}
              className="w-full rounded-xl bg-suvakta-50 px-5 py-3 text-sm text-suvakta-900 placeholder-suvakta-900/40 focus:outline-none focus:ring-2 focus:ring-suvakta-accent border border-suvakta-900/10 transition-shadow disabled:opacity-60"
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
            />
            <div className="relative">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                autoComplete="current-password"
                disabled={loading}
                className="w-full rounded-xl bg-suvakta-50 px-5 py-3 pr-12 text-sm text-suvakta-900 placeholder-suvakta-900/40 focus:outline-none focus:ring-2 focus:ring-suvakta-accent border border-suvakta-900/10 transition-shadow disabled:opacity-60"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-suvakta-900/40 hover:text-suvakta-900/70 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {error ? (
              <div className="text-left text-sm font-bold text-red-500">{error}</div>
            ) : null}
          </div>

          <hr className="border-suvakta-900/10" />

          <div>
            <button
              type="button"
              onClick={handleSignIn}
              disabled={loading}
              className="mb-3 w-full rounded-full bg-suvakta-accent px-5 py-3 text-sm font-bold text-suvakta-950 shadow-[rgba(0,0,0,0.15)_0px_3px_0px_0px] transition hover:translate-y-px hover:shadow-none border border-suvakta-900 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                  </svg>
                  Signing in…
                </span>
              ) : (
                "Sign in"
              )}
            </button>

            <div className="mt-4 w-full text-center">
              <span className="text-xs font-medium text-suvakta-800/70">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={onSignUpClick}
                  className="text-suvakta-600 underline hover:text-suvakta-900 cursor-pointer font-bold"
                >
                  Sign up, it&apos;s free!
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignIn1 };
