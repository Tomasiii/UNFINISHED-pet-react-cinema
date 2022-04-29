import { ErrorInfo, PureComponent } from "react";

import ErrorMessage from "./ErrorMessage/ErrorMessage";

class ErrorBoundary extends PureComponent<{ children: JSX.Element }> {
  state = {
    error: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
