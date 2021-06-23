import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    state = {
        error: '',
    }

    componentDidCatch(error, info) {
        this.setState({
            error,
        })
    }

    render () {
        const {error} = this.state;
        return (
            error ? alert(error) : this.props.children
        )
    }

}