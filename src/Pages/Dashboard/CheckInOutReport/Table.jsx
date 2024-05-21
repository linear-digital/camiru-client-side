// import React from 'react';

// const Table = () => {
//     return (
//         <div className='mt-10'>

//         </div>
//     );
// };

// export default Table;

import { PencilIcon } from "@heroicons/react/24/solid";
import {
    ArrowDownTrayIcon,
    EllipsisVerticalIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";
import { Dot } from "../../User/Profile";
import { useState } from "react";
import TableHead from "./TableHead";


const TABLE_ROWS = [
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
        name: "Spotify",
        amount: "$2,500",
        date: "Wed 3:00pm",
        status: "paid",
        account: "visa",
        accountNumber: "1234",
        expiry: "06/2026",
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
        name: "Amazon",
        amount: "$5,000",
        date: "Wed 1:00pm",
        status: "paid",
        account: "master-card",
        accountNumber: "1234",
        expiry: "06/2026",
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
        name: "Pinterest",
        amount: "$3,400",
        date: "Mon 7:40pm",
        status: "pending",
        account: "master-card",
        accountNumber: "1234",
        expiry: "06/2026",
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
        name: "Google",
        amount: "$1,000",
        date: "Wed 5:00pm",
        status: "paid",
        account: "visa",
        accountNumber: "1234",
        expiry: "06/2026",
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
        name: "netflix",
        amount: "$14,000",
        date: "Wed 3:30am",
        status: "cancelled",
        account: "visa",
        accountNumber: "1234",
        expiry: "06/2026",
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
        name: "Pinterest",
        amount: "$3,400",
        date: "Mon 7:40pm",
        status: "pending",
        account: "master-card",
        accountNumber: "1234",
        expiry: "06/2026",
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
        name: "Google",
        amount: "$1,000",
        date: "Wed 5:00pm",
        status: "paid",
        account: "visa",
        accountNumber: "1234",
        expiry: "06/2026",
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
        name: "netflix",
        amount: "$14,000",
        date: "Wed 3:30am",
        status: "cancelled",
        account: "visa",
        accountNumber: "1234",
        expiry: "06/2026",
    },
];
const TABLE_HEAD = ["Members & Schedule", "Job", "Employed", ""];
export default function Table() {
    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    const [selectedDays, setSelectedDays] = useState(["M", "Tu", "Wh"]);
    return (
        <Card className="h-full w-full shadow-none bg-[#F1F6FA63] mt-10 ">

            <CardBody className="overflow-auto px-0 py-0">
                <table className="w-full min-w-max table-auto text-left">
                    <TableHead />
                    <tbody>
                        {TABLE_ROWS.map(
                            (
                                {
                                    img,
                                    name,
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-3"
                                    : "p-3";

                                return (
                                    <tr key={name}
                                        className="hover:shadow-md hover:border-[#2F80ED] border-l-[5px] border-transparent cursor-pointer"
                                    >
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    src={img}
                                                    alt={name}
                                                    className="w-14 h-14 rounded-xl border object-cover p-1"
                                                />
                                                <div>
                                                    <Typography
                                                        color="blue-gray"
                                                        className="font-semibold text-sm text-[#464255]"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <div className="flex gap-[5px] mt-2">
                                                        {
                                                            days.map((day, index) => <button key={index} className={`text-[10px] ${selectedDays.includes(day) ? "bg-amber-50 text-amber-500" : "bg-gray-100 text-gray-600"} w-[25px] rounded flex justify-center items-center px-3 py-1 `}>
                                                                {day}
                                                            </button>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={`${classes} bg-[#5CD9CA1A] text-center`}>
                                            <div className="text-cyan-700 text-xs font-semibold">06h 42 min</div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex gap-5 justify-center">
                                                <div className=" text-cyan-700 text-xs font-normal">13:45</div>
                                                <div className=" text-cyan-700 text-xs font-normal">13:45</div>
                                            </div>
                                        </td>
                                        <td className={`${classes} bg-[#5CD9CA1A] text-center`}>
                                            <div className="text-cyan-700 text-xs font-semibold">06h 42 min</div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex gap-5 justify-center">
                                                <div className=" text-cyan-700 text-xs font-normal">13:45</div>
                                                <div className=" text-cyan-700 text-xs font-normal">13:45</div>
                                            </div>
                                        </td>
                                        <td className={`${classes} bg-[#5CD9CA1A] text-center`}>
                                            <div className="text-cyan-700 text-xs font-semibold">06h 42 min</div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex gap-5 justify-center">
                                                <div className=" text-cyan-700 text-xs font-normal">13:45</div>
                                                <div className=" text-cyan-700 text-xs font-normal">13:45</div>
                                            </div>
                                        </td>
                                        <td className={`${classes} bg-[#5CD9CA1A] text-center`}>
                                            <div className="text-cyan-700 text-xs font-semibold">06h 42 min</div>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>

        </Card>
    );
}