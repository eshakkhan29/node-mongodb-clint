import useUsers from '../../Hook/useUsers/useUsers';
import Users from '../Users/Users';

const Home = () => {
    const [users, setUsers] = useUsers();
    
    const handelDeleteUser = id => {

        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('lol')
                    const restUser = users.filter(user => user._id !== id)
                    setUsers(restUser);
                }
            })
    }

    return (
        <div className='container'>
            <h1>Home</h1>
            <div className='row mt-5 g-5'>
                {
                    users.map(user => <Users key={user._id} handelDeleteUser={handelDeleteUser} user={user}></Users>)
                }
            </div>
        </div>
    );
};

export default Home;