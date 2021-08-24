
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Logo from './Logo';

// Component creates a simple modal displaying the selected GIF and its size
const GifModal = (props) => {

    // If the state modal is open is false an empty div is returned
    if (!props.modalIsOpen) {
        return <div></div>;
    } else {
    // If the state modalIsOpen is true then the modal div is returned
    // Returns the original size GIF rather than the preiview_size displayed in the gif list    
        const gif = props.selectedGif.images.original;
        return (
            <div className="gifmodal">
                <div className="gifmodal__container">
                    <img className="gifmodal__image" src={ gif.url } />
                    <p className="gifmodal__size">Gif-Size: { (gif.size / 1048576).toFixed(2) } MB</p>
                    <p className="gifmodal__date">Uploaded: { props.selectedGif.import_datetime }</p>
        
                    <button className="gifmodal__close" onClick={e => props.actions.closeModal()}>Close</button>
                    <a className="gifmodal__link" href={gif.url} download>GIPHY</a>
                    <div className="gifmodal__logo">
                        <Logo />
                    </div>
                </div>  
            </div>
        );
    }
};

// Returns modalIsOpen and selectedGif from the store
// If either state item is updated the component re renders itself
function mapStateToProps(state) {
    return {
        modalIsOpen: state.modal.modalIsOpen,
        selectedGif: state.modal.selectedGif
    };
}

// Dispatches any actions called in this component to the actions file
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Actions, dispatch),
    };
}

// Connect provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the reducers.
export default connect(mapStateToProps, mapDispatchToProps)(GifModal);