import React, {useEffect, useState} from 'react';
import Header from "../Header/Header.jsx";
import Banner from "./Banner.jsx";
import SmallBanner from "./SmallBanner.jsx";

const Home = ({setIsDrawerOpen, isDrawerOpen, handleMenuClick, videoRef, setShouldVideoPause, shouldVideoPause}) => {
    const [showBanner, setShowBanner] = useState(false);
    useEffect(() => {
        if (!shouldVideoPause) {
            setShowBanner(true);
        }
    }, [shouldVideoPause]);
    return (

        <>
            <Header setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} handleMenuClick={handleMenuClick}
                    videoRef={videoRef}/>
            <div className="flex justify-end items-center h-screen">
                <div className={`absolute right-0 flex justify-center items-center  ${showBanner ? "box" : ""}`}>
                    {isDrawerOpen ? <SmallBanner /> : null}
                    {showBanner && !isDrawerOpen ? <Banner /> : null}
                </div>
            </div>


        </>

    );
};

export default Home;