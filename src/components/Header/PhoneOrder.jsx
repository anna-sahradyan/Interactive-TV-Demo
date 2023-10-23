 import React, {useState} from 'react';
 import {AiOutlineFullscreenExit} from 'react-icons/ai';



function PhoneOrder(props) {
    const [formattedValue, setFormattedValue] = useState("");
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

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const formattedPhoneNumber = formatPhoneNumber(inputValue);
        setFormattedValue(formattedPhoneNumber);
    };


            return (
            <div className="flex">
                <div className="text-white text-4xl p-4 cursor-pointer">
                    <AiOutlineFullscreenExit onClick={props.closeDrawer}/>
                </div>

                <div className="w-[284px] h-screen flex flex-col items-center py-16 ">
                    <div className="inner border-2 text-center ">
                        <div className="w-72 h-16 border-2 mx-auto mb-[25px]">
            <span className="text-xl font-normal">
              Enter your mobile phone number here
            </span>
                        </div>
                        <div className="w-64 h-12 flex justify-center items-center  mx-auto mb-[25px] border-2">
                            <form>
                                <input
                                    className="inputPart w-full h-full text-black bg-transparent font-bold text-2xl border-none focus:border-none outline-none leading-[36.7px]"
                                    id="phoneInput"
                                    type="tel"
                                    value={formattedValue}
                                    onChange={handleChange}
                                    maxLength={"18"}
                                />
                            </form>
                        </div>
                        <div className="w-[100%] h-[50px] border-2">
            <span className="text-sm text-center">
              And our manager will promptly contact you for further consultation
            </span>
                        </div>
                        <div className="num_box w-[284px] h-[278px] my-[20px] border border-red-500  m-auto">
                            <div className="num_inner my-[25px] border-2 border border-blue-500">
                                {/*{!isValid  && (toast.error("Enter a valid 10-digit phone number"))}*/}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
;



export default PhoneOrder;
