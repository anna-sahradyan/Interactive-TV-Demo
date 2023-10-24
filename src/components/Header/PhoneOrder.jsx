import React, {useState} from 'react';
import {AiOutlineFullscreenExit} from 'react-icons/ai';
import {TextField} from "@mui/material";


function PhoneOrder(props) {
    const [formattedValue, setFormattedValue] = useState("+7(926)_ _ _-_ _-_ _");
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
                                value={formattedValue}
                                onChange={handleChange}
                                maxLength={"18"}
                                autocomplete="off"
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
                            {/*{!isValid  && (toast.error("Enter a valid 10-digit phone number"))}*/}
                            <div className="grid grid-cols-3 gap-1.5">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9,"Стереть", 0].map((item, index) => (
                                    <div key={item}>
                                        <button className={`w-[88px] h-[52px] border-2 border-black ${index === 9 ? ' w-[185px] ' : ''}${index===10 ?'absolute left-[264px]':""}`}>{item}</button>
                                                                                                 </div>))}</div>
                            <div className="agree w-full  flex flex-1 items-center py-[20px]">
                                <div className="checkbox_container w-[60px] h-[52px] flex ">
                                    <label htmlFor="cb"></label>
                                <input type={"checkbox"}  className={"h-full w-full border-2 border-black "} id={"cb"}></input>
                                </div>
                                <span className={"text-[14px] text-[#565656] "}>Consent for Personal Data Processing</span>
                            </div><div className="w-[246px] h-[28px] border border-gray-700 m-auto ">
                            <span className="text-gray-700 text-sm font-medium leading-4 ">Confirm the number</span>
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
