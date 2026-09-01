import { Link } from "react-router-dom";
import { LOGIN_PATH, useAuth } from "@/context/AuthContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

/** Navbar pill — opens the login page, or signs out when already logged in. */
export const LoginButton = () => {
  const appNavigate = useAppNavigate();
  const { isAuthenticated, signOut } = useAuth();

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-2">
        <LiquidMetalButton
          label="Profile"
          onClick={() => {
            appNavigate("/profile");
          }}
        />
        <LiquidMetalButton
          label="Logout"
          onClick={async () => {
            await signOut();
            appNavigate("/");
          }}
        />
      </div>
    );
  }

  return (
    <LiquidMetalButton
      label="Members only"
      onClick={() => {
        appNavigate(LOGIN_PATH);
      }}
    />
  );
};

/** @deprecated use LoginButton */
export const TicketButton = LoginButton;
