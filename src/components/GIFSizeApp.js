import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import Footer from './Footer';
import GifList from './GifList';
import GifModal from './GifModal';
import Header from '../components/Header';

class GIFSizeApp extends React.Component {
    
    componentDidMount() {
        this.props.actions.requestGifs(this.props.term, this.props.offset);
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {

        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;
    
        if (scrollTop + clientHeight >= scrollHeight) {
            this.props.actions.increaseOffset();
            this.props.actions.requestMore(this.props.term, this.props.offset-1);
        }
    }

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

function mapStateToProps(state) {
    return {
        gifs: state.gifs.data,
        term: state.gifs.term,
        offset: state.gifs.offset,
        modalIsOpen: state.modal.modalIsOpen,
        selectedGif: state.modal.selectedGif
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Actions, dispatch),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(GIFSizeApp);