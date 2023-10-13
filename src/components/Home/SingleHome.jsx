import './Home.css'

const SingleHome = ({home}) => {
    const {name,email, id} = home;
    return (
        <div className='home'>
            <h4>{id}</h4>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
        </div>
    );
};

export default SingleHome;