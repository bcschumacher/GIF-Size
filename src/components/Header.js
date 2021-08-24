import React from 'react';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Logo from './Logo';
import SearchBar from '../components/SearchBar';

//Component responsible for managing the header
const Header = (props) => {
    return (
        <div className="header">
            <div className="header__hero">
                <div className="header__logocontainer">
                    <div className="header__img">
                        <Logo />
                    </div>
                    <div className="header__titlebox">
                        <h1 className="header__title">GIF-Size</h1>
                        <p className="header__subtitle">Powered by <span className="header__subtitle__bigger">GIPHY</span></p>
                    </div>
                </div>
                <div className="header__divider__container">
                    <div className="header__divider" />
                </div>
                <div className="header__search">
                    <SearchBar onTermChange={e => {props.actions.requestGifs(e), props.actions.setTerm(e)}} />
                </div>
                <div className="header__divider__container">
                    <div className="header__divider" />
                </div>
                <div className="header__sort__container">
                    <a className="header__about" href="#top">Back to Top</a>
                </div>
            </div>
        </div>
    );
}

// Returns gifs from the store
// If state item is updated the component re renders itself
function mapStateToProps(state) {
    return {
        gifs: state.gifs
    };
}

// Dispatches any actions called in this component to the actions file
function mapDispatchToProps(dispatch) {
    return {
            actions: bindActionCreators(Actions, dispatch)
        };
}

// Connect provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the reducers.
export default connect(mapStateToProps, mapDispatchToProps)(Header);