
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
import nameDisplay from "../../../util/nameDisplay";
import { imageUrl } from "../../../Components/helper/axios.instance";
import calculateAge from "../../../util/ageCalculator";
const TABLE_HEAD = ["Members", "Enrolled", "Age", "Schedule", "Action"];


export default function Table({ data }) {
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
                    {data?.map((user, index) => {
                        const isLast = index === contacts.length - 1;
                        const classes = isLast ? "p-3" : "p-3 border-b border-blue-gray-50  ";

                        return (
                            <tr key={user._id}
                                className={`${selected.includes(user.id) && "shadow-lg border-l-4 border-primary"}`}
                            >
                                <td className={classes}>
                                    <Checkbox checked={selected.includes(user.id)}
                                        onChange={(e) => setSelected(e.target.checked ? [...selected, user.id] : selected.filter((item) => item !== user.id))}
                                    />
                                </td>
                                <td className={classes}>
                                    <div className="flex items-center gap-2">
                                        <img src={imageUrl(user?.profilePic)} alt=""
                                            className="w-[45.16px] h-[45.16px] rounded-full object-cover"
                                        />
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-xs"
                                        >
                                            {
                                                nameDisplay(user)
                                            }
                                        </Typography>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-xs"
                                    >
                                        {moment(user?.
                                            enrollmentDate).format('MMMM Do YYYY hh:mm a')}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-xs"
                                    >
                                        {calculateAge(user?.birthDate)}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <button className="btn btn-sm btn-secondary text-[10px] px-5 text-white">
                                        Clock in
                                    </button>
                                </td>
                                <td className={classes}>
                                    <ActionButton user={user} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}

const ActionButton = ({ user }) => {
    const [option, setOption] = useState("Check in");
    return (
        <Dropdown
            className='option-classroom'
            menu={{
                items: [
                    {
                        label: <Link to={'/dashboard/checkin'}
                            className={`${option === "Check in" ? "text-amber-500" : ""} w-full flex items-center gap-2  text-start`}
                        >
                            <CheckIn />  Check in
                        </Link>,
                        key: '1',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: <Link to={`/dashboard/student/${user?._id}/profile`}
                            className={`${option === "View User" ? "text-amber-500" : ""} w-full flex items-center gap-2  text-start`}
                        >
                            <FontAwesomeIcon icon={faUser} />
                            View User
                        </Link>,
                        key: '2',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: <Link to={`/dashboard/student/${user?._id}/profile/report`}
                            className={`${option === "Reports" ? "text-amber-500" : ""} w-full flex items-center gap-2  text-start`}
                        >
                            <ReportIcon />
                            Reports
                        </Link>,
                        key: '3',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: <Link to={`/dashboard/student/${user?._id}/profile/schedule-absence`}
                            className={`${option === "Schedule Absence" ? "text-amber-500" : ""} w-full flex items-center gap-2  text-start`}

                        >
                            <FontAwesomeIcon icon={faCalendarDays} />
                            Schedule Absence
                        </Link>,
                        key: '4',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: <Link to={`/dashboard/student/${user?._id}/profile/graduate`}
                        >
                            <h5 className={` w-full flex items-center gap-2  text-start text-green-700`}>
                                <FontAwesomeIcon icon={faGraduationCap} />
                                Graduate
                            </h5>
                        </Link>,
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