import {useContext, useEffect, useState} from 'react';
import {AiOutlineFullscreenExit} from 'react-icons/ai';
import toast from "react-hot-toast";
import {format} from "../../FormatPhoneNumber.js";
import FinishInfo from "../Home/FinishInfo.jsx";
import {StateContext} from "../../context/StateContext.jsx";



function PhoneOrder() {
    const {
        isCheckboxChecked,
        setIsCheckboxChecked,
        isConfirmed,
        setIsConfirmed,
        inputRef,
        color,
        setColor,
        openFinishInfo,
        setOpenFinishInfo,
        inputValue,
        setInputValue,
        closeDrawer
    } = useContext(StateContext);

    const [activeButtonIndex, setActiveButtonIndex] = useState(null);
    const [isInCorrect, setIsInCorrect] = useState(false);

    //?Change the input value.
    const handleChange = (e) => {
        const formattedNumber = format(e.target.value)
        setInputValue(formattedNumber)
    };

    //?Buttons Part
    const handleButtonClick = (digit) => {
        if (isConfirmed) {
            toast("You have already entered the number and confirmed it. If you want to enter it again, press the 'Clear' button.");
            setInputValue("");
            setIsConfirmed(false);
            setColor(true);
            return;
        }
        const newValue = inputValue + digit;
        if (inputValue === "" && ["7", "8", "9"].includes(digit)) {
            setInputValue("+7" + digit);
        } else {
            setInputValue(newValue);

        }
        const formattedPhoneNumber = format(newValue);
        setInputValue(formattedPhoneNumber);

    };


    //?Put a checkmark
    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
        if (isConfirmed) {
            setIsConfirmed(false);
        }
    };

    //!Number confirmation
    function handleConfirmNumber() {
        const numericValue = inputValue.replace(/\D/g, "");
        if (!isCheckboxChecked && numericValue.length < 11) {
            setColor(true);
            setIsInCorrect(true)
            toast("Looks like the checkbox wasn't clicked, and the number may be incorrect 🙄");
        } else if (numericValue.length < 11) {
            setColor(true);
            setIsInCorrect(true)
            toast("The value must consist of 11 digits ☝️");
        } else if (!isCheckboxChecked) {

            toast("Looks like the checkbox wasn't clicked ☝️");
        } else {
            setIsConfirmed(true);
            toast("You wrote the number correctly 👌");
            setIsCheckboxChecked(false);
            setActiveButtonIndex(null);
            setColor(false);
            setOpenFinishInfo(true);
        }
    }

    //?KeyPress Part
    const handleKeyDown = (e) => {
        if (e.keyCode === 8) {
            const inputElement = e.target;
            const selectionStart = inputElement.selectionStart;
            const selectionEnd = inputElement.selectionEnd;
            if (selectionStart !== selectionEnd) {
                const currentValue = inputElement.value;
                const newValue = currentValue.slice(0, selectionStart) + currentValue.slice(selectionEnd);
                inputElement.value = newValue;
                inputElement.selectionStart = selectionStart;
                inputElement.selectionEnd = selectionStart;
                e.preventDefault();
            } else if (selectionStart > 0) {
                const currentValue = inputElement.value;
                const newValue = currentValue.slice(0, selectionStart - 1) + currentValue.slice(selectionStart);
                inputElement.value = newValue;
                inputElement.selectionStart = selectionStart - 1;
                inputElement.selectionEnd = selectionStart - 1;
                e.preventDefault();
            }
        }

    }


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [inputValue])


    return (
        <div className="flex">
            <div className="text-white text-4xl p-4 cursor-pointer z-20">
                <AiOutlineFullscreenExit onClick={closeDrawer}/>
            </div>
            {openFinishInfo ? (
                <FinishInfo isConfirmed={isConfirmed}/>
            ) : (
                <div className="w-[284px] h-screen flex flex-col items-center py-10 ">
                    <div className="inner  text-center ">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="w-72 h-16 mx-auto mb-[5px] ">
                                <span className="text-xl font-normal">
                                    Enter your mobile phone number here
                                </span>
                            </div>
                            <div className={` w-64 h-12 flex justify-center items-center mx-auto mb-[5px] `}>
                                <input
                                    className={`inputPart w-full h-full ${!color ? 'text-black' : 'text-red-600'} bg-transparent font-bold text-2xl border-none focus:border-none outline-none leading-[36.7px]`}
                                    id="phoneInput"
                                    type="tel"
                                    ref={inputRef}
                                    value={inputValue}
                                    onChange={(e) => handleChange(e)}
                                    maxLength={"18"}
                                    disabled={isConfirmed}
                                    onFocus={() => {
                                        if (inputValue === "+7(926)_ _ _-_ _-_ _") {
                                            setInputValue("");
                                        }
                                    }}
                                />
                            </div>
                            <div className="w-[100%] h-[50px]  ">
                                <span className="text-sm text-center">
                                    And our manager will promptly contact you for further consultation
                                </span>
                            </div>
                            <div className=" num_box w-[284px] h-[278px] my-[10px]   m-auto">
                                <div className="num_inner my-[15px] ">
                                    <div className={`grid grid-cols-3 gap-1.5`}>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "Clear", 0].map((item, index) => (
                                            <div key={item}>
                                                <button
                                                    className={`w-[88px] h-[52px] border-2 border-black  ${
                                                        item === "Clear" ? 'clear-button' : ''
                                                    } ${index === 10 ? ' ml-[95px]' : ''} ${
                                                        activeButtonIndex === index ? 'active-button' : ''
                                                    }`}
                                                    onClick={() => {
                                                        if (index === 9) {
                                                            setInputValue("");
                                                            setIsCheckboxChecked(false);
                                                            setColor(false);
                                                            setIsInCorrect(false)

                                                        } else {
                                                            handleButtonClick(item);

                                                        }
                                                        setActiveButtonIndex(index);
                                                    }}
                                                    onFocus={() => {
                                                        if (inputValue === "+7(926)_ _ _-_ _-_ _") {
                                                            setInputValue("");
                                                        }
                                                    }}
                                                >
                                                    {item}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="agree w-full  flex flex-1 items-center py-[20px]">
                                        <div className="checkbox_container w-[60px] h-[52px] flex ">
                                            <label htmlFor="cb"></label>
                                            <input
                                                type={"checkbox"}
                                                className={"h-full w-full border-2 border-black "}
                                                id={"cb"}
                                                onChange={handleCheckboxChange}
                                                checked={isCheckboxChecked}
                                            />
                                        </div>
                                        <span className={"text-[14px] text-[#565656] "}>Consent for Personal Data Processing</span>
                                    </div>
                                    {isInCorrect && (
                                        <div className={`text-red-600 text-sm m-auto w-[100%] my-2`}>The number is
                                            incorrect.</div>
                                    )}
                                    <div className="w-[246px] h-[28px] border border-gray-700 m-auto ">
                                        <button
                                            className={`text-gray-700 text-sm font-medium leading-4`}
                                            onClick={handleConfirmNumber}>
                                            Confirm the number
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}


export default PhoneOrder;

