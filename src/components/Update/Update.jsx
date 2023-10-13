import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loaderData = useLoaderData();
    // const  [user, setUser] = useState(loaderData);


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const user = {
            name, email
        }
        fetch(`http://localhost:5000/users/${loaderData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    alert('User updated successfully!')
                }
            })
    }

    return (
        <div>
            {loaderData?.name}
            <form onSubmit={handleUpdate}>
                <input type="text" defaultValue={loaderData?.name} name="name" placeholder="name" />
                <br />
                <input type="email" defaultValue={loaderData?.email} name="email" placeholder="email" id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;