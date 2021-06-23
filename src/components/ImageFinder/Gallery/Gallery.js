import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

export default function Gallery ({images, onOpenLargeImage}) {
    return (
    <ul className="ImageGallery">
    {images.map((image)=> {
        const {largeImageURL, webformatURL} = image;
        return (<GalleryItem 
        key={largeImageURL} 
        largeImageURL={largeImageURL} 
        webformatURL={webformatURL} 
        onOpenLargeImage={onOpenLargeImage}
       />
        )
    })}
    </ul>
    )
}