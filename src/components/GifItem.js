import React from 'react';

//Component handles each individual GIF within the GIF list
const GifItem = ({gif, onGifSelect}) => {

    // If statement is used to handle undefined GIFs being supplied by the API
    // Example search sta provides an undefined
    if (typeof gif.images.preview_gif === 'undefined') {
        console.log(`Undefined GIF Found`)
        return (

            // Displays a simple error image generated from the URL
            <div className="gif-item" onClick={() => onGifSelect(gif)}>
                <img src='https://fakeimg.pl/350x200/?text=Error: GIF Not Found' />
            </div>
        )
    } else {
        return (
            
            // Clickable div to return the selected gif that displays the preview gif inside
            <div className="gif-item" onClick={() => onGifSelect(gif)}>
                <img src={gif.images.preview_gif.url} />
            </div>
        )   
    }
};

export default GifItem;