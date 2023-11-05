import {useContext} from 'react';
import {VscMenu} from "react-icons/vsc";
import {Drawer} from "@mui/material";
import {Link} from "react-router-dom";
import PhoneOrder from "./PhoneOrder.jsx";
import {StateContext} from "../../context/StateContext.jsx";


const Header = ({handleMenuClick}) => {
    const {
        isDrawerOpen,
        setIsDrawerOpen,

    } = useContext(StateContext);

    return (
        <>
            <nav className={"mt-3 flex justify-between "}>
                <div onClick={handleMenuClick}>
                    <VscMenu style={{color: "white", width: "30px", height: "30px",zIndex:"2"}}/>
                </div>
                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    classes={{paper: isDrawerOpen ? 'drawerOpen' : 'drawerClose'}}
                    PaperProps={{
                        sx: {
                            "&.MuiDrawer-paper": {
                                backgroundColor: "#86D3F4",
                                width: "380px",
                                minHeight: "720px",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                boxShadow: '0 15px 15px rgba(15, 0, 0, 0.5)',
                            },
                        },
                    }}
                >
                    <PhoneOrder />
                </Drawer>
                <div style={{filter: 'drop-shadow(3px 3px 1px #5f17e5)'}} className="w-42 h-10 text-center">
                    <Link to="/">
                        <span className="text-white text-xl px-4 py-0">SnowPeak Adventures</span>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Header;