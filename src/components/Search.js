import React from "react";

function SearchBar(props) {
  return (
    <div>
      search bar
      <input
        onChange={props.handleInputChange}
      />
    </div>
  )
}

export default SearchBar