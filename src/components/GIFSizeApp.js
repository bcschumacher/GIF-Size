import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Footer from './Footer';
import GifList from './GifList';
import GifModal from './GifModal';
import Header from '../components/Header';

//Top level component for the application
class GIFSizeApp extends React.Component {
    
    // Function that triggers items when the GIFSizeApp component mounts for the first time
    componentDidMount() {
        // Requests gifs action on load before a search is completed so that app does not start on a blank screen
        this.props.actions.requestGifs(this.props.term, this.props.offset);

        // Creates an event listener to track the user's scroll
        window.addEventListener('scroll', this.listenToScroll)
    }

    // Function to track the user's scroll
    listenToScroll = () => {

        // Variables for tracking scroll
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;
    
        // If scroll is greater than or equal to scroll height
        if (scrollTop + clientHeight >= scrollHeight) {
            
            // Dispatch action to increase offset
            this.props.actions.increaseOffset();

            // Dispatch action to request more GIFs
            this.props.actions.requestMore(this.props.term, this.props.offset-1);
        }
    }

    // Function to render the GIFSizeApp component
    render() {
        return (
            <div>
                <a id="top"></a>
                <Header />
                <GifList gifs={ this.props.gifs } onGifSelect={ selectedGif => this.props.actions.openModal({selectedGif}) } />
                <GifModal selectedGif={ this.props.selectedGif } />
                <Footer />
            </div>
        );
    }
};

// Returns gifs, term, offset, modalIsOpen, and selectedGif from the store
// If any state items are updated the component re renders itself
function mapStateToProps(state) {
    return {
        gifs: state.gifs.data,
        term: state.gifs.term,
        offset: state.gifs.offset,
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
export default connect(mapStateToProps, mapDispatchToProps)(GIFSizeApp);