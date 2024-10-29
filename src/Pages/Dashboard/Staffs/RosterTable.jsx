
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
import { Button } from "@material-tailwind/react";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import api, { fetcher, imageUrl } from "../../../Components/helper/axios.instance";
import nameDisplay from "../../../util/nameDisplay";
const TABLE_HEAD = ["Members", "Enrolled", "Age", "Schedule", "Action"];


export default function Table({ rows, class_name }) {
    const { currentUser } = useSelector(state => state.user)

    const { data, isLoading } = useQuery({
        queryKey: ['all Staffs r', currentUser?._id],
        queryFn: async () => {
            const res = await fetcher({
                url: `/staff/center/${currentUser?._id}`,
                method: "get",
            })
            return res
        }
    })
    const [selected, setSelected] = useState([]);
    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    const [selectedDays, setSelectedDays] = useState(["M", "Tu", "Wh"]);
    console.log(data);
    if (isLoading) {
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
                                checked={selected.length === data.length}
                                onChange={(e) => setSelected(e.target.checked ? data.map((user) => user._id) : [])}
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
                    {data.map((user, index) => {
                        const isLast = index === data.length - 1;
                        const classes = isLast ? "p-3" : "p-3 border-b border-blue-gray-50  ";

                        return (
                            <tr key={user._id}
                                className={`${selected.includes(user._id) && "shadow-lg border-l-4 border-primary"}`}
                            >
                                <td className={classes}>
                                    <Checkbox checked={selected.includes(user._id)}
                                        onChange={(e) => setSelected(e.target.checked ? [...selected, user._id] : selected.filter((item) => item !== user._id))}
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
                                            {nameDisplay(user)}
                                        </Typography>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-xs"
                                    >
                                        {moment(user?.createdAt).format('MMMM Do YYYY hh:mm a')}
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
                                                {user?.enrollment?.map((item, index) => <span key={index}>{item?.classroom?.name} {user?.enrollment?.length - 1 !== index ? ", " : ""}</span>)
                                                }
                                            </Typography>
                                            :
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-xs"
                                            >

                                                28Y 7M
                                            </Typography>
                                    }
                                </td>
                                <td className={classes}>
                                    <div className="flex gap-[5px]">
                                        {
                                            days.map((day, index) => <button key={index} className={`text-[11px] ${selectedDays.includes(day) ? "bg-amber-50 text-amber-500" : "bg-gray-100 text-gray-600"} w-[30px] rounded flex justify-center items-center px-3 py-1 `}>
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

export const ActionButton = ({ user }) => {
    const [option, setOption] = useState("Check in");
    return (
        <Dropdown
            className='option-classroom'
            menu={{
                items: [
                    {
                        label: <Link to={`/dashboard/staff/${user?._id}/profile?nav=clock-in-out`}
                            className={`${option === "Check in" ? "text-[#187A82]" : ""} w-full flex items-center gap-2  text-start`}
                            onClick={() => setOption("Check in")}
                        >
                            <CheckIn />  Check in
                        </Link>,
                        key: '1',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: <Link to={`/dashboard/staff/${user?._id}/profile?nav=enrollment`}
                            className={`${option === "View User" ? "text-[#187A82]" : ""} w-full flex items-center gap-2  text-start`}
                            onClick={() => setOption("View User")}
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
                        label: <Link to={`/dashboard/staff/${user?._id}/profile?nav=time-card`}
                            className={`${option === "Reports" ? "text-[#187A82]" : ""} w-full flex items-center gap-2  text-start`}
                            onClick={() => setOption("Reports")}
                        >
                            <ReportIcon />
                            Time Cards
                        </Link>,
                        key: '3',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: <Link to={`/dashboard/staff/${user?._id}/profile?nav=schedule-absence`}
                            className={`${option === "Schedule Absence" ? "text-[#187A82]" : ""} w-full flex items-center gap-2  text-start`}
                            onClick={() => setOption("Schedule Absence")}
                        >
                            <FontAwesomeIcon icon={faCalendarDays} />
                            Schedule Time Off
                        </Link>,
                        key: '4',
                    },
                    {
                        type: 'divider',
                    },
                    {
                        label: <Link to={'/dashboard/staff/323/profile/deactive'}
                            className={`${option === "Graduate" ? "text-[#187A82]" : ""} w-full flex items-center gap-2  text-start`}
                        >
                            <h5 className="text-red-600 flex items-center gap-1">
                                <FontAwesomeIcon icon={faGraduationCap} className="" />
                                Deactive
                            </h5>
                        </Link>,
                        key: '4',
                    },
                ],
            }}
            trigger={['click']}
        >
            <Button variant="filled" className="border border-[#187A82] bg-[#5CD9CA40] text-[#187A82] text-[13px] shadow-none" size="sm">
                <span className="text-[12px] font-medium tracking-tight">
                    Action
                </span>
                <FontAwesomeIcon icon={faChevronDown} className="text-[12px] ml-2" />
            </Button>
        </Dropdown>

    );
}