import React, {useContext, useEffect} from 'react';
import Header from "../Header/Header.jsx";
import Banner from "./Banner.jsx";
import SmallBanner from "./SmallBanner.jsx";
import {StateContext} from "../../context/StateContext.jsx";



const Home = ({handleMenuClick}) => {
    const {
        isDrawerOpen,
        shouldVideoPause,
        showBanner,
        setShowBanner
    } = useContext(StateContext);

    useEffect(() => {
        if (!shouldVideoPause) {
            setShowBanner(true);
        }
    }, [shouldVideoPause]);

    return (

        <>
            <Header handleMenuClick={handleMenuClick}/>
            <div className="flex justify-end items-center h-screen">
                <div className={`absolute right-0 flex justify-center items-center  ${showBanner ? "box" : ""}`}>
                    {isDrawerOpen ? (<SmallBanner />) : null}
                    {showBanner && !isDrawerOpen ? <Banner/> : null}
                </div>
            </div>


        </>

    );
};

export default Home;