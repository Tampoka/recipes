import React from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

export const Callout = ({ children }) => {
  return (
    <ErrorBoundary>
      <div className="callout">{children}</div>
    </ErrorBoundary>
  );
};
