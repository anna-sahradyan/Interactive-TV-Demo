import React, {useEffect, useRef, useState} from "react";
import Home from "./components/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import FinishInfo from "./components/Home/FinishInfo.jsx";
import { Toaster } from "react-hot-toast";
const App = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [shouldVideoPause, setShouldVideoPause] = useState(true);
    const videoRef = useRef();
    const handleMenuClick = () => {
        setIsDrawerOpen(!isDrawerOpen);
        if (!isDrawerOpen) {
            videoRef.current.pause();
        }
        return;
    };
    useEffect(() => {
        if (shouldVideoPause) {
            videoRef.current.pause();
            const playTimeout = setTimeout(() => {
                setShouldVideoPause(false);
                videoRef.current.play();
            }, 5000);

            return () => clearTimeout(playTimeout);
        }
    }, [shouldVideoPause]);


    return (
        <>
            <Toaster />
            <div className={""}>
                <video autoPlay loop muted className={" relative min-h-full min-w-full"} ref={videoRef} style={{ width: '100%', height: 'auto' }}>
                    <source src="/video.mp4/skiing.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className={"container absolute top-0 right-0"}>
                <Routes>
                    <Route path={"/"} element={<Home isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}
                                                     handleMenuClick={handleMenuClick} videoRef={videoRef}
                                                     shouldVideoPause={shouldVideoPause}
                                                     setShouldVideoPause={setShouldVideoPause}/>}/>
                    <Route path={"/finish"} element={<FinishInfo/>}/>

                </Routes>

            </div>

        </>
    );
};

export default App;