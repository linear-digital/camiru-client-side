
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
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import api, { fetcher, imageUrl } from "../../../Components/helper/axios.instance";
import nameDisplay from "../../../util/nameDisplay";
const TABLE_HEAD = ["Members", "Enrolled", "Class", "Schedule", "Action"];


export default function Table() {

    const { currentUser } = useSelector(state => state.user)
    const { data, isLoading } = useQuery({
        queryKey: ['Staffs', currentUser?._id],
        queryFn: async () => {
            const res = await fetcher({
                url: `/staff/center/${currentUser?._id}`,
                method: "get",
            })
            return res
        }
    })
    const [selected, setSelected] = useState([]);

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
                        const isLast = index === data.length - 1;
                        const classes = isLast ? "p-3" : "p-3 border-b border-blue-gray-50  ";

                        return (
                            <tr key={user._id}
                                className={`${selected.includes(user.id) && "shadow-lg border-l-4 border-primary"}`}
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
                                        {moment(user?.enrollmentDate).format('MMMM Do YYYY hh:mm a')}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <div className=" text-red-500 text-xs font-medium leading-normal">{user?.classRoom?.name}</div>
                                </td>
                                <td className={classes}>
                                    <button className="py-2 border-[#187A82] bg-[#5CD9CA40] border text-xs font-medium rounded-lg px-5 text-[#187A82]">
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


export const ActionButton = ({ user }) => {
    const [option, setOption] = useState("Check in");
    return (
        <Dropdown
            className='option-classroom'
            menu={{
                items: [
                    {
                        label: <Link to={'/dashboard/checkin-staff'}
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
                        label: <Link to={`/dashboard/staff/${user?._id}/profile`}
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
                        label: <Link to={'/dashboard/staff/323/profile/timecard'}
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
                        label: <Link to={'/dashboard/staff/323/profile/schedule-absence'}
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
            <Button variant="filled" className="border border-[#FFBB3B33] bg-[#FFBB3B33] text-[#FFBB3B] text-[13px] shadow-none" size="sm">
                <span className="text-[12px] font-medium tracking-tight">
                    Action
                </span>
                <FontAwesomeIcon icon={faChevronDown} className="text-[12px] ml-2" />
            </Button>
        </Dropdown>

    );
}