import React from 'react';
import {Link} from "react-router-dom";

const Banner = () => {
    return (
        <div className="w-[251px] h-[357px] flex flex-col  text-center bg-[#86D3F4]">
            <div className="p-5" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p className="w-[231px] h-[57px] text-sm uppercase font-bold">
                    <span>Dream big: Buy tickets to the stunning snowy mountains.</span>
                </p>
                <div className="p-2 flex items-center justify-center">
                    <img src="/video.mp4/qr-code.png" alt="qr"  />
                </div>
                <div className={"p-2.5"}>
                <p className="w-[126px] h-[32px] text-center text-sm leading-4  font-semibold " style={{ margin: "auto 0" }}>
                    <span>Scan the QR code or press OK.</span>
                </p>
                </div>
                <div className={"p-2"}><Link to={"/finish"}><button className={"rounded-none bg-black w-[156px] h-[52px] text-[#86D3F4] "}>OK</button></Link></div>
            </div>
        </div>


    );
};

export default Banner;