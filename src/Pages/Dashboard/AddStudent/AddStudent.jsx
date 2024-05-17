import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import Generalinfo from "./Generalinfo";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}


const AddStudent = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <DB_Page_Layout>
            <div>
                <h1 className=" text-[#187A82] lg:text-2xl text-xl font-bold ">Contacts</h1>
                <p className=" text-neutral-400 lg:mt-2 mt-1 font-normal text-sm">To add a profile, please fill out the following information</p>
            </div>
            <div className="mt-10">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}
                className={`border rounded-md lg:px-7 px-3 ${open === 1 && "border-[#187A82] py-5 bg-[#F8FCFF]"}`}
                >
                    <AccordionHeader onClick={() => handleOpen(1)} className="border-none items-center">
                        <div className="flex items-center gap-3">
                            <div className="lg:w-10 w-7 lg:h-10 h-7 bg-[#D9D9D9] rounded-full text-xs lg:text-base flex justify-center items-center" >
                                1
                            </div>
                            <div className="text-[#646363] text-sm lg:text-2xl font-bold ">Genaral Information</div>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                       <Generalinfo />
                    </AccordionBody>
                </Accordion>
            </div>
        </DB_Page_Layout>
    );
};

export default AddStudent;


