import React, {Component} from 'react';

export default class Alert extends Component {
    state = {
        message: '',
    }

    handleShowAlert = () => {
        this.setState({
            message: "Message!!!",
        })
    }

    handleCloseAlert = () => {
        this.setState({
            message: '',
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleShowAlert}>Show Alert</button>
                {this.state.message && (
                    <div>
                        <p>Alert</p>
                        <p>{this.state.message}</p>
                        <button onClick={this.handleCloseAlert}>Close Alert</button>
                    </div>
                )}
            </div>
        )
    }
}