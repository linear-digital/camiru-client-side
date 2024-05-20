
import { Card, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import moment from 'moment';
import { Checkbox } from "antd";
import { Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CheckIn, ReportIcon } from "../../../util/icons";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../../Components/Loader";
import { Link } from "react-router-dom";
const TABLE_HEAD = ["Members", "Enrolled", "Age", "Schedule", "Action"];


export default function Table() {
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
        <Card className="h-full w-full overflow-auto rounded-none shadow-none">
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
                <tbody className="">
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
                                        28Y 7M
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <button className="btn btn-sm btn-secondary text-[10px] px-5 text-white">
                                        Clock in
                                    </button>
                                </td>
                                <td className={classes}>
                                    <ActionButton />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}

const ActionButton = () => {
    const [option, setOption] = useState("Check in");
    return (
        <Dropdown
            className='option-classroom'
            menu={{
                items: [
                    {
                        label: <button
                            className={`${option === "Check in" ? "text-amber-500" : ""} w-full flex items-center gap-2  text-start`}
                            onClick={() => setOption("Check in")}
                        >
                          <CheckIn />  Check in
                        </button>,
                        key: '1',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: <Link to={'/dashboard/student/323/profile'}
                            className={`${option === "View User" ? "text-amber-500" : ""} w-full flex items-center gap-2  text-start`}
                            onClick={() => setOption("View User")}
                        >
                          <FontAwesomeIcon icon={faUser}/>
                            View User
                        </Link>,
                        key: '2',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: <button
                            className={`${option === "Reports" ? "text-amber-500" : ""} w-full flex items-center gap-2  text-start`}
                            onClick={() => setOption("Reports")}
                        >
                          <ReportIcon />
                          Reports
                        </button>,
                        key: '3',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: <button
                            className={`${option === "Schedule Absence" ? "text-amber-500" : ""} w-full flex items-center gap-2  text-start`}
                            onClick={() => setOption("Schedule Absence")}
                        >
                          <FontAwesomeIcon icon={faCalendarDays}/>
                          Schedule Absence
                        </button>,
                        key: '4',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: <button
                            className={`${option === "Graduate" ? "text-amber-500" : ""} w-full flex items-center gap-2  text-start`}
                            onClick={() => setOption("Graduate")}
                        >
                          <FontAwesomeIcon icon={faGraduationCap}/>
                          Graduate
                        </button>,
                        key: '4',
                    },
                ],
            }}
            trigger={['click']}
        >
            <button className="btn btn-yellow btn-sm">
                <span className="text-[10px] font-medium tracking-tight">
                    Action
                </span>
                <FontAwesomeIcon icon={faChevronDown} className="text-[12px]" />
            </button>
        </Dropdown>

    );
}