import React, {Component} from 'react';
import Spinner from './Spinner';
import Error from './Error';
import SearchForm from './SearchForm';
import NewsList from './NewsList';
import newsApi from '../../services/newsApi';

export default class RepetaNews extends Component {
    state = {
        articles: [],
        loading: false,
        error: null,
        searchQuery: '',
        page: 0,
    }

    componentDidMount() {
        // this.setState({loading: true});
        // this.fetchNews('react');
    }

    componentDidUpdate (prevProps, prevState) {
        const{searchQuery, page} = this.state;
        if(
            prevState.searchQuery!==searchQuery 
            || (prevState.page!==0 && page===0) 
        ) {
            this.fetchNews()
        } 
    }
 
    fetchNews = () => {
        this.setState({ loading: true });
        const {searchQuery, page} = this.state;
        newsApi
        .fetchNewsWithQuery(searchQuery, page)
        .then(articles=> this.setState(prevState => ({
            articles: [...prevState.articles, ...articles], 
            page: prevState.page +1
        })))
        .catch(error=> this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }

    handleSearchFormSubmit = query => {
        this.setState({
            searchQuery: query, 
            page: 0,
            articles: [],
        })
        
    }

    render() {
        const{loading, articles, error} = this.state;
        
        return(
            <div>
                {error && <Error 
                    message={`Whooooops... somethisng went wrong: ${error.message}(((`}/>}
                {loading && <Spinner message={"Loading..."} />}
                {/* < SearchForm onSubmit={this.fetchNews} /> */}
                < SearchForm onSubmit={this.handleSearchFormSubmit}/>
                {articles.length >0 &&
                 <NewsList articles={articles}/>}
                 {articles.length >0 &&
                 <button type="button" onClick={this.fetchNews}>Load more</button>}
            </div>
        )
    }
}