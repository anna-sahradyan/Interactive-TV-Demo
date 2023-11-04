import React, {useContext, useEffect,} from "react";
import Home from "./components/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import {StateContext} from "./context/StateContext.jsx";

const App = () => {
    const {isDrawerOpen, setIsDrawerOpen, shouldVideoPause, setShouldVideoPause,videoRef} = useContext(StateContext);

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
            <Toaster/>
            <div className={""}>
                <video autoPlay loop muted className={" relative min-h-full min-w-full"} ref={videoRef}
                       style={{width: '100%', height: 'auto'}}>
                    <source src="/video.mp4/skiing.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className={"container absolute top-0 right-0"}>
                <Routes>
                    <Route path={"/"} element={<Home handleMenuClick={handleMenuClick} />}/>

                </Routes>

            </div>

        </>
    );
};

export default App;