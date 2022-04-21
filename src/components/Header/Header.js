import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='col-lg-4'>
            <Link to='/'>Home</Link>
            <Link to='/adduser'>Add User</Link>
        </div>
    );
};

export default Header;