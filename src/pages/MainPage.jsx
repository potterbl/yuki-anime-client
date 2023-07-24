import React from 'react';
import Header from "../components/Header";
import MainScreen from "../components/mainScreen";
import Trending from "../components/Trending";
import Plans from "../components/Plans";
import Footer from "../components/Footer";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <MainScreen/>
            <Trending/>
            <Plans/>
            <Footer/>
        </div>
    );
};

export default MainPage;