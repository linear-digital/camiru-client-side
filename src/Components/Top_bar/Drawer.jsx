import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import Sidebar from "../../Pages/User/Sidebar";

export function SideDrawer({ open, setOpen }) {

    const closeDrawer = () => setOpen(false);

    return (
        <React.Fragment>
            <Drawer open={open} onClose={closeDrawer} >
                <Sidebar setOpen={setOpen} />
            </Drawer>
        </React.Fragment>
    );
}