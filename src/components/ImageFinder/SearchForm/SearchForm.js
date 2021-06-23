import React, {Component} from 'react';

export default class SearchForm extends Component {
    state={
        imageQuery: '',
    }

    handleChange = (e) => {
        this.setState({
            imageQuery: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.imageQuery);
        this.setState({imageQuery: '',})
    }

    render() {
        return(
            <header className="Searchbar">
              <form className="SearchForm" onSubmit={this.handleSubmit}>
                <button type="submit" className="SearchForm-button">
                  <span className="SearchForm-button-label">Search</span>
                </button>
                <input 
                    onChange={this.handleChange}    
                    name="query" 
                    value={this.state.imageQuery} 
                    placeholder="What image You will find?"
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                />
                
              </form>
            </header>
        )
    }
}