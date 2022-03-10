import { Component } from 'react';
import { ErrorScreen } from '../ErrorScreen/ErrorScreen';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    // const myFallback=<fallback/>

    if (error && !fallback) return <ErrorScreen error={error} />;
    if (error) return <fallback error={error} />;

    return children;
  }
}
