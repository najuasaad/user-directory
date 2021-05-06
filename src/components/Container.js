import React, { Component } from "react";
import axios from "axios";
import TableContainer from "./TableContainer"

let userData

class Container extends Component {

  state = {
    users: [],
    // search: "",
    // sort: "",
    //

  };

  async componentDidMount() {
    // should reset state with api call upon page load
    // plain api call, get all
    let api = await axios.get('https://randomuser.me/api/?results=100')
    userData = api.data.results
    this.setState({users: userData})
    // console.log(this.state.users) getting back array of objects

    // this.api()
    // console.log(this.state.users)
  }

  // async api() {
  //   const apiGet = await axios.get('https://randomuser.me/api/?results=100')
  //   console.log(apiGet.data.results)
    
  //   this.setState({
  //     users: apiGet.data.results
  //   })
  // }
  
  alphabetizeNames = query => {
    // not sure if need to pass query through
    // not sure how to do this function yet
  }

  searchNames = query => {
    // should filter by query being typed
  }

  handleInputChange = event => {
    this.setState({
      search: event.target.value,
    })
  }

  handleSearch = event => {
    event.preventDefault();
    // should search through employees by name after 3 keystrokes
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <input
              onChange={this.handleInputChange}
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
              {this.state.users.map((user) => {
                return <TableContainer key={user.picture.thumbnail} {...user} />
              })}
              
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Container;
