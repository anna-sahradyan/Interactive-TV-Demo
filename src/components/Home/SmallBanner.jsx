
import {Link} from "react-router-dom";

const SmallBanner = () => {
    return (
        <div>
            <Link to={"/"}> <div className={"flex justify-between w-[314px] h-[110px] pr-[20px]  relative mt-[460px] "}>
                <div className=" w-[194px]h-[76px] text-base leading-[18.75px] font-medium ml-[50px] text-white"><span>SCAN THE QR CODE TO RECEIVE ADDITIONAL INFORMATION</span></div>
                <div className={"w-[110px] h-[110px]"}>
                    <img src="/video.mp4/qr-code.png" alt="qr"/>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default SmallBanner;