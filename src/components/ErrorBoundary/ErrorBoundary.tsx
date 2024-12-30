"use client"

import React, { Component, ReactNode } from "react";
import { MdOutlineError } from "react-icons/md";
import "./ErrorBoundary.css"; // Import for optional custom styling

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render shows a fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to an error reporting service or console
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleRetry = () => {
    // Reset the error state to allow the component to re-render
    this.setState({ hasError: false });
  };

  render() {
   if (this.state.hasError) {
  return (
    <div className="bg-dark full-height flex-center">
      {/* Error Icon */}
      <MdOutlineError className="text-error"/>

      {/* Error Title */}
      <h1 className="text-white text-large">
        Oops! Something went wrong.
      </h1>

      {/* Error Description */}
      <p className="text-gray">
        We encountered an unexpected issue. Please refresh or contact support if the problem persists.
      </p>

      {/* Retry Button */}
      <button
        onClick={this.handleRetry}
        className="button"
      >
        Try Again
      </button>
    </div>
  );
}


    return this.props.children;
  }
}

export default ErrorBoundary;
