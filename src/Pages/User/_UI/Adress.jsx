import React from 'react';
import { Dot } from '../Profile';
import { Input, Option } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Buttons/Buttons';
import { Select } from '@material-tailwind/react';
import { useCountries } from "use-react-countries";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from '@material-tailwind/react';

const Address = () => {
    const [address, setAddress] = React.useState('');
    const { countries } = useCountries();
    return (
        <div className='w-[550px] h-auto pt-20'>
            <div className="flex items-center gap-2">
                <Dot size={10} className={"bg-amber-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={10} className={"bg-red-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={10} className={"bg-green-500"} />
            </div>
            <div className="mt-7 text-zinc-800 text-2xl font-bold leading-9">Profile info</div>
            <div className=" text-gray-600 text-sm font-light mt-4 leading-snug">Fill in the data for profile. It will take a couple of minutes. </div>
            <form className='w-full p-7 border mt-5 rounded-md grid grid-cols-2 gap-2'>
                <h1 className=" text-zinc-800 text-xl font-semibold  leading-7 col-span-2">Address</h1>
                <p className="mt-2 text-gray-600 text-xs font-light  leading-none col-span-2">Used for shipping orders</p>
                <div className='mt-5 col-span-2'>
                    <Input
                        color='black'
                        variant="static"
                        label="Address"
                        placeholder='Enter your address'
                        type='text'
                    />
                </div>
                <div className='mt-5 col-span-2'>
                    <Select variant="static" label="Select Address"
                        value={address}
                    >
                        <Option value=''>Select Address</Option>
                        <Option value='New York'>New York</Option>
                        <Option value='California'>California</Option>
                        <Option value='Texas'>Texas</Option>
                        <Option value='Florida'>Florida</Option>
                        <Option value='Georgia'>Georgia</Option>
                        <Option value='Pennsylvania'>Pennsylvania</Option>
                    </Select>
                </div>
                <div className="col-span-1 mt-5">
                    <Select
                        size="lg"
                        variant="static"
                        label="Select Country"
                        value={"United States"}
                        onChange={(e) => {
                            console.log(e)
                        }}
                        selected={(element) =>
                            element &&
                            React.cloneElement(element, {
                                disabled: true,
                                className:
                                    "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
                            })
                        }
                    >
                        {(countries.sort((a, b) => a.name.localeCompare(b.name))).map(({ name, flags }) => (
                            <Option key={name} value={name} className="flex items-center gap-2">
                                <img
                                    src={flags.svg}
                                    alt={name}
                                    className="h-5 w-5 rounded-full object-cover"
                                />
                                {name}
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className='mt-6 col-span-1'>
                    <Input
                        color='black'
                        variant="static"
                        label="ZIP Code"
                        placeholder='ZIP Code'
                        type='text'
                    />
                </div>
            </form>
            <div className="flex mt-5 items-center gap-2">
                <Checkbox color="orange" label="I agree with" 
                className='text-secondary text-sm'
                /> <a 
                className='text-secondary text-sm'
                href="#">Terms of use</a>
            </div>
            <div className="flex gap-5 pb-10">
                <Button variant='secondary' className='mt-8 py-4 px-7 bg-white text-black border border-gray-600 flex items-center gap-3'>
                    <FontAwesomeIcon icon={faCheck} className='text-lg' />  Save
                </Button>
            </div>
        </div>
    );
};

export default Address;