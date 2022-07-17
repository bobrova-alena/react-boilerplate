import React, { Component, ReactNode } from 'react';
import { ChildrenProps } from 'src/model/props';

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ChildrenProps, ErrorBoundaryState> {
  constructor(props: ChildrenProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.log(error);
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
