import Typography from '@mui/material/Typography';

import React from 'react';
// I'M PASSING THE REDUX STORE AS A CUSTOM PROP

interface Props {
  children?: any;
}

interface State {
  // IS THIS THE CORRECT TYPE FOR THE state ?
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: React.ErrorInfo): void {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log('error: ' + error);
    console.log('errorInfo: ' + JSON.stringify(errorInfo));
    console.log('componentStack: ' + errorInfo.componentStack);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <Typography gutterBottom variant="h5" component="div" color="error">
            Something went wrong...!
          </Typography>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
