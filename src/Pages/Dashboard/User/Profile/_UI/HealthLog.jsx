
import { Card, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import moment from 'moment';
import { Checkbox } from "antd";
import { Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../../../../Components/Loader";
const TABLE_HEAD = ["Date", "Staying Duration", "Log With Note"];


export default function HealthLog() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setContacts(res.data))
    }, [])
    const [selected, setSelected] = useState([]);
    if (contacts.length === 0) {
        return <Loader />
    }
    return (
        <div className='w-full lg:px-8 px-2 py-5 overflow-auto rounded-xl poppins bg-[#F1F6FA63]'>
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
                    {
                        contacts.map((user, index) => {
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
                                            3  Hour's
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <p className="text-xs">
                                            <span className="font-normal pr-1">
                                                Note:
                                            </span>
                                            <span className="font-light text-[11px]">
                                                Lorem ipsum dolor sit amet.
                                            </span>
                                        </p>
                                    </td>

                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}
