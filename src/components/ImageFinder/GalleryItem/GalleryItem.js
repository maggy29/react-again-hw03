import React from 'react';

export default function GalleryItem ({webformatURL, largeImageURL, onOpenLargeImage}) {
    return (
        <li>
            <img 
              className="ImageGalleryItem-image" 
              src={webformatURL} alt="" 
              name={largeImageURL}
              onClick={(e)=>onOpenLargeImage(e.target.name)}
              ></img> 
        </li>
    )
}