import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from "react-router-dom";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <h3>This is Home</h3>
            <div>{ navigation.state === "loading" ? "Loading.........": ""}</div>
            <Outlet />
        </div>
    );
};

export default Home;