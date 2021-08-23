import React from 'react';

const GifItem = ({gif, onGifSelect}) => {
    // if statement is used to handle undefined GIFs being supplied by the API
    // Example search sta provides an undefined
    if (typeof gif.images.preview_gif === 'undefined') {
        console.log(`Undefined GIF Found`)
        return (
            <div className="gif-item" onClick={() => onGifSelect(gif)}>
                <img src='https://fakeimg.pl/350x200/?text=Error: GIF Not Found' />
            </div>
        )
    } else {
        return (
            <div className="gif-item" onClick={() => onGifSelect(gif)}>
                <img src={gif.images.preview_gif.url} />
            </div>
        )   
    }
};

export default GifItem;