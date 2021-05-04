// this should be the framework for the table

    // image, name, phone, email, date of birth listed as rows and columns

function TableContainer(props) {
    return (
        <table class="table table-dark table-striped">
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
{/* this is what will be mapped over */}
                <tr>
                    <th scope="row">{props.image}</th>
                    <td>`${props.first}` `${props.last}`</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                    <td>{props.dob}</td>
                </tr>

            </tbody>
        </table>
    )
}

export default TableContainer