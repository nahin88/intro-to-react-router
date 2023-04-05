import React from 'react';
import Header from '../Header/Header';
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h3>This is Home</h3>
            <Outlet />
        </div>
    );
};

export default Home;