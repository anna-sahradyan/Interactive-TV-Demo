import React, {useEffect, useRef, useState} from 'react';
import {AiOutlineFullscreenExit} from 'react-icons/ai';
import toast from "react-hot-toast";


function PhoneOrder(props) {
    const [formattedValue, setFormattedValue] = useState("+7(926)_ _ _-_ _-_ _");
    const [inputValue, setInputValue] = useState("");
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [showConfirmationWarning, setShowConfirmationWarning] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const inputRef = useRef(null);
    const [activeItem, setActiveItem] = useState({
        activeObject: null,
        objects: [1, 2, 3, 4, 5, 6, 7, 8, 9, "Clear", 0]
    });
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);
    //?formatting value
    const formatPhoneNumber = (inputValue) => {
        // Remove all non-numeric characters
        const numericValue = inputValue.replace(/\D/g, "");

        // Format the numeric value
        let formattedPhoneNumber = "";
        if (numericValue.length > 0) {
            if (["7", "8", "9"].indexOf(numericValue[0]) > -1) {
                formattedPhoneNumber = "+7";
                if (numericValue.length > 1) {
                    formattedPhoneNumber += " (" + numericValue.substring(1, 4);
                }
                if (numericValue.length >= 5) {
                    formattedPhoneNumber += ") " + numericValue.substring(4, 7);
                }
                if (numericValue.length >= 8) {
                    formattedPhoneNumber += "-" + numericValue.substring(7, 9);
                }
                if (numericValue.length >= 10) {
                    formattedPhoneNumber += "-" + numericValue.substring(9, 11);
                }
            } else {
                formattedPhoneNumber = "+" + numericValue.substring(0, 16);
            }
        }

        return formattedPhoneNumber;
    };
//?change value
    const handleChange = (e) => {
        const inputValue = e.target.value;
        const formattedPhoneNumber = formatPhoneNumber(inputValue);
        setFormattedValue(formattedPhoneNumber);
    };
    const handleButtonClick = (digit) => {
        if (isConfirmed) {
            toast("You have already entered the number and confirmed it. If you want to enter it again, press the 'Clear' button.");
            setInputValue("");
            setIsConfirmed(false);
            return
        }
        const newValue = inputValue + digit;
        // If the inputValue is empty, add "+7" before the digit
        if (inputValue === "" && ["7", "8", "9"].includes(digit)) {
            setInputValue("+7" + digit);
        } else {
            setInputValue(newValue);
        }

        const formattedPhoneNumber = formatPhoneNumber(newValue);
        setFormattedValue(formattedPhoneNumber);
    };

    //?checked value

    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
        if (showConfirmationWarning) {
            setShowConfirmationWarning(false);
        }
    };

    //!confirm value

    const handleConfirmNumber = () => {
        if (!isCheckboxChecked) {
            setShowConfirmationWarning(true);
            toast("Looks like the checkbox wasn't clicked, and the number may be incorrect 🙄");
        } else {
            const numericValue = inputValue.replace(/\D/g, "");
            if (numericValue.length < 10) {
                return
            } else {
                setIsConfirmed(true);
                setShowConfirmationWarning(false)
                toast("You wrote the number correctly 👌");
            }
        }
    };

    return (
        <div className="flex">
            <div className="text-white text-4xl p-4 cursor-pointer">
                <AiOutlineFullscreenExit onClick={props.closeDrawer}/>
            </div>

            <div className="w-[284px] h-screen flex flex-col items-center py-10 ">
                <div className="inner  text-center ">
                    <div className="w-72 h-16  mx-auto mb-[5px] ">
            <span className="text-xl font-normal">
              Enter your mobile phone number here
            </span>
                    </div>
                    <div className=" w-64 h-12 flex justify-center items-center  mx-auto mb-[5px] ">
                        <form>
                            <input
                                className="inputPart w-full h-full text-black bg-transparent font-bold text-2xl border-none focus:border-none outline-none leading-[36.7px]"
                                id="phoneInput"
                                type="tel"
                                ref={inputRef}
                                value={formattedValue}
                                onChange={handleChange}
                                maxLength={"18"}
                                disabled={isConfirmed}

                            />

                        </form>
                    </div>
                    <div className="w-[100%] h-[50px]  ">
            <span className="text-sm text-center">
              And our manager will promptly contact you for further consultation
            </span>
                    </div>
                    <div className=" num_box w-[284px] h-[278px] my-[10px]   m-auto">
                        <div className="  num_inner my-[15px] ">
                            <div className="grid grid-cols-3 gap-1.5">
                                {activeItem.objects.map((item, index) => (
                                    <div key={item}>

                                        <button
                                            className={`w-[88px] h-[52px] border-2 border-black ${
                                                item === "Clear" ? 'clear-button' : ''
                                            } ${index === 10 ? 'absolute left-[264px]' : ''} ${
                                                activeButtonIndex === index ? 'active-button' : ''
                                            }`}
                                            onClick={() => {
                                                if (index === 9) {
                                                    // Handle the "Стереть" (Clear) button
                                                    setFormattedValue('');
                                                    setInputValue('');
                                                    setIsCheckboxChecked(false);
                                                } else {
                                                    // Handle digit buttons
                                                    handleButtonClick(item);
                                                }
                                                setActiveButtonIndex(index); // Update the active button index
                                            }}
                                        >
                                            {item}
                                        </button>
                                    </div>))}</div>
                            <div className="agree w-full  flex flex-1 items-center py-[20px]">
                                <div className="checkbox_container w-[60px] h-[52px] flex ">
                                    <label htmlFor="cb"></label>
                                    <input type={"checkbox"} className={"h-full w-full border-2 border-black "}
                                           id={"cb"}
                                           onChange={handleCheckboxChange}
                                           checked={isCheckboxChecked}/>
                                </div>
                                <span
                                    className={"text-[14px] text-[#565656] "}>Consent for Personal Data Processing</span>
                            </div>
                            {showConfirmationWarning ?(<div className={`text-red-600 text-sm m-auto w-[100%] my-2`}>The number is incorrect.</div>):null}
                            <div className="w-[246px] h-[28px] border border-gray-700 m-auto ">
                                <button className="text-gray-700 text-sm font-medium leading-4"
                                        onClick={handleConfirmNumber}>Confirm the number
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
;


export default PhoneOrder;
