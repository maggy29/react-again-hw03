import React, {Component} from 'react';
 
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import Modal from './Modal';
import Loader from './Loader';
import Button from './Button';

import pixabayApi from '../../services/pixabayApi';
import './styles.css';

export default class ImageFinder extends Component {
    state={
        loading: false,
        error: '',
        query: '',
        page: 1,
        images: [],
        largeImageURL: '',
    }

    componentDidUpdate (prevProps, prevState) {
        const {query, page} = this.state;
        if (prevState.query!==query 
            || (prevState.page!==1 && page===1)) {
                this.fetchImages();
        }
    }

    fetchImages = () => {
        this.setState({loading: true});
        const {query, page} = this.state;
        pixabayApi(query, page)
        .then(images => this.setState(prevState => ({
            images: [...prevState.images, ...images],
            page: prevState.page + 1,
        })))
        .catch(error=>this.setState({error}))
        .finally( ()=> {
            this.setState({ loading: false })
            //this.smoothScroll()

        }            
        )
    }

    handleSubmitQuery = (imageQuery) => {
        this.setState({
            query: imageQuery,
            page: 1,
            images: [],
        });
    }

    openLargeImage = (largeImageURL) => {
        this.setState({largeImageURL})
    }

    closeLargeImage = () => {
        this.setState({largeImageURL: ''})
    } 
    
    smoothScroll = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          })
    }

    render() {
        console.log( document.documentElement.scrollHeight)
        const {loading, images, largeImageURL} = this.state;
        return(
            <>
            <SearchForm onSubmit={this.handleSubmitQuery}/>
            
            {images.length >0 && <Gallery 
              images={images} 
              onOpenLargeImage={this.openLargeImage}
            />}
            {loading && <Loader />}
            {images.length >0 &&  <Button onLoadMore={this.fetchImages}/>}
              
              {largeImageURL && <Modal large={largeImageURL} onClose={this.closeLargeImage}/>}
            </>
        )
    }
}