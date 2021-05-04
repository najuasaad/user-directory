import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "./Search"
import TableContainer from "./TableContainer"

class Container extends Component {

  state = {
    // state will equal the array of api call
    // when searched, push a filtered array to state
    API
  };

  componentDidMount() {
    // should not have to set state, should auto load full api call

  }
  
  alphabetizeNames = query => {
    // not sure if need to pass query through
    // not sure how to do this function yet
  }

  searchNames = query => {
    // should filter by query being typed
  }

  handleInputChange = event => {
    // search bar 
    // should update state after 3 keystrokes? start filtering by names
    // this comes from "on change"
  }

  handleSearch = event => {
    event.preventDefault();
    // should search through employees by name after 3 keystrokes
  }

  render() {
    return (
      <div>
        <SearchBar />
        <TableContainer />
      </div>
    );
  }
}

export default Container;
