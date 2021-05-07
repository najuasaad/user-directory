import React, { Component } from "react";
import axios from "axios";
import User from "./User"

let userData

class Container extends Component {

  state = {
    users: [],
    search: "",
    filteredUsers: [],
    // sort: "",
  };

  async componentDidMount() {
    // should reset state with api call upon page load
    // plain api call, get all
    let api = await axios.get('https://randomuser.me/api/?results=100')
    userData = api.data.results
    this.setState({users: userData, filteredUsers: userData})
    // console.log(this.state.users)/*  getting back array of objects */
  }
  
  alphabetizeNames = query => {
    // not sure if need to pass query through
    // not sure how to do this function yet
  }

  filterThroughNames(searchTerm) { 
    if( !searchTerm.length ){
      this.setState( {filteredUsers: this.state.users })
    } else {
      //console.log(searchTerm)
      const filtered = this.state.users.filter(user => user.name.first.toLowerCase().includes(searchTerm) || user.name.last.toLowerCase().includes(searchTerm))
      //console.log(filtered)
      this.setState( {filteredUsers: filtered })
    }
  }
 
  handleInputChange = event => {
    this.setState({
      search: event.target.value.toLowerCase(),
    })
    this.filterThroughNames(event.target.value.toLowerCase())
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <input
              onChange={this.handleInputChange}
              onKeyUp={this.handleSearch}
              type="text"
              className = "input-group m-5 form-control"
              placeholder="Start typing a name to search"
            />
          </div>
        </div>
        <div className="container">
          <h1>{this.state.search}</h1>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredUsers.map((user) => (
               <User key={user.email} {...user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Container;
