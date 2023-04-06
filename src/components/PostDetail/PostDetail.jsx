import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    
    const navigate = useNavigate();

    const addHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <h3>id: {id}</h3>
            <h4>title: {title}</h4>
            <p>{body}</p>
            <button onClick={addHandler}>go back</button>
        </div>
    );
};

export default PostDetail;