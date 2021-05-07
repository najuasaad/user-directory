// this should be the framework for the table

    // image, name, phone, email, date of birth listed as rows and columns
import React from "react";

function User(props) {
    return (    
        <tr>
            <th scope="row"><img alt="profile" src={props.picture.thumbnail} className="img-thumbnail"></img></th>
            <td>{props.name.first} {props.name.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{new Date(props.dob.date).toDateString()}</td>
        </tr> 
    )
}

export default User