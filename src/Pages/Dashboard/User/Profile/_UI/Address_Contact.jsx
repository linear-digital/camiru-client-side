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
    useEffect(() => {
        if (selected) {
            setUpdate({
                address: selected.address,
                city: selected.city,
                country: selected.country,
                zip: selected.zip
            })
        }
    }, [selected])
    const dispatch = useDispatch();
    const updateHandler = async () => {
        try {
            const res = await api.put(`/student/${selected?._id}`, update)
            dispatch(setSelectedSt(res.data))
            toast.success("Student updated successfully")
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong');
        }
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
                            <div>
                                <div className="w-[350px] h-[31.50px] bg-slate-50 rounded-sm border border-slate-300/opacity-50 grid grid-cols-8 " >
                                    <div className='col-span-2 border-r px-2'>
                                        <select
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs '
                                        >
                                            <option value={"father"}>
                                                Father
                                            </option>
                                            <option value={"mother"}>
                                                Mother
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-span-2 flex items-center px-2 border-r">
                                        <select
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs'
                                        >
                                            <option value={"phone"}>
                                                Phone
                                            </option>
                                            <option value={"mother"}>
                                                Email
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-span-4 flex items-center px-2 ">
                                        <input type="text"
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs'
                                            placeholder='Write here'
                                        />
                                    </div>
                                </div>
                                <div className="w-[350px] h-[31.50px] bg-slate-50 rounded-sm border border-slate-300/opacity-50 grid grid-cols-8 mt-2" >
                                    <div className='col-span-2 border-r px-2'>
                                        <select
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs '
                                        >
                                            <option value={"mother"}>
                                                Mother
                                            </option>
                                            <option value={"father"}>
                                                Father
                                            </option>

                                        </select>
                                    </div>
                                    <div className="col-span-2 flex items-center px-2 border-r">
                                        <select
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs'
                                        >
                                            <option value={"mother"}>
                                                Email
                                            </option>
                                            <option value={"phone"}>
                                                Phone
                                            </option>

                                        </select>
                                    </div>
                                    <div className="col-span-4 flex items-center px-2 ">
                                        <input type="text"
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs'
                                            placeholder='Write here'
                                        />
                                    </div>
                                </div>
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
                                placeholder='State of Province'

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
                                    onClick={()=> {
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
                                    (selected?.contacts?.filter((s) => s.guardianType === "parents"))?.map((contact) => <Gurdian
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