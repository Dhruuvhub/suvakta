import { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import { ArrowLeft } from "lucide-react";
import { SignIn1 } from "@/components/ui/modern-stunning-sign-in";
import { LEADERBOARD_PATH, SIGNUP_PATH, useAuth } from "@/context/AuthContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";

export function LoginPage() {
  const location = useLocation();
  const lenis = useLenis();
  const { signIn } = useAuth();
  const appNavigate = useAppNavigate();

  const redirectTo =
    (location.state as { from?: string } | null)?.from ?? LEADERBOARD_PATH;

  useLayoutEffect(() => {
    lenis?.stop();
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      lenis?.resize();
    };
  }, [lenis]);

  const handleSubmit = async (email: string, password: string) => {
    await signIn(email, password);
    appNavigate(redirectTo);
  };

  return (
    <div className="relative min-h-screen w-full bg-suvakta-50">
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          appNavigate("/");
        }}
        className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-suvakta-900 bg-white px-4 py-2 text-sm font-bold text-suvakta-900 shadow-[rgba(0,0,0,0.15)_0px_3px_0px_0px] transition hover:translate-y-px hover:shadow-none md:left-8 md:top-8"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back home
      </Link>

      <SignIn1
        onSubmit={handleSubmit}
        title="Sign in to Suvakta"
        subtitle="You need an account before viewing the leaderboard."
        onSignUpClick={() => appNavigate(SIGNUP_PATH)}
      />
    </div>
  );
}
