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

export default function Table() {
    return (
        <Card className="h-full w-full shadow-none">

            <CardBody className="overflow-auto px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <tbody>
                        {TABLE_ROWS.map(
                            (
                                {
                                    img,
                                    name,
                                    date,
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-3"
                                    : "p-3";

                                return (
                                    <tr key={name}
                                        className="hover:shadow-md hover:border-amber-400 border-l-[3px] border-transparent cursor-pointer"
                                    >
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    variant="rounded"
                                                    src={img}
                                                    alt={name}
                                                    className="w-14 h-14 rounded-xl border object-cover p-1"
                                                />
                                                <div>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-semibold text-sm"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <div className="text-gray-600 text-xs font-normal mt-1">
                                                        12 June, 2024
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <button className="text-blue-600 text-xs font-normal underline">
                                                View upcoming events
                                            </button>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-2">
                                                <Dot className={`w-2 h-2 bg-amber-300`} />
                                                <div className="text-slate-400 text-xs font-bold ">Infants</div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <h4 className="text-slate-500 text-xs  font-semibold">60 Response</h4>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Options">
                                                <IconButton variant="text">
                                                    <EllipsisVerticalIcon className="h-5 w-5" />
                                                </IconButton>
                                            </Tooltip>
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