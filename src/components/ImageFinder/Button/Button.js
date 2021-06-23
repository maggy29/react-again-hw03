import React from 'react';

export default function Button ({onLoadMore}) {
    return(
        <div className="buttonContainer">
            <button 
                className="Button" 
                type="button" 
                onClick={onLoadMore}
              >Load more</button>
        </div>
    )
}