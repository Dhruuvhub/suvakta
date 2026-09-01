import { useLayoutEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useLenis } from "lenis/react";
import { ArrowLeft, Upload, User, Loader2 } from "lucide-react";
import { useAuth, ApiError } from "@/context/AuthContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { Navbar } from "@/sections/Navbar";

export function ProfilePage() {
  const lenis = useLenis();
  const appNavigate = useAppNavigate();
  const { user, updateUser } = useAuth();
  
  const [name, setName] = useState(user?.name || "");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(user?.avatarUrl || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    lenis?.resize();
    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [lenis]);

  // Handle file selection and convert to Base64
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (e.g., max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setError("Image must be smaller than 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === "string") {
        setAvatarUrl(result);
        setError("");
        setSuccess(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Name cannot be empty.");
      return;
    }

    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      await updateUser(name.trim(), avatarUrl);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: unknown) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to update profile.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section-copy relative z-10 min-h-screen w-full overflow-x-clip bg-suvakta-50 font-quicksand font-medium text-suvakta-900">
      <Navbar />
      <main className="section-container px-4 pb-16 pt-[calc(71px+1.5rem)] md:pt-[calc(66px+2rem)]">
        <div className="mb-6 flex flex-col gap-4 md:mb-8">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              appNavigate("/");
            }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-suvakta-900 bg-white px-4 py-2 text-sm font-bold shadow-[rgba(0,0,0,0.15)_0px_3px_0px_0px] transition hover:translate-y-px hover:shadow-none"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back home
          </Link>
          <div>
            <h1 className="font-sugar_peachy text-[clamp(2rem,8vw,3.25rem)] leading-[1.05]">
              <span className="inline-block rounded-md border-2 border-suvakta-900 bg-suvakta-accent px-4 py-2 text-suvakta-900 shadow-[rgba(0,0,0,0.2)_0px_4px_0px_0px]">
                Your Profile
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-suvakta-800">
              Manage your personal information and how you appear on the leaderboard.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-2xl rounded-3xl border-2 border-suvakta-900 bg-white p-6 shadow-[rgba(0,0,0,0.15)_0px_8px_0px_0px] md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-suvakta-50 bg-suvakta-100 shadow-sm md:h-32 md:w-32">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-10 w-10 text-suvakta-900/30 md:h-12 md:w-12" />
                )}
              </div>
              
              <div className="flex flex-col items-center gap-3 sm:items-start">
                <h3 className="text-lg font-bold">Profile Picture</h3>
                <p className="text-center text-sm text-suvakta-800/70 sm:text-left">
                  Upload a new profile picture. Max size 2MB.
                </p>
                <div className="flex gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 rounded-full border border-suvakta-900 bg-suvakta-50 px-4 py-2 text-sm font-bold shadow-[rgba(0,0,0,0.1)_0px_2px_0px_0px] transition hover:translate-y-px hover:bg-suvakta-100 hover:shadow-none"
                  >
                    <Upload className="h-4 w-4" />
                    Upload Image
                  </button>
                  {avatarUrl && (
                    <button
                      type="button"
                      onClick={() => setAvatarUrl(null)}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-red-500 transition hover:bg-red-50"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>

            <hr className="border-suvakta-900/10" />

            {/* Profile Info Section */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-suvakta-900">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="w-full rounded-xl border border-suvakta-900/10 bg-suvakta-50 px-5 py-3 text-sm text-suvakta-900/60 transition-shadow cursor-not-allowed"
                />
                <p className="text-xs text-suvakta-800/50">Email cannot be changed.</p>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-suvakta-900">
                  Student Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-suvakta-900/20 bg-white px-5 py-3 text-sm text-suvakta-900 placeholder-suvakta-900/40 focus:border-suvakta-900 focus:outline-none focus:ring-2 focus:ring-suvakta-accent/50 transition-all disabled:opacity-60"
                />
              </div>
            </div>

            {/* Error & Success Messages */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-600">
                {error}
              </div>
            )}
            
            {success && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-bold text-green-600">
                Profile updated successfully!
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={loading || !name.trim()}
                className="inline-flex items-center gap-2 rounded-full border border-suvakta-900 bg-suvakta-900 px-8 py-3 text-sm font-bold text-white shadow-[rgba(0,0,0,0.2)_0px_4px_0px_0px] transition hover:translate-y-px hover:shadow-none disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
