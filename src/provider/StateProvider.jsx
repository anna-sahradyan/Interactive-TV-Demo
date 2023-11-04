import React, {useRef, useState} from "react";
import {StateContext} from "../context/StateContext.jsx";

export const StateProvider = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [shouldVideoPause, setShouldVideoPause] = useState(true);
    const [showBanner, setShowBanner] = useState(false);
    const videoRef = useRef();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const inputRef = useRef(null);
    const [color, setColor] = useState(false);
    const [openFinishInfo, setOpenFinishInfo] = useState(false);
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);
    const [inputValue, setInputValue] = useState("+7(926)_ _ _-_ _-_ _" || '');
    const closeDrawer = () => {
        setIsDrawerOpen(false);
        videoRef.current.play();

    }
    return(
        <StateContext.Provider value={{
            isDrawerOpen,
            setIsDrawerOpen,
            shouldVideoPause,
            setShouldVideoPause,
            videoRef,
            showBanner,
            setShowBanner,
            isCheckboxChecked,
            setIsCheckboxChecked,
            isConfirmed,
            setIsConfirmed,
            inputRef,
            color,
            setColor,
            openFinishInfo,
            setOpenFinishInfo,
            activeButtonIndex,
            setActiveButtonIndex,
            inputValue,
            setInputValue,
            closeDrawer
        }}>
            {children}
        </StateContext.Provider>
    )
}

