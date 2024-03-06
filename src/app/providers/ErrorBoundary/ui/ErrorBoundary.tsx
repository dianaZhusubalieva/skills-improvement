import React, {type ErrorInfo, type ReactNode} from "react";
import {types} from "sass";
import Error = types.Error;

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    message: string;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    // state = {
    //     hasError: false,
    //     message: "",
    // };
    // // constructor(props: ErrorBoundaryProps) {
    // //     super(props);
    // //     this.state = {hasError: false, message: ""};
    // // }
    //
    // // eslint-disable-next-line n/handle-callback-err
    // static getDerivedStateFromError(error: Error) {
    //     // Update state so the next render will show the fallback UI.
    //     return {hasError: true, message: "need to get message"};
    // }

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false, message: ""};
    }

    // eslint-disable-next-line n/handle-callback-err
    componentDidCatch(error: Error, info: ErrorInfo) {
        this.setState({hasError: true, message: error.toString()});
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        if (hasError) {
            return <div>something went wrong</div>;
        }

        return children;
    }
}

export default ErrorBoundary;
