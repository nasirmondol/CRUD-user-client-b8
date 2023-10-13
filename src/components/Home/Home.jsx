import Users from '../Users/Users';
import './Home.css';
const Home = () => {
    const handleUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email }
        console.log(user)
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('user create successful')
                    form.reset();
                }
                console.log(data)
            })
    }
    return (
        <>
            <div className="home">
                <div >
                    <form onSubmit={handleUser}>
                        <input type="text" name="name" placeholder="your name" />
                        <br />
                        <input type="email" name="email" placeholder="email" id="" />
                        <br />
                        <input type="submit" value="Add User" />
                    </form>
                </div>
            </div>
            <Users></Users>
        </>
    );
};

export default Home;