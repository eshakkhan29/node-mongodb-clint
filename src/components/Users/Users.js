import React from 'react';
import { useNavigate } from 'react-router-dom';

const Users = ({ user, handelDeleteUser }) => {
    const { _id, name, mobile, email, address, city, zip } = user;
    const navigate = useNavigate();
    return (
        <div className='col-lg-4'>
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
            <h3>Mobile: {mobile}</h3>
            <h4>Address: {address}</h4>
            <h5>City: {city}</h5>
            <h6>Zip Code: {zip}</h6>
            <div className='d-flex justify-content-around mt-3'>
                <button onClick={() => navigate(`/user/${_id}`)} className='btn btn-secondary'>update user</button>
                <button onClick={() => handelDeleteUser(_id)} className='btn btn-danger'>Delete user</button>
            </div>
        </div>
    );
};

export default Users;