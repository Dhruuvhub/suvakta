import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLenis } from "lenis/react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { LEADERBOARD_PATH, LOGIN_PATH, useAuth, ApiError } from "@/context/AuthContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";

export function SignUpPage() {
  const lenis = useLenis();
  const { signUp } = useAuth();
  const appNavigate = useAppNavigate();

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [collegeEmail, setCollegeEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleNextStep = () => {
    if (!name.trim()) {
      setError("Student name is required.");
      return;
    }
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid personal email address.");
      return;
    }
    if (!department.trim()) {
      setError("Department is required.");
      return;
    }
    if (!year) {
      setError("Please select your year.");
      return;
    }
    if (!collegeEmail || !collegeEmail.toLowerCase().trim().endsWith("@mirandahouse.ac.in")) {
      setError("Please enter a valid Miranda House Mail ID.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleSubmit = async () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      await signUp(name.trim(), email, password, confirmPassword, department.trim(), year, collegeEmail.toLowerCase().trim());
      appNavigate(LEADERBOARD_PATH);
    } catch (err: unknown) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Sign up failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
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
            Create your account
          </h2>
          <p className="mb-6 text-center text-sm font-medium text-suvakta-800/70 font-quicksand">
            Join Suvakta MUN Club
          </p>

          <div className="flex w-full flex-col gap-4 font-quicksand font-medium">
            <div className="flex w-full flex-col gap-3">
              {step === 1 ? (
                <>
                  <input
                    placeholder="Student Name"
                    type="text"
                    value={name}
                    autoComplete="name"
                    disabled={loading}
                    className="w-full rounded-xl bg-suvakta-50 px-5 py-3 text-sm text-suvakta-900 placeholder-suvakta-900/40 focus:outline-none focus:ring-2 focus:ring-suvakta-accent border border-suvakta-900/10 transition-shadow disabled:opacity-60"
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
                  />

                  <input
                    placeholder="Personal Mail"
                    type="email"
                    value={email}
                    autoComplete="email"
                    disabled={loading}
                    className="w-full rounded-xl bg-suvakta-50 px-5 py-3 text-sm text-suvakta-900 placeholder-suvakta-900/40 focus:outline-none focus:ring-2 focus:ring-suvakta-accent border border-suvakta-900/10 transition-shadow disabled:opacity-60"
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
                  />

                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    disabled={loading}
                    className={`w-full rounded-xl bg-suvakta-50 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-suvakta-accent border border-suvakta-900/10 transition-shadow disabled:opacity-60 appearance-none cursor-pointer ${department ? "text-suvakta-900" : "text-suvakta-900/40"}`}
                  >
                    <option value="" disabled>Department</option>
                    <option value="USG Delegate Affairs">USG Delegate Affairs</option>
                    <option value="USG Conference Affairs">USG Conference Affairs</option>
                    <option value="USG Logistics">USG Logistics</option>
                    <option value="USG Public Relations">USG Public Relations</option>
                    <option value="USG Outreach">USG Outreach</option>
                    <option value="USG EB Affairs">USG EB Affairs</option>
                    <option value="USG Finance">USG Finance</option>
                    <option value="USG Editorial">USG Editorial</option>
                    <option value="USG Creative">USG Creative</option>
                    <option value="USG Sponsorship">USG Sponsorship</option>
                    <option value="USG Hospitality">USG Hospitality</option>
                    <option value="USG Media">USG Media</option>
                    <option value="USG Communications">USG Communications</option>
                  </select>

                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    disabled={loading}
                    className="w-full rounded-xl bg-suvakta-50 px-5 py-3 text-sm text-suvakta-900 placeholder-suvakta-900/40 focus:outline-none focus:ring-2 focus:ring-suvakta-accent border border-suvakta-900/10 transition-shadow disabled:opacity-60 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>

                  <input
                    placeholder="Miranda House Mail ID"
                    type="email"
                    value={collegeEmail}
                    disabled={loading}
                    className="w-full rounded-xl bg-suvakta-50 px-5 py-3 text-sm text-suvakta-900 placeholder-suvakta-900/40 focus:outline-none focus:ring-2 focus:ring-suvakta-accent border border-suvakta-900/10 transition-shadow disabled:opacity-60"
                    onChange={(e) => setCollegeEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleNextStep()}
                  />
                </>
              ) : (
                <>
                  <div className="relative">
                    <input
                      placeholder="Create Password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      autoComplete="new-password"
                      disabled={loading}
                      className="w-full rounded-xl bg-suvakta-50 px-5 py-3 pr-12 text-sm text-suvakta-900 placeholder-suvakta-900/40 focus:outline-none focus:ring-2 focus:ring-suvakta-accent border border-suvakta-900/10 transition-shadow disabled:opacity-60"
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-suvakta-900/40 hover:text-suvakta-900/70 transition-colors cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      placeholder="Confirm Password"
                      type={showConfirm ? "text" : "password"}
                      value={confirmPassword}
                      autoComplete="new-password"
                      disabled={loading}
                      className="w-full rounded-xl bg-suvakta-50 px-5 py-3 pr-12 text-sm text-suvakta-900 placeholder-suvakta-900/40 focus:outline-none focus:ring-2 focus:ring-suvakta-accent border border-suvakta-900/10 transition-shadow disabled:opacity-60"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-suvakta-900/40 hover:text-suvakta-900/70 transition-colors cursor-pointer"
                      onClick={() => setShowConfirm(!showConfirm)}
                    >
                      {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>

                  {/* Password strength hint */}
                  {password.length > 0 && password.length < 8 && (
                    <p className="text-xs text-suvakta-800/50">
                      Password must be at least 8 characters
                    </p>
                  )}
                </>
              )}

              {error ? (
                <div className="text-left text-sm font-bold text-red-500">{error}</div>
              ) : null}
            </div>

            <hr className="border-suvakta-900/10" />

            <div>
              {step === 1 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={loading}
                  className="mb-3 w-full rounded-full bg-suvakta-accent px-5 py-3 text-sm font-bold text-suvakta-950 shadow-[rgba(0,0,0,0.15)_0px_3px_0px_0px] transition hover:translate-y-px hover:shadow-none border border-suvakta-900 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  Next
                </button>
              ) : (
                <div className="flex flex-col gap-3 mb-3">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full rounded-full bg-suvakta-accent px-5 py-3 text-sm font-bold text-suvakta-950 shadow-[rgba(0,0,0,0.15)_0px_3px_0px_0px] transition hover:translate-y-px hover:shadow-none border border-suvakta-900 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <span className="inline-flex items-center justify-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                        </svg>
                        Creating account…
                      </span>
                    ) : (
                      "Create account"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    disabled={loading}
                    className="w-full rounded-full bg-suvakta-50 px-5 py-3 text-sm font-bold text-suvakta-900 transition hover:bg-suvakta-100 border border-suvakta-900/20 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Back
                  </button>
                </div>
              )}

              <div className="mt-4 w-full text-center">
                <span className="text-xs font-medium text-suvakta-800/70">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => appNavigate(LOGIN_PATH)}
                    className="text-suvakta-600 underline hover:text-suvakta-900 cursor-pointer font-bold"
                  >
                    Sign in
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
