import * as React from "react";
import { Chrome } from "lucide-react";

export type SignIn1Props = {
  onSuccess?: (email: string) => void;
  title?: string;
  subtitle?: string;
};

const SignIn1 = ({
  onSuccess,
  title = "Welcome back",
  subtitle = "Sign in to view the leaderboard",
}: SignIn1Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSignIn = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    onSuccess?.(email);
  };

  const handleGoogleSignIn = () => {
    setError("");
    onSuccess?.(email || "google-user@suvakta.app");
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
              className="w-full rounded-xl bg-suvakta-50 px-5 py-3 text-sm text-suvakta-900 placeholder-suvakta-900/40 focus:outline-none focus:ring-2 focus:ring-suvakta-accent border border-suvakta-900/10 transition-shadow"
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              autoComplete="current-password"
              className="w-full rounded-xl bg-suvakta-50 px-5 py-3 text-sm text-suvakta-900 placeholder-suvakta-900/40 focus:outline-none focus:ring-2 focus:ring-suvakta-accent border border-suvakta-900/10 transition-shadow"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
            />
            {error ? (
              <div className="text-left text-sm font-bold text-red-500">{error}</div>
            ) : null}
          </div>

          <hr className="border-suvakta-900/10" />

          <div>
            <button
              type="button"
              onClick={handleSignIn}
              className="mb-3 w-full rounded-full bg-suvakta-accent px-5 py-3 text-sm font-bold text-suvakta-950 shadow-[rgba(0,0,0,0.15)_0px_3px_0px_0px] transition hover:translate-y-px hover:shadow-none border border-suvakta-900"
            >
              Sign in
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="mb-2 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-suvakta-900 shadow-[rgba(0,0,0,0.1)_0px_3px_0px_0px] transition hover:translate-y-px hover:shadow-none border border-suvakta-900/20 hover:bg-suvakta-50"
            >
              <Chrome className="h-5 w-5" aria-hidden />
              Continue with Google
            </button>

            <div className="mt-4 w-full text-center">
              <span className="text-xs font-medium text-suvakta-800/70">
                Don&apos;t have an account?{" "}
                <span className="text-suvakta-600 underline hover:text-suvakta-900 cursor-pointer font-bold">Sign up, it&apos;s free!</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignIn1 };
