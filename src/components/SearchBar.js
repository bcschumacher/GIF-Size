import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class SearchBar extends React.Component {
    onInputChange(term) {
        this.props.onTermChange(term);
    }

  render() {
    return (
      <div className="search__container">
        <input className="search" placeholder="Search" onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      gifs: state.gifs.data
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Actions, dispatch),
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

