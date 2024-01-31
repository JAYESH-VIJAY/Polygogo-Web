import React from "react";
import { Notifier } from "@airbrake/browser";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  private airbrake: Notifier;
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.airbrake = new Notifier({
      projectId: 532326,
      projectKey: "3d217194ef480edcb7eb5030a963b4a2",
    });
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // Send error to Airbrake
    this.airbrake.notify({
      error: error,
      params: { info: info },
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
