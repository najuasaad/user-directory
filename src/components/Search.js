import React from "react";

function SearchBar(props) {
  return (
    <div className="container">
      <div className="row">
        <input
          onChange={props.handleInputChange}
          type="text"
          className = "input-group m-5 form-control"
          placeholder="Start typing a name to search"
        />
      </div>
    </div>
  )
}

export default SearchBar