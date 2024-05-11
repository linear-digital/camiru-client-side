
import { Card, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import moment from 'moment';
import { Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
const TABLE_HEAD = ["Date", "In Time - Out Time", "Total Time", "Impotent Note"];


export default function Table() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setContacts(res.data))
    }, [])
    const [selected, setSelected] = useState([]);

    return (
        <Card className="h-full w-full  rounded-none shadow-none mt-16">
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
                        <th
                            className="border-b border-blue-gray-100  p-3"
                        >
                            <div>
                                <span className="text-neutral-400 text-base font-medium ">Total Time For Nov:</span>

                                <span className="text-cyan-700 text-base font-bold ">72h 46m</span></div>
                        </th>
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
                                        {moment().format('MMMM Do YYYY hh:mm a')}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-xs"
                                    >
                                        15:24 PM -  18:24 PM
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-xs"
                                    >
                                        3 hours
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <div className="w-[168px] h-6"><span className="text-gray-800 text-xs font-medium  capitalize leading-normal">Note: </span><span className="text-gray-500 text-xs font-normal  capitalize leading-normal">Note goes here</span></div>
                                </td>
                                <td className={`${classes} flex justify-center`}>
                                    <button className=" h-[40px] pl-[19px] pr-[18px] py-[12.59px] bg-white bg-[#ffbb3b33] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-lg text-amber-600 font-semibold">
                                        <FontAwesomeIcon icon={faPrint} />
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