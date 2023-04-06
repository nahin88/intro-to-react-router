import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    
    const addByHandler = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div className='post'>
            <h4>Id: {id}</h4>
            <h3>title: {title}</h3>
            <Link to={`/post/${id}`}>Show details</Link>
            <Link to={`/post/${id}`}><button>show post detail</button></Link>
            <button onClick={addByHandler}>add by handler</button>
        </div>
    );
};

export default Post;