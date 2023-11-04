import React, {useContext} from 'react';
import {StateContext} from "../../context/StateContext.jsx";



const FinishInfo = () => {
    const {isCheckboxChecked} = useContext(StateContext);
    return (
        <div className="w-[380px]  h-screen flex flex-col text-center justify-center items-center ml-[-70px]">
            {!isCheckboxChecked ? (
                <>
                    <div className="w-[284px] h-[76px] text-2xl p-2  mb-3 ">
                        <span>APPLICATION ACCEPTED</span>
                    </div>
                    <div className="w-[284px] h-[40px] text-base leading-8">
                        <span>Keep your phone handy. Our manager will contact you soon</span>
                    </div>
                </>
            ) : (
                <div className="w-80 h-20 text-2xl p-2 border-2 mb-5">
                    <span>APPLICATION NOT ACCEPTED</span>
                </div>
            )}
        </div>
    );
};

export default FinishInfo;
