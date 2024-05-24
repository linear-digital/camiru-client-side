import React from "react";
import {
    Dialog,
    DialogBody,
} from "@material-tailwind/react";

export function DialogDefault({ children }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Dialog open={open} handler={handleOpen}>
                <DialogBody>
                   {children}
                </DialogBody>
            </Dialog>
        </>
    );
}