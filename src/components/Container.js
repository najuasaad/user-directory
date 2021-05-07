import React, { Component } from "react";
import axios from "axios";
import User from "./User"

let userData

class Container extends Component {

  state = {
    users: [],
    search: "",
    filteredUsers: [],
    sort: "",
  };

  async componentDidMount() {
    // should reset state with api call upon page load
    // plain api call, get all
    let api = await axios.get('https://randomuser.me/api/?results=100')
    userData = api.data.results
    this.setState({users: userData, filteredUsers: userData})
    // console.log(this.state.users)/*  getting back array of objects */
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

  sort = (dir) => {
    let direction = dir
    let sorted = this.state.filteredUsers.sort( function (name1, name2) {
      let user1 = (name1.name.last).toLowerCase();
      let user2 = (name2.name.last).toLowerCase();
      
      if (direction === "ascending") {
        if (user1 < user2) {return -1;} else {return 1;}
      } 
      
      if (direction === "decending") {
        if (user1 > user2) {return -2;} else {return 2;}
      }
    })
    this.setState({ filteredList: sorted})   
  }

  sortE = (dir) => {
    let direction = dir
    let sorted = this.state.filteredUsers.sort( function (name1, name2) {
      let user1 = (name1.email).toLowerCase();
      let user2 = (name2.email).toLowerCase();
      
      if (direction === "ascending") {
        if (user1 < user2) {return -1;} else {return 1;}
      } 
      
      if (direction === "decending") {
        if (user1 > user2) {return -2;} else {return 2;}
      }
    })
    this.setState({ filteredList: sorted})   
  }

  handleAscendSort = () => {
    this.setState({sort: "ascending"})
    this.sort("ascending");
  }

  handleDecSort = () => {
    this.setState({sort: "decending"})
    this.sort("decending");
  }

  handleEmailA = () => {
    this.sortE("ascending");
  }

  handleEmailZ = () => {
    this.sortE("decending");
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
                <th scope="col">
                  <button className="btn btn-secondary" onClick={this.handleDecSort}>↓</button> Name <button className="btn btn-secondary" onClick={this.handleAscendSort}>↑</button>
                </th>
                <th scope="col">Phone</th>
                <th scope="col">
                  <button className="btn btn-secondary" onClick={this.handleEmailZ}>↓</button> Email <button className="btn btn-secondary" onClick={this.handleEmailA}>↑</button>
                </th>
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
