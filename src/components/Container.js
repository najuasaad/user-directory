import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "./Search"
import TableContainer from "./TableContainer"

class Container extends Component {

  state = {
    users: [],
    search: "",
    sort: "",
    //

  };

  // componentDidMount() {
  //   // should reset state with api call upon page load
  //   API.getUserList()
  //   .then(res => {
  //     let userArray = res.data.results.map(user => {
  //       return {
  //         first: user.name.first,
  //         last: user.name.last,
  //         phone: user.phone,
  //         image: user.picture.thumbnail,
  //         email: user.email,
  //         dob: user.dob.date
  //       }
  //     });
  //     this.setState({ users: userArray })
  //   })
  //   .catch(err => console.log(err))
  // }
  
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
        <div className="container"><TableContainer /></div>
        
      </div>
    );
  }
}

export default Container;
