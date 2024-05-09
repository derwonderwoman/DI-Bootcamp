import React from "react"

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
    </div>
    )}
        return this.props.children
    } 
}
export default ErrorBoundary;

