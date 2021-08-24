import React from 'react';
import GifItem from './GifItem';

//Component recieves the array of GIF objects from props and maps each one to a GIF item.
const GifList = (props) => {
    const gifItems = props.gifs.map((image) => {
        return <GifItem key={image.id}
                        gif={image}
                        onGifSelect={props.onGifSelect} />
    });
    // Returns the full GIF list to be displayed
    return (
        <div className="gif-list">{gifItems}</div>
    );
};

export default GifList;