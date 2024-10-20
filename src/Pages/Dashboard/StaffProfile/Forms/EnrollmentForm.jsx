import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Select } from 'antd';
import { Dropdown } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MUIDatePicker from '../../AddStaff/Forms/MUIDatePicker';
import { CheckBoxWithLabel } from '../../AddStudent/Common';
import { fetcher } from '../../../../Components/helper/axios.instance';
import { useDispatch } from 'react-redux';
import { setStaff } from '../../../../redux/staff/staffSlice';
import toast from 'react-hot-toast';
import { PlusOutlined } from '@ant-design/icons';

const EnrollmentForm = ({ onClose }) => {
    const { staff } = useSelector((state) => state.staff)
    const { classrooms } = useSelector(state => state.classroom)
    const [enrollmentData, setEnrollmentData] = React.useState(staff?.enrollment || [{
        classroom: "",
        startDate: new Date(),
        shifting: "",
        status: "",
        schedule: []
    }])
    const days = ["Mon", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    const dispatch = useDispatch()
    const updateHandler = async () => {
        try {
            await fetcher({
                url: `/staff/${staff?._id}`,
                method: 'PUT',
                data: {
                    enrollment: enrollmentData
                }
            })
            const staffProfile = await fetcher({
                url: `/staff/${staff?._id}`,
                method: 'GET'
            })
            dispatch(setStaff(staffProfile))
            toast.success("Staff updated successfully")
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message || 'Something went wrong');
        }
    }
    console.log(enrollmentData);
    return (
        <div className='w-full border p-10 rounded-xl poppins bg-staff-bg border-staff-pc enroll4'>
            <div className="grid grid-cols-4">
                <div className='col-span-1 flex justify-end items-center'>
                    <h1 className="text-[#3A3D47] lg:text-2xl text-xl font-bold ">
                        Enrollment
                    </h1>
                </div>
                <div className='col-span-3 flex justify-end items-center'>
                    <button className='bg-[#FFBB3B33] text-[#A0A0A0] w-[180px] h-[47px] rounded-lg text-[16px] flex gap-x-2 items-center justify-center'
                        onClick={() => {
                            setEnrollmentData([{
                                classroom: "",
                                startDate: new Date().toISOString(),
                                shifting: "Morning",
                                status: "Active",
                                schedule: days
                            },
                            ...enrollmentData])
                        }}
                    >
                        <span> Add Classroom</span> <PlusOutlined />
                    </button>
                </div>
            </div>
            {
                enrollmentData.map((enrollment, index) => {

                    return <div className={`mt-10 ${enrollmentData?.length !== index + 1 && "border-b-2"}`}
                        key={index}>
                        <RowEdit
                            title={"Classroom"}
                        >
                            <ClassRoomSelector
                                rooms={classrooms}
                                selected={enrollment.classroom}
                                setSelected={(item) => {
                                    setEnrollmentData(enrollmentData.map((enrollment, i) => {
                                        if (index === i) {
                                            return {
                                                ...enrollment,
                                                classroom: item
                                            }
                                        }
                                        return enrollment
                                    }))
                                }}
                            />
                        </RowEdit>
                        <RowEdit
                            title={"Status"}
                        >
                            <StatusProvider
                                selected={enrollment.status}
                                setSelected={(item) => {
                                    setEnrollmentData(enrollmentData.map((enrollment, i) => {
                                        if (index === i) {
                                            return {
                                                ...enrollment,
                                                status: item
                                            }
                                        }
                                        return enrollment
                                    }))
                                }}
                            />
                        </RowEdit>
                        <RowEdit
                            title={"Start Date"}
                        >
                            <MUIDatePicker
                                updater={(e) => {
                                    setEnrollmentData(enrollmentData.map((enrollment, i) => {
                                        if (index === i) {
                                            return {
                                                ...enrollment,
                                                startDate: e
                                            }
                                        }
                                        return enrollment
                                    }))
                                }}
                                defaultValue={new Date(enrollment.startDate)} />
                        </RowEdit>
                        <RowEdit
                            title={"Shifting"}
                        >
                            <ShiftingProvider
                                selected={enrollment.shifting}
                                setSelected={(item) => {
                                    setEnrollmentData(enrollmentData.map((enrollment, i) => {
                                        if (index === i) {
                                            return {
                                                ...enrollment,
                                                shifting: item
                                            }
                                        }
                                        return enrollment
                                    }))
                                }}
                            />
                        </RowEdit>
                        <RowEdit
                            title={"Schedule"}
                        >

                            <ScheduleProvider
                                selected={enrollment.schedule}
                                setSelected={(item) => {
                                    setEnrollmentData(enrollmentData.map((enrollment, i) => {
                                        if (index === i) {
                                            return {
                                                ...enrollment,
                                                schedule: item
                                            }
                                        }
                                        return enrollment
                                    }))
                                }}
                            />
                        </RowEdit>

                    </div>
                })
            }
            <RowEdit  >
                <div className="flex gap-x-6">
                    <button
                        onClick={updateHandler}
                        className='py-2 px-7 rounded-lg bg-[#5CD9CA40] text-[#187A82] font-semibold'>
                        Save
                    </button>

                    <button
                        onClick={onClose}
                        className='py-2 px-7 rounded-lg text-[#FF3636] bg-[#FF363633] font-semibold'>
                        Cencel
                    </button>
                </div>
            </RowEdit>
        </div>
    );
};

export default EnrollmentForm;


const ScheduleProvider = ({ selected, setSelected }) => {
    const days = ["Mon", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    const [checked, setChecked] = React.useState(selected);

    useEffect(() => {
        setSelected(checked);
    }, [checked]);

    return (
        <div className="flex gap-x-3">
            {days.map((item, index) => (
                <CheckBoxWithLabel
                    key={index}
                    onChange={(e) => {
                        if (checked.includes(item)) {
                            setChecked(checked.filter((day) => day !== item));
                        } else {
                            setChecked([...checked, item]);
                        }
                    }}
                    checked={checked.includes(item)}
                    label={item}
                />
            ))}
        </div>
    );
};

const RowEdit = ({ title, desc, children }) => {
    return <div className="lg:grid grid-cols-5 gap-10 mb-8">
        <div className="col-span-1 lg:justify-end justify-start flex items-center">
            <h4 className="text-zinc-700 mb-2 lg:mb-0 text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-2 flex items-center">
            {children}
        </div>
    </div>
}

export const ClassRoomSelector = ({ rooms, selected, setSelected }) => {

    return <Dropdown
        className='option-classroom'
        menu={{
            items: [
                ...rooms?.map((item, index) => {
                    return {
                        label: <button
                            className={`${selected?._id === item?._id ? "text-primary2" : ""} w-full   text-start`}
                            onClick={() => setSelected(item)}>
                            {item?.name}
                        </button>,
                        key: index,
                    }
                })
            ],
        }}
        trigger={['click']}
    >
        <button className=" lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px] bg-[#187A8229] text-[#187A82] border-[#187A82] rounded justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
            <span className=" text-xs font-medium tracking-tight">
                {selected?.name}
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
    </Dropdown>
}

const StatusProvider = ({ selected, setSelected }) => {
    return <Dropdown
        className='option-classroom'
        menu={{
            items: [
                ...["Active", "Not Active"]?.map((item, index) => {
                    return {
                        label: <button
                            onClick={() => setSelected(item)}
                        >
                            {item}
                        </button>,
                        key: index,
                    }
                })
            ],
        }}
        trigger={['click']}
    >
        <button className=" lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px] bg-[#187A8229] text-[#187A82] border-[#187A82] rounded justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
            <span className=" text-xs font-medium tracking-tight">
                {selected}
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
    </Dropdown>
}

const ShiftingProvider = ({ selected, setSelected }) => {
    return <Dropdown
        className='option-classroom'
        menu={{
            items: [
                ...["Morning", "Afternoon", "Evening"]?.map((item, index) => {
                    return {
                        label: <button
                            onClick={() => setSelected(item)}
                        >
                            {item}
                        </button>,
                        key: index,
                    }
                })
            ],
        }}
        trigger={['click']}
    >
        <button className=" lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px] bg-[#187A8229] text-[#187A82] border-[#187A82] rounded justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
            <span className=" text-xs font-medium tracking-tight">
                {selected}
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
    </Dropdown>
}