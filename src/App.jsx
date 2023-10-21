import React, {useState} from "react";
import Home from "./components/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import FinishInfo from "./components/Home/FinishInfo.jsx";

const App = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isVideoPaused, setIsVideoPaused] = useState(false);
    const handleMenuClick = () => {
        setIsDrawerOpen(!isDrawerOpen);
        const video = document.getElementById("video");
        if (isDrawerOpen) {
            setIsDrawerOpen(false,()=>{
                video.play();
            });
        } else {
            setIsDrawerOpen(true)
            video.pause();
        }

    };
    return (
        <>
            <video autoPlay loop muted className={"fixed bottom-0 right-0 min-h-full min-w-full"}   id="video" controls={isVideoPaused}>
                <source src="/video.mp4/skiing.mp4" type="video/mp4"/>
            </video>

            <div className={"container"}>
                <Routes>
                    <Route path={"/"} element={<Home isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}  handleMenuClick={handleMenuClick}/>}/>
                    <Route path={"/finish"} element={<FinishInfo/>}/>

                </Routes>

            </div>

        </>
    );
};

export default App;