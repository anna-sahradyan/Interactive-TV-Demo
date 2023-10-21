import React  from 'react';
import { VscMenu } from "react-icons/vsc";
import { Drawer } from "@mui/material";

const Header = (props) => {


    // const handleMenuClick = () => {
    //     props.setIsDrawerOpen(!props.isDrawerOpen);
    // };

    const slideInKeyframes = `
        @keyframes slideIn {
            from {
                transform: translateX(-100%);
            }
            to {
                transform: translateX(0);
            }
        }
    `;

    const slideOutKeyframes = `
        @keyframes slideOut {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-100%);
            }
        `;

    const drawerStyle = {
        animation: `slideIn ${props.isDrawerOpen ? '0.7s' : 'slideOut 0.5s'} ease-in-out`,
    };

    return (
        <>
            <style>
                {slideInKeyframes}
                {slideOutKeyframes}
            </style>
            <nav className={"mt-3 flex justify-between "}>
                <div onClick={props.handleMenuClick}>
                    <VscMenu style={{ color: "white", width: "30px", height: "30px" }} />
                </div>
                <Drawer
                    anchor="left"
                    open={props.isDrawerOpen}
                    onClose={() => props.setIsDrawerOpen(false)}
                    PaperProps={{
                        sx: {
                            "&.MuiDrawer-paper": {
                                ...drawerStyle,
                                backgroundColor:"#1E4E73",
                                width: "600px",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                boxShadow: '0 15px 15px rgba(15, 0, 0, 0.5)',
                            },
                        },
                    }}
                >
                    {/* Drawer content goes here */}
                </Drawer>
                <div  style={{ filter:'drop-shadow(3px 3px 1px #5f17e5)' }} className={" w-42 h-10 text-center"}><span className={"text-white text-xl"}>SnowPeak Adventures</span></div>
            </nav>
        </>
    );
};

export default Header;
