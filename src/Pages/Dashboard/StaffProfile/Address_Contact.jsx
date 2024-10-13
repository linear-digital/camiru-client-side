import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useCountries } from 'use-react-countries';
import { useEffect } from 'react';


import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Form } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';
import nameDisplay from '../../../util/nameDisplay';
import { fetcher } from '../../../Components/helper/axios.instance';
import { setSelectedSt } from '../../../redux/child/childSlice';
import Loader from '../../../Layouts/Loader';

const Address_Contact = ({ edit }) => {
    const location = useLocation();
    const { selected } = useSelector((state) => state.child)
    const { countries } = useCountries();
    const [update, setUpdate] = useState({
        address: "",
        city: "",
        country: "",
        zip: "",
        state: ""
    })
    const [contact, setContact] = useState({
        father: {
            name: "",
            email: "",
            phone: "",
        },
        mother: {
            name: "",
            email: "",
            phone: "",
        }
    })
    useEffect(() => {
        if (selected) {
            setUpdate({
                address: selected.address,
                city: selected.city,
                country: selected.country,
                zip: selected.zip,
                state: selected.state
            })
            setContact({
                ...contact,
                ...selected?.contact_numbers
            } || {
                father: {
                    name: "",
                    email: "",
                    phone: "",
                },
                mother: {
                    name: "",
                    email: "",
                    phone: "",
                }
            })
        }
    }, [selected])
    const dispatch = useDispatch();
    const updateHandler = async () => {
        try {

            const res = await fetcher({
                url: `/student/${selected?._id}`,
                method: 'PATCH',
                data: {
                    ...update,
                    contact_numbers: contact
                }
            })

            dispatch(setSelectedSt(res))
            toast.success("Student updated successfully")
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong');
        }
    }
    const [parentType, setParentType] = useState("father")
    const [l, setL] = useState(false)
    useEffect(() => {
        setL(true)
        setTimeout(() => {
            setL(false)
        }, 200)
    }, [parentType])
    if (l) {
        return <Loader />
    }
    return (
        <div className='w-full border border-staff-pc p-10 rounded-xl poppins bg-staff-bg'>
            <div className="flex justify-end">
                {
                    !edit && <Link to={location.pathname.includes("edit") ? `${location.pathname}` : `${location.pathname}/edit`} className='btn btn-sm bg-[#FFBB3B33] text-[#A0A0A0] text-xs font-normal px-5'>
                        Edit Page
                        <FontAwesomeIcon icon={faPen} className='text-[#FFBB3B]' />
                    </Link>
                }
            </div>
            <div className="grid grid-cols-4">

                <div className="col-span-1 flex justify-end">
                    <h1 className="text-slate-900 lg:text-2xl text-xl mb-3 lg:mb-0 font-bold ">Address & Contact</h1>
                </div>
            </div>
            <div className='mt-10'>
                <Row

                    title={"Address"}
                    desc={selected?.address || "N/A"}
                />
                <Row
                    title={"City"}
                    desc={selected?.city || "N/A"}
                />
                <Row
                    title={"State of Province"}
                    desc={selected?.state || "N/A"}
                />
                <Row
                    title={"Country"}
                    desc={selected?.country || "N/A"}
                />
                <Row
                    title={"Zip"}
                    desc={selected?.zip || "N/A"}
                />
                <Row
                    title={"Email"}
                    desc={selected?.email || "N/A"}
                />
                <Row
                    title={"Phone"}
                    desc={selected?.phone || "N/A"}
                />
            </div>
        </div >
    );
};

export default Address_Contact;

const Row = ({ title, desc }) => {
    return <div className="grid lg:grid-cols-4 grid-cols-6 gap-10 lg:mb-8 mb-5">
        <div className="lg:col-span-1 col-span-3 lg:justify-end flex items-center">
            <h4 className="text-zinc-700 text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-3 flex items-center">
            <h5 className="text-zinc-700 text-sm font-normal ">{desc}</h5>
        </div>
    </div>
}

const Gurdian = ({ name, phone, email }) => {
    return <Card className='p-4 shadow border'>
        <div className="text-xs">
            {name}
        </div>
        <div className="text-[10px] mt-1">
            {phone}
        </div>
        <div className="text-[10px] mt-1">
            {email}
        </div>
    </Card>
}

const RowEdit = ({ title, desc, children }) => {
    return <div className="lg:grid grid-cols-5 gap-10 mb-8">
        <div className="col-span-1 lg:justify-end justify-start flex items-center">
            <h4 className="text-zinc-700 mb-2 lg:mb-0 text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-4 flex items-center">
            {children}
        </div>
    </div>
}