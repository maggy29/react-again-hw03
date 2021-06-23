import React, { Component } from 'react';

export default class SearchForm extends Component {
    state={
        inputValue: '',
    }

    handleInputChange = (e) => {
        this.setState({inputValue:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState({inputValue: ''})
    }

    render() {
        const {inputValue} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Your Request
                    <input name="query" value={inputValue} onChange={this.handleInputChange}/>
                </label>
                <button type="submit">Search</button>
            </form>
        )
    }
}