
import { Card, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import moment from 'moment';
import { Checkbox } from "antd";
const TABLE_HEAD = ["Members", "Registration Date", "Class", "Send Message", "Action"];

const TABLE_ROWS = [
    {
        id: 1,
        name: "John Michael",
        class: "Infants"
    },
    {
        id: 2,
        name: "Bella",
        class: "Infants"
    },
    {
        id: 3,
        name: "Dejon",
        class: "Infants"
    },
    {
        id: 4,
        name: "Wiliam",
        class: "Infants"
    },

    {
        id: 5,
        name: "Wiliam",
        class: "Infants"
    },

    {
        id: 6,
        name: "Lurliam",
        class: "Infants"
    },
];

export default function Table() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setContacts(res.data))
    }, [])
    const [selected, setSelected] = useState([]);

    return (
        <Card className="h-full w-full  rounded-none shadow-none">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        <th
                            className="border-b border-blue-gray-100  p-3"
                        >
                            <Checkbox className="" 
                            checked={selected.length === contacts.length}
                            onChange={(e) => setSelected(e.target.checked ? contacts.map((user) => user.id) : [])}
                            />
                        </th>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100  p-3"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70 text-start text-sm"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((user, index) => {
                        const isLast = index === contacts.length - 1;
                        const classes = isLast ? "p-3" : "p-3 border-b border-blue-gray-50  ";

                        return (
                            <tr key={user.id} 
                            className={`${selected.includes(user.id) && "shadow-lg border-l-4 border-primary"}`}
                            >
                                <td className={classes}>
                                    <Checkbox checked={selected.includes(user.id)} 
                                    onChange={(e) => setSelected(e.target.checked ? [...selected, user.id] : selected.filter((item) => item !== user.id))}
                                    />
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-xs"
                                    >
                                        {user?.name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-xs"
                                    >
                                        {moment().format('MMMM Do YYYY hh:mm a')}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-xs"
                                    >
                                        <div className="text-red-600 text-xs font-bold  leading-normal">Infants</div>
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <button className="w-[100.53px] text-xs h-[25px]  bg-[#def4eb] text-[#3DD598] rounded-md" >
                                        Send Message
                                    </button>
                                </td>
                                <td className={classes}>
                                    <button className=" text-xs  btn-link  rounded-md  font-normal text-primary" >
                                        Send Message
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}