import React from 'react';
import {VscMenu} from "react-icons/vsc";
import {Drawer} from "@mui/material";
import {Link} from "react-router-dom";
import PhoneOrder from "./PhoneOrder.jsx";


const Header = (props) => {
    const closeDrawer = () => {
         props.setIsDrawerOpen(false);
        props.videoRef.current.play();

    }
    return (
        <>
            <nav className={"mt-3 flex justify-between "}>
                <div onClick={props.handleMenuClick}>
                    <VscMenu style={{color: "white", width: "30px", height: "30px"}}/>
                </div>
                <Drawer
                    anchor="left"
                    open={props.isDrawerOpen}
                    onClose={() => props.setIsDrawerOpen(false)}
                    classes={{ paper: props.isDrawerOpen ? 'drawerOpen' : 'drawerClose' }}
                    PaperProps={{
                        sx: {
                            "&.MuiDrawer-paper": {
                                backgroundColor: "#86D3F4",
                                width: "380px",
                                minHeight:"720px",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                boxShadow: '0 15px 15px rgba(15, 0, 0, 0.5)',
                            },
                        },
                    }}
                >
                    {/* Drawer content goes here */}
                    <PhoneOrder closeDrawer={closeDrawer} />
                </Drawer>
                <div style={{ filter: 'drop-shadow(3px 3px 1px #5f17e5)' }} className="w-42 h-10 text-center">
                    <Link to="/">
                        <span className="text-white text-xl px-4 py-0">SnowPeak Adventures</span>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Header;
