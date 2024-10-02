import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import nameDisplay from '../../../../../util/nameDisplay';
import { useCountries } from 'use-react-countries';
import { useEffect } from 'react';
import api from '../../../../../Components/helper/axios.instance';
import { setSelectedSt } from '../../../../../redux/child/childSlice';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Form } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';
import Loader from '../../../../../Components/Loader';

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
            const res = await api.put(`/student/${selected?._id}`, {
                ...update,
                contact_numbers: contact
            })
            dispatch(setSelectedSt(res.data))
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
        <div className='w-full border pl-5 py-[55px] rounded-xl poppins'>
            <div className="lg:flex gap-10">
                <h1 className="text-slate-900 lg:text-2xl text-xl mb-3 lg:mb-0 font-bold ">Address & Contact</h1>
                {
                    !edit && <Link to={location.pathname.includes("edit") ? `${location.pathname}` : `${location.pathname}/edit`} className='btn btn-sm bg-[#FFBB3B33] text-[#A0A0A0] text-xs font-normal px-5'>
                        Advance Edit Page
                        <FontAwesomeIcon icon={faPen} className='text-[#FFBB3B]' />
                    </Link>
                }
            </div>
            {
                edit ?
                    <div className='mt-10'>
                        <RowEdit
                            title={"Parents"}
                        >
                            <div className='lg:w-[350px] w-full'>
                                <Form
                                    layout='vertical'
                                    size='small'

                                    initialValues={{
                                        type: parentType,
                                        name: contact[parentType].name,
                                        email: contact[parentType].email,
                                        phone: contact[parentType].phone
                                    }}
                                    onChange={(e) => {
                                        if (e.target.name === "type") {
                                            setParentType(e.target.value)
                                        }
                                        else {
                                            setContact({
                                                ...contact,
                                                [parentType]: {
                                                    ...contact[parentType],
                                                    [e.target.id]: e.target.value
                                                }
                                            })
                                        }

                                    }}
                                >
                                    <Form.Item
                                        name="type"
                                        label="Parent Type"
                                        size="small"
                                        className='mb-3'
                                    >
                                        <select name="type" id="" className='w-full lg:w-[350px] h-[28px] bg-slate-50 border outline-none text-xs px-2 rounded-md '>
                                            <option value="">Select</option>
                                            <option value="father">Father</option>
                                            <option value="mother">Mother</option>
                                        </select>
                                    </Form.Item>
                                    <Form.Item
                                        name="name"
                                        label="Name"
                                        size="small"
                                        className='mb-3'
                                    >
                                        <Input name='name' placeholder='Name' />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        label="Email Address"
                                        size="small"
                                        className='mb-3'
                                    >
                                        <Input name='email' placeholder='Email Address' />
                                    </Form.Item>
                                    <Form.Item
                                        name="phone"
                                        label="Phone Number"
                                        size="small"

                                    >
                                        <Input name='phone' placeholder='Phone  Number' />
                                    </Form.Item>
                                </Form>


                            </div>
                        </RowEdit>

                        <RowEdit
                            title={"Address"}
                        >
                            <input type="text"
                                value={update.address}
                                onChange={(e) => setUpdate((prev) => ({ ...prev, address: e.target.value }))}
                                className='w-[350px] h-[38px] bg-slate-50 border outline-none text-xs px-2 '
                                placeholder='Address'
                            />
                        </RowEdit>

                        <RowEdit
                            title={"City"}
                        >
                            <input
                                value={update.city}
                                onChange={(e) => setUpdate((prev) => ({ ...prev, city: e.target.value }))}
                                type="text"
                                className='w-[350px] h-[38px] bg-slate-50 border outline-none text-xs px-2 '
                                placeholder='City'
                            />
                        </RowEdit>

                        <RowEdit
                            title={"State of Province"}
                        >
                            <input
                                value={update.state}
                                onChange={(e) => setUpdate((prev) => ({ ...prev, state: e.target.value }))}
                                type="text"
                                className='w-[350px] h-[38px] bg-slate-50 border outline-none text-xs px-2 '
                                placeholder='State of Province'

                            />
                        </RowEdit>

                        <RowEdit
                            title={"Country"}
                        >
                            <div>
                                <select
                                    defaultValue={"United States"}
                                    value={update.country}
                                    onChange={(e) => setUpdate((prev) => ({ ...prev, country: e.target.value }))}
                                    className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                                    {
                                        (countries.sort((a, b) => a - b)).map((country, index) => <option
                                            value={country.name} key={index}>{country.name}
                                        </option>)
                                    }
                                </select>
                            </div>
                        </RowEdit>
                        <RowEdit
                            title={"Zip"}
                        >
                            <input type="text"
                                className='w-[350px] h-[38px] bg-slate-50 border outline-none text-xs px-2 '
                                value={update.zip}
                                onChange={(e) => setUpdate((prev) => ({ ...prev, zip: e.target.value }))}
                                placeholder='Zip'
                            />
                        </RowEdit>
                        <RowEdit
                            title={""}
                        >
                            <div className="flex gap-2">
                                <button
                                    onClick={updateHandler}
                                    className='w-[90px] h-[32px] bg-[#5CD9CA40] text-[#187A82] rounded-md text-xs'
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => {
                                        // go back to previous page
                                        window.history.back()
                                    }}
                                    className='w-[90px] h-[32px] text-[#FF3636] bg-[#FF363633] rounded-md text-xs'
                                >
                                    Cencle
                                </button>
                            </div>
                        </RowEdit>
                    </div>
                    :
                    <div className='mt-10'>
                        <div className="lg:grid grid-cols-4 gap-10 lg:mb-8 mb-5 items-start">
                            <div className="col-span-1 lg:justify-end mb-3 lg:mb-0 flex items-center">
                                <h4 className="text-zinc-700 text-sm font-semibold">
                                    Parents
                                </h4>
                            </div>
                            <div className="col-span-3 flex items-center gap-3">
                                {
                                    (selected?.contacts?.filter((s) => s.guardianType === "parent" || s.guardianType === "parents"))?.map((contact) => <Gurdian
                                        name={nameDisplay(contact)}
                                        phone={contact.home}
                                        other={contact.other}
                                        email={contact.email}
                                    />)
                                }
                            </div>
                        </div>
                        <div className="lg:grid grid-cols-4 gap-10 mb-8 items-start">
                            <div className="col-span-1 lg:justify-end mb-3 lg:mb-0 flex items-center">
                                <h4 className="text-zinc-700 text-sm font-semibold">
                                    Guardians
                                </h4>
                            </div>
                            <div className="col-span-3 flex flex-wrap items-center gap-3">
                                {
                                    (selected?.contacts?.filter((s) => s.guardianType === "guardian"))?.map((contact) => <Gurdian
                                        name={nameDisplay(contact)}
                                        phone={contact.home}
                                        other={contact.other}
                                        email={contact.email}
                                    />)
                                }
                            </div>
                        </div>
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

                    </div>
            }
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