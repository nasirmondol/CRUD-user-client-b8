import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (_id) => {
        console.log('Delete', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                const remaining = users?.filter(user => user._id !== _id)
                setUsers(remaining)
                alert('Deleted successful!')
            }
        })
    }
    return (
        <div>
            {
                users?.map(user => <li key={user._id}>{user.name} : {user.email} <Link to={`/users/${user._id}`}>
                    Update
                </Link> <button onClick={() => handleDelete(user._id)}>X</button></li>)
            }
        </div>
    );
};

export default Users;