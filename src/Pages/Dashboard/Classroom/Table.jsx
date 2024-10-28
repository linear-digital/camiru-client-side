
import { Card, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import moment from 'moment';
import { Button, Checkbox } from "antd";
import { Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CheckIn, ReportIcon } from "../../../util/icons";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import nameDisplay from "../../../util/nameDisplay";
import { fetcher, imageUrl } from "../../../Components/helper/axios.instance";
import calculateAge from "../../../util/ageCalculator";
import { Table as AntTable } from 'antd'
import toast from "react-hot-toast";
import { Spin } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Input } from "antd";
import { Popover } from "antd";

export default function Table({ data, refetch }) {
    const [loading, setLoading] = useState(false)

    const clockIn = async (id) => {
        try {
            setLoading(true)
            const res = await fetcher({
                url: `/student/student/checkin/${id}`,
                method: 'PUT',
                data: {
                    time: new Date()
                }
            })
            refetch()
            setLoading(false)

        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong');
            setLoading(false)
        }
    }
    const clockOut = async (id) => {
        try {
            setLoading(true)
            const res = await fetcher({
                url: `/student/student/checkout/${id}`,
                method: 'PUT',
                data: {
                    time: new Date()
                }
            })
            refetch()
            setLoading(false)

        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong');
            setLoading(false)
        }
    }

    const isDisabled = (record) => {
        const today = moment().format('ddd')
        return record?.days?.includes(today) ? false : true

    }
    return (
        <Card className="h-full w-full overflow-auto rounded-none shadow-none">
            <AntTable
                pagination={false}
                columns={[
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        key: 'name',
                        render: (_, record) => <Link to={`/dashboard/student/${record?._id}/profile/enrollment`} className={`flex items-center gap-2 ${isDisabled(record) && 'opacity-50'}`}>
                            <img src={imageUrl(record?.profilePic)} alt=""
                                className="w-[45.16px] h-[45.16px] rounded-full object-cover"
                            />
                            <span className="text-sm font-normal">{nameDisplay(record)}</span>
                        </Link>
                    },
                    {
                        title: 'Enrolled',
                        dataIndex: 'enrolled',
                        key: 'enrolled',
                        disabled: true,
                        render: (_, record) => <span className={`text-sm font-normal ${isDisabled(record) && 'opacity-50'}`}>{moment(record?.createdAt).format('MMMM Do YYYY')}</span>
                    },
                    {
                        title: 'Status',
                        dataIndex: 'status',
                        key: 'status',
                        render: (_, record) => <span className={`text-sm font-normal ${isDisabled(record) && 'opacity-50'}`}>{record?.report?.status}</span>
                    },
                    {
                        title: 'Age',
                        dataIndex: 'age',
                        key: 'age',
                        render: (_, record) => <Typography
                            variant="small"
                            color="blue-gray"
                            className={`font-normal text-xs ${isDisabled(record) && 'opacity-50'}`}
                        >
                            {calculateAge(record?.birthDate)}
                        </Typography>
                    },
                    {
                        title: <span>
                            Schedule <Spin size="small" spinning={loading} />
                        </span>,
                        dataIndex: 'schedule',
                        key: 'schedule',
                        render: (_, record) => {
                            if (isDisabled(record)) {
                                return <button
                                    disabled
                                    className="btn btn-sm bg-secondary/40 text-[10px] px-5 text-white ">
                                    Check in
                                </button>
                            }
                            else if (record?.report?.status === "Not Assigned") {
                                return <button
                                    disabled={loading}
                                    onClick={() => clockIn(record?._id)}
                                    className="btn btn-sm btn-secondary text-[10px] px-5 text-white ">
                                    Check in
                                </button>
                            }
                            else if (record?.report?.status === "Present") {
                                return <div className="flex flex-col gap-3 items-start">
                                    <TimeCounter time={record?.report?.start} />
                                    <Button
                                        onClick={() => clockOut(record?._id)}
                                        danger
                                        size="small"
                                    >
                                        Check out
                                    </Button>
                                </div>
                            }
                            else if (record?.report?.status === "Absent") {
                                return <Popover content={
                                    <div>
                                        <h3 className="font-medium">Reason</h3>
                                        <h3>{record?.report?.reason}</h3>
                                    </div>
                                }>
                                    <Button

                                        danger
                                        size="medium"
                                    >
                                        Absent
                                    </Button>
                                </Popover>
                            }
                            return <TimeCounter time={record?.report?.start} end={record?.report?.end} />
                        }
                    },
                    {
                        title: 'Action',
                        dataIndex: 'action',
                        key: 'action',
                        render: (_, record) => <ActionButton user={record}
                            refetch={refetch}
                        />
                    }
                ]}
                dataSource={data}
                rowKey={(user) => user._id}
            />
            {/* <Checkbox className=""
                                checked={selected.length === data?.length}
                                onChange={(e) => setSelected(e.target.checked ? data?.map((user) => user._id) : [])}
                            /> */}
        </Card>
    );
}

