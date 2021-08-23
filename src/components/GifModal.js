
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

const GifModal = (props) => {
    if (!props.modalIsOpen) {
        return <div></div>;
    } else {
        const gif = props.selectedGif.images.original.url;
        return (
            <div className="gifmodal">
                <div className="gifmodal__container">
                    <img className="gifmodal__image" src={ props.selectedGif.images.original.url } />
                    <p className="gifmodal__size"><strong>Original Gif Size:</strong> { (props.selectedGif.images.original.size / 1000000).toFixed(2) } MB</p>
        
                    <button className="gifmodal__close" onClick={e => props.actions.closeModal()}>Close</button>
                    <a className="gifmodal__link" href={gif} download>GIPHY</a>
                </div>  
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        modalIsOpen: state.modal.modalIsOpen,
        selectedGif: state.modal.selectedGif
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Actions, dispatch),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(GifModal);