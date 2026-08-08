import { Link } from "react-router-dom";
import { LOGIN_PATH, useAuth } from "@/context/AuthContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";

const buttonClass =
  "relative flex h-11 max-w-full items-center justify-center rounded-[153.846px] border border-suvakta-900 bg-suvakta-accent text-suvakta-900 px-4 pb-px text-[15.3846px] font-normal leading-[15.3846px] shadow-[rgba(0,0,0,0.15)_0px_3.84615px_0px_0px] transition-shadow hover:shadow-[rgba(0,0,0,0.5)_0px_0px_0px_0px] md:h-[39.1111px] md:px-[17.7778px] md:text-[14.2222px] md:leading-[14.2222px] md:rounded-[142.222px] md:shadow-[rgba(0,0,0,0.15)_0px_3.55556px_0px_0px]";

const labelClass =
  "mt-px block text-[clamp(0.8125rem,2.5vw,0.9625rem)] font-bold tracking-[-0.153846px] md:mt-[0.888889px] md:tracking-[-0.142222px]";

/** Navbar pill — opens the login page, or signs out when already logged in. */
export const LoginButton = () => {
  const appNavigate = useAppNavigate();
  const { isAuthenticated, signOut } = useAuth();

  if (isAuthenticated) {
    return (
      <button
        type="button"
        className={buttonClass}
        onClick={() => {
          signOut();
          appNavigate("/");
        }}
      >
        <span className={labelClass}>Logout</span>
      </button>
    );
  }

  return (
    <Link
      to={LOGIN_PATH}
      className={buttonClass}
      onClick={(e) => {
        e.preventDefault();
        appNavigate(LOGIN_PATH);
      }}
    >
      <span className={labelClass}>Login</span>
    </Link>
  );
};

/** @deprecated use LoginButton */
export const TicketButton = LoginButton;
