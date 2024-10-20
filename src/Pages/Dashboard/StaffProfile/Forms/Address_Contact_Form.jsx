import React from 'react';
import { fetcher } from '../../../../Components/helper/axios.instance';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { Button, Form } from 'antd';
import { Input } from 'antd';
import { useState } from 'react';
import { useCountries } from 'use-react-countries';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setStaff } from '../../../../redux/staff/staffSlice';

const Address_Contact_Form = ({ onClose }) => {
    const { staff } = useSelector((state) => state.staff)
    const [feilds, setFeilds] = useState({
        address: staff?.address || "",
        city: staff?.city || "",
        state: staff?.state || "",
        zip: staff?.zip || "",
        country: staff?.country || "",
        phone: staff?.phone || "",
        email: staff?.email || "",
    })
    const { countries } = useCountries();
    const dispatch = useDispatch()
    const updateHandler = async () => {
        try {
            await fetcher({
                url: `/staff/${staff?._id}`,
                method: 'PUT',
                data: feilds
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
    return (
        <div className='w-full border border-staff-pc p-10 rounded-xl poppins bg-staff-bg'>
            <div className="grid grid-cols-4">

                <div className="col-span-2 flex justify-start">
                    <h1 className="text-slate-900 lg:text-2xl text-xl mb-3 lg:mb-0 font-bold ">Address & Contact Edit</h1>
                </div>
            </div>
            <div className='mt-10'>
                <div>
                    <RowEdit title={"Address"} >
                        <Input
                            size='large'
                            name='address'
                            placeholder='Enter address'
                            value={feilds?.address}
                            onChange={(e) => setFeilds({ ...feilds, address: e.target.value })}
                        />
                    </RowEdit>
                    <RowEdit title={"City"} >
                        <Input
                            size='large'
                            name='city'
                            placeholder='Enter City'
                            value={feilds?.city}
                            onChange={(e) => setFeilds({ ...feilds, city: e.target.value })}
                        />
                    </RowEdit>
                    <RowEdit title={"State or Province"} >
                        <Input
                            size='large'
                            name='state'
                            placeholder='Enter State or Province'
                            value={feilds?.state}
                            onChange={(e) => setFeilds({ ...feilds, state: e.target.value })}
                        />
                    </RowEdit>
                    <RowEdit title={"Country"} >
                        <Select
                            className='w-full'
                            size='large'
                            showSearch
                            value={feilds?.country}
                            onChange={(e) => setFeilds({ ...feilds, country: e })}
                            placeholder="Select a country"
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                ...countries.map((country) => ({
                                    value: country.name,
                                    label: country.name
                                }))
                            ]}
                        />
                    </RowEdit>

                    <RowEdit title={"Zip"} >
                        <Input
                            size='large'
                            placeholder='Enter zip'
                            value={feilds?.zip}
                            onChange={(e) => setFeilds({ ...feilds, zip: e.target.value })}
                        />
                    </RowEdit>
                    <RowEdit title={"Email"} >
                        <Input
                            size='large'
                            placeholder='Enter Email'
                            value={feilds?.email}
                            onChange={(e) => setFeilds({ ...feilds, email: e.target.value })}
                        />
                    </RowEdit>
                    <RowEdit title={"Phone"} >
                        <Input
                            size='large'
                            placeholder='Enter Phone Number'
                            value={feilds?.phone}
                            onChange={(e) => setFeilds({ ...feilds, phone: e.target.value })}
                        />
                    </RowEdit>
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
            </div>
        </div >
    );
};

export default Address_Contact_Form;

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