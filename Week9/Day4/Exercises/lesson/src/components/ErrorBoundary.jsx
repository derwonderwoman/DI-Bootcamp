import React from "react";


class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch = (error, errorInfo) => {
        this.setState({hasError: error, errorInfo:errorInfo});
    };

    render() {
        if(this.state.hasError) {
            return (
        <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
        </details>
    </div>
    )}
        return this.props.children
    } 
}
export default ErrorBoundary;