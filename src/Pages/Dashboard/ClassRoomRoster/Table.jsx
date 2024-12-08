
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
import { imageUrl } from "../../../Components/helper/axios.instance";
import nameDisplay from "../../../util/nameDisplay";
import calculateAge from "../../../util/ageCalculator";
import { useNavigate } from "react-router-dom";
const TABLE_HEAD = ["Members", "Enrolled", "Age", "Schedule", "Action"];


export default function Table({ rows, class_name, data, selectedClass }) {

    const navigate = useNavigate()
    const [selected, setSelected] = useState([]);
    const navigateProfile = (id) => {
        navigate(`/dashboard/student/${id}/profile/enrollment`)
    }
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
        <Card className="h-full w-full overflow-auto rounded-none shadow-none">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        <th
                            className="border-b border-blue-gray-100  p-3"
                        >
                            <Checkbox className=""
                                checked={selected.length === data.length}
                                onChange={(e) => setSelected(e.target.checked ? data?.map((user) => user._id) : [])}
                            />
                        </th>
                        {(rows ? rows : TABLE_HEAD).map((head) => (
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
                        const isLast = index === data?.length - 1;
                        const classes = isLast ? "p-3 cursor-pointer" : "p-3 border-b border-blue-gray-50  cursor-pointer";
                        return (
                            <tr key={user._id}
                                className={`${selected.includes(user._id) && "shadow-lg border-l-4 border-primary"} hover:bg-gray-100`}
                            >
                                <td className={classes}>
                                    <Checkbox checked={selected.includes(user._id)}
                                        onChange={(e) => setSelected(e.target.checked ? [...selected, user._id] : selected.filter((item) => item !== user._id))}
                                    />
                                </td>
                                <td className={classes}
                                    onClick={() => navigateProfile(user?._id)}
                                >
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
                                    {
                                        class_name ?
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-semibold text-xs text-[#FF3636]"
                                            >
                                                {
                                                    class_name
                                                }
                                            </Typography>
                                            :
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-xs"
                                            >

                                                {calculateAge(user?.birthDate)}
                                            </Typography>
                                    }
                                </td>
                                <td className={classes}>
                                    <div className="flex gap-[5px]">
                                        {
                                            days.map((day, index) => <button key={index} className={`text-[11px] ${user?.days?.includes(day) ? "bg-amber-50 text-amber-500" : "bg-gray-100 text-gray-600"} w-[30px] rounded flex justify-center items-center px-3 py-1 `}>
                                                {day}
                                            </button>)
                                        }
                                    </div>
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

const ActionButton = ({ color1, user }) => {
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
            <button className="btn btn-yellow bg-[#FFBB3B] btn-sm">
                <span className="text-[10px] font-medium tracking-tight">
                    Action
                </span>
                <FontAwesomeIcon icon={faChevronDown} className="text-[12px]" />
            </button>
        </Dropdown>

    );
} 