import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

// Search bar component
class SearchBar extends React.Component {

    // onInputChange passes the term property back up to the header where it is used to set the current term which is then supplied to API call
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
  
export default SearchBar;

