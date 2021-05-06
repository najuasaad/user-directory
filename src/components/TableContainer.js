// this should be the framework for the table

    // image, name, phone, email, date of birth listed as rows and columns
import React from "react";

function TableContainer(props) {
    return (    
        <tr>
            <th scope="row"><img alt="profile" src={props.picture.thumbnail} className="img-thumbnail"></img></th>
            <td>{props.name.first} {props.name.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob.date}</td>
        </tr> 
    )
}

export default TableContainer