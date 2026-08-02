import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = { children: ReactNode };
type State = { error: Error | null };

/** Catches render crashes so a blank page never looks like a missing route. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("UI crash:", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-4 px-6 text-center text-suvakta-900">
          <h1 className="font-sugar_peachy text-3xl">Something went wrong</h1>
          <p className="text-suvakta-700">{this.state.error.message}</p>
          <Link
            to="/"
            className="rounded-full border border-suvakta-900 bg-white px-5 py-2 font-bold shadow-[rgba(0,0,0,0.15)_0px_3px_0px_0px]"
          >
            Back home
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}