export const TimeCounter = ({ time, end }) => {
    const [count, setCount] = useState('');

    useEffect(() => {
        const start = new Date(time);

        if (end) {
            const now = new Date(end);
            const diffInSeconds = Math.floor((now - start) / 1000);

            // Calculate hours, minutes, and seconds
            const hours = Math.floor(diffInSeconds / 3600);
            const minutes = Math.floor((diffInSeconds % 3600) / 60);
            const seconds = diffInSeconds % 60;

            setCount(`${hours > 0 ? `${hours}h ` : ''}${minutes}m ${seconds}s`);
        }
        else {
            const interval = setInterval(() => {
                const now = new Date();
                const diffInSeconds = Math.floor((now - start) / 1000);

                // Calculate hours, minutes, and seconds
                const hours = Math.floor(diffInSeconds / 3600);
                const minutes = Math.floor((diffInSeconds % 3600) / 60);
                const seconds = diffInSeconds % 60;

                setCount(`${hours > 0 ? `${hours}h ` : ''}${minutes}m ${seconds}s`);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [time]);

    return (
        <span className="text-sm font-normal">{count}</span>
    );
};

const ActionButton = ({ user, refetch }) => {
    const [option, setOption] = useState("Check in");
    const [show, setShow] = useState(false);
    const [reason, setReason] = useState("");
    const markAbsent = async (id) => {
        try {

            const res = await fetcher({
                url: `/student/student/absent/${user?._id}`,
                method: 'PUT',
                data: {
                    reason
                }
            })
            refetch()
            setShow(false)

        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong');
        }
    }
    return (
        <div>
            <Modal footer={null} open={show} onCancel={() => setShow(!show)} title="Why?">
                <Input.TextArea
                    onChange={(e) => setReason(e.target.value)}
                    value={reason}
                    className="mt-4"
                    placeholder="Reason"
                    rows={4}
                />
                <Button
                    className="mt-4"
                    size="large"
                    danger
                    onClick={() => markAbsent()}
                >
                    Submit
                </Button>
            </Modal>
            <Dropdown

                className='option-classroom'
                menu={{
                    items: [
                        {
                            label: <Link to={`/dashboard/student/${user?._id}/profile/details`}
                                className={`${option === "Check in" ? "text-amber-500" : ""} w-full flex items-center gap-2  text-start`}
                            >
                                <CheckIn />  Contact Guardian
                            </Link>,
                            key: '1',
                        },
                        {
                            label: <button
                                disabled={user?.report?.checkedIn}
                                onClick={() => {
                                    setOption("Absence Today")
                                    setShow(!show)
                                }}

                                className={`${user?.report?.checkedIn ?
                                    'text-red-100'
                                    :
                                    "text-red-500"
                                    } w-full flex items-center gap-2  text-start`}
                            >
                                <LoginOutlined />  Absence Today
                            </button>,
                            key: '146',
                        },
                        {
                            type: 'divider',
                        },
                        {
                            label: <Link to={`/dashboard/student/${user?._id}/profile/enrollment`}
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
        </div>

    );
}