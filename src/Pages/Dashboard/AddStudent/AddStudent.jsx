import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import Generalinfo from "./Generalinfo";
import EnrollmentForm from './EnrollMentForm';
import Contact from "./Contact";
import Address from "./Address";
import Records from "./Records";
import AdditionalNotes from './AdditionalNotes';
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
    
    const [open, setOpen] = React.useState(1);

    return (
        <DB_Page_Layout>
            <div>
                <h1 className=" text-[#187A82] lg:text-2xl text-xl font-bold ">Contacts</h1>
                <p className=" text-neutral-400 lg:mt-2 mt-1 font-normal text-sm">To add a profile, please fill out the following information</p>
            </div>
            <div className="mt-10 grid gap-5">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}
                    className={` border w-full rounded-md lg:px-7 px-3 ${open === 1 && "py-5"} border-[#187A82] bg-[#F8FCFF]`}
                >
                    <AccordionHeader className="border-none items-center">
                        <div className="flex items-center gap-3">
                            <div className="lg:w-10 w-7 lg:h-10 h-7 bg-[#D9D9D9] rounded-full text-xs lg:text-base flex justify-center items-center" >
                                1
                            </div>
                            <div className="text-[#646363] text-sm lg:text-2xl font-bold ">Genaral Information</div>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <Generalinfo open={open} setOpen={setOpen} />
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}
                    className={`border w-full rounded-md lg:px-7 px-3 ${open === 2 && "py-5"} border-[#187A82] bg-[#F8FCFF]`}
                >
                    <AccordionHeader className="border-none items-center">
                        <div className="flex items-center gap-3">
                            <div className="lg:w-10 w-7 lg:h-10 h-7 bg-[#D9D9D9] rounded-full text-xs lg:text-base flex justify-center items-center" >
                                2
                            </div>
                            <div className="text-[#646363] text-sm lg:text-2xl font-bold ">
                                Enrollment
                            </div>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <EnrollmentForm open={open} setOpen={setOpen} />
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}
                    className={`border w-full rounded-md lg:px-7 px-3 ${open === 3 && "py-5"} border-[#187A82] bg-[#F8FCFF]`}
                >
                    <AccordionHeader className="border-none items-center">
                        <div className="flex items-center gap-3">
                            <div className="lg:w-10 w-7 lg:h-10 h-7 bg-[#D9D9D9] rounded-full text-xs lg:text-base flex justify-center items-center" >
                                3
                            </div>
                            <div className="text-[#646363] text-sm lg:text-2xl font-bold ">
                                Contact
                            </div>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <Contact open={open} setOpen={setOpen} />
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}
                    className={`border w-full rounded-md lg:px-7 px-3 ${open === 4 && "py-5"} border-[#187A82] bg-[#F8FCFF]`}
                >
                    <AccordionHeader className="border-none items-center">
                        <div className="flex items-center gap-3">
                            <div className="lg:w-10 w-7 lg:h-10 h-7 bg-[#D9D9D9] rounded-full text-xs lg:text-base flex justify-center items-center" >
                                4
                            </div>
                            <div className="text-[#646363] text-sm lg:text-2xl font-bold ">
                                Address
                            </div>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <Address open={open} setOpen={setOpen} />
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}
                    className={`border w-full rounded-md lg:px-7 px-3 ${open === 5 && "py-5"} border-[#187A82] bg-[#F8FCFF]`}
                >
                    <AccordionHeader className="border-none items-center">
                        <div className="flex items-center gap-3">
                            <div className="lg:w-10 w-7 lg:h-10 h-7 bg-[#D9D9D9] rounded-full text-xs lg:text-base flex justify-center items-center" >
                                5
                            </div>
                            <div className="text-[#646363] text-sm lg:text-2xl font-bold ">
                                Records
                            </div>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <Records open={open} setOpen={setOpen} />
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}
                    className={`border w-full rounded-md lg:px-7 px-3 ${open === 6 && "py-5"} border-[#187A82] bg-[#F8FCFF]`}
                >
                    <AccordionHeader className="border-none items-center">
                        <div className="flex items-center gap-3">
                            <div className="lg:w-10 w-7 lg:h-10 h-7 bg-[#D9D9D9] rounded-full text-xs lg:text-base flex justify-center items-center" >
                                6
                            </div>
                            <div className="text-[#646363] text-sm lg:text-2xl font-bold ">
                                Additional Notes
                            </div>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <AdditionalNotes open={open} setOpen={setOpen} />
                    </AccordionBody>
                </Accordion>
            </div>
        </DB_Page_Layout>
    );
};

export default AddStudent;


const AccordionCard = ({ open, number, handleOpen, children }) => {
    return <Accordion open={open === number} icon={<Icon id={number} open={open} />}
        className={`border rounded-md lg:px-7 px-3 ${open === number && "py-5"} border-[#187A82] bg-[#F8FCFF]`}
    >
        <AccordionHeader onClick={() => handleOpen(number)} className="border-none items-center">
            <div className="flex items-center gap-3">
                <div className="lg:w-10 w-7 lg:h-10 h-7 bg-[#D9D9D9] rounded-full text-xs lg:text-base flex justify-center items-center" >
                    2
                </div>
                <div className="text-[#646363] text-sm lg:text-2xl font-bold ">
                    Enrollment
                </div>
            </div>
        </AccordionHeader>
        <AccordionBody>
            {children}
        </AccordionBody>
    </Accordion>
}

