import React from 'react';
import Header from "../Header/Header.jsx";
import Banner from "./Banner.jsx";

const Home = ({setIsDrawerOpen,isDrawerOpen,handleMenuClick}) => {

    return (

        <>
            <Header setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen}handleMenuClick={handleMenuClick}/>
            <div className="flex justify-end items-center h-screen">
                <div className="absolute right-0 flex justify-center items-center ">
                    <Banner />
                </div>
            </div>


        </>

    );
};

export default Home;