import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-tailwind/react';
import React from 'react';
import { useEffect } from 'react';
import { api } from '../../../Components/helper/axios.instance';
import { useSelector } from 'react-redux';

const FormPreview = ({ data, open, setOpen, setIndex }) => {
    const [className, setClassName] = React.useState({})
    const { currentUser } = useSelector(state => state.user)
    useEffect(() => {
        (
            async () => {
                try {
                    const res = await api.get(`/classroom/${data?.classRoom}`)
                    setClassName(res.data)
                } catch (error) {
                    console.error(error)
                }
            }
        )()
    }, [data])
    const submitNewStudent = async () => {
        try {
            const res = await api.post('/student', { ...data, center: currentUser._id })
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div
            onClick={() => console.log(data)}
        >
            <h1 className='text-2xl text-center font-semibold'>Preview</h1>
            <div className="flex flex-col gap-1 mt-5">
                <Card title={"First Name"} value={data?.firstName} />
                <Card title={"Last Name"} value={data?.lastName} />
                <Card
                    title={"Email"}
                    value={data?.email || "Not Inserted"}
                />
                <Card title={"Gender"} value={data?.gender} />
                <Card title={"Status"} value={data?.status} />
                <Card title={"Rotation"} value={data?.rotation} />
                <Card title={"Days"} value={data?.days.map(day => <span className="text-slate-900 text-xs font-semibold px-2">{day}</span>)} />

                <Card title={"Class Room"} value={className?.name} />
                <Card title={"Address"} value={data?.address} />
                <Card title={"City"} value={data?.city} />
                <Card title={"Zip"} value={data?.zip} />
                <Card title={"Date of Birth"} value={data?.birthDate} />
                <Card title={"Enrollment Date"} value={data?.enrollmentDate} />
                <div className="grid grid-cols-4 border px-2 py-1">
                    <div className="col-span-1 text-zinc-500 text-xs font-semibold">{"Contacts"}</div>
                    <div className="col-span-2 border-l text-slate-900 text-xs font-normal px-2">
                        Guardian Type: <span className='capitalize'>{data?.contacts[0]?.guardianType}</span>
                        <br />
                        Name: {data?.contacts[0]?.firstName + " " + data?.contacts[0]?.lastName}
                        <br />
                        Home: {data?.contacts[0]?.home}
                        <br />
                        Others: {data?.contacts[0]?.others}
                    </div>
                </div>
            </div>
            <div className='flex justify-end items-center gap-3 mt-5'>
                <Button onClick={() => {
                    setOpen(false)
                    setIndex(6)
                }} variant="outlined" size="sm" color='red'>
                    Update <FontAwesomeIcon icon={faPen} className='text-[10px] ml-2' />
                </Button>
                <Button
                    onClick={submitNewStudent}
                    variant="outlined" size="sm" color='green'>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default FormPreview;

const Card = ({ title, value }) => {
    return (
        <div className="grid grid-cols-4 border px-2 py-1">
            <div className="col-span-1 text-zinc-500 text-xs font-semibold">{title}</div>
            <div className="col-span-2 border-l text-slate-900 text-xs font-normal px-2">{value}</div>
        </div>
    );
}