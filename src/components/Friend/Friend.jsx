import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend);
    const {name,email,username,phone,id } = friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>show me detail</Link></p>
        </div>
    );
};

export default Friend;