import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { id,title,body} = post;
    return (
        <div className='post'>
            <h4>Id: {id}</h4>
            <h3>title: {title}</h3>
            <Link to={`/post/${id}`}>Show details</Link>
            <button>show post detail</button>
        </div>
    );
};

export default Post;