import React from "react";

//  Error boundary to prevent compilation errors when changes are made in other modules
//  Error Boundary Must Be A Class

export default class SafeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch() {}

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }

}