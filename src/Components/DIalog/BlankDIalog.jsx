import React from "react";
import {
    Dialog,
    DialogBody,
} from "@material-tailwind/react";

export function BlankDIalog({ children, open, setOpen , size}) {

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Dialog open={open} handler={handleOpen} size={size || "md"}>
                <DialogBody>
                    {children}
                </DialogBody>
            </Dialog>
        </>
    );
}