import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
        console.error(error);
    }
  }

  render() {
    if (this.state.error) {
      return (
                <div className="error-message">
                    Sorry, something went wrong!
                </div>
      );
    }
    return this.props.children;
  }
}
