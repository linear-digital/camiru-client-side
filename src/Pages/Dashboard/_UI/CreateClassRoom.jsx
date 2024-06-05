import { Input } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { api } from '../../../Components/helper/axios.instance';
import toast from 'react-hot-toast';
const CreateClassRoom = ({ open, setOpen }) => {
    const [name, setName] = useState("");
    const { currentUser } = useSelector((state) => state.user);
    const [error, setError] = useState('');
    const createClass = async () => {
        if (!name) {
            setError('Please enter class name');
            return;
        }
        try {
            await api.post(`/classroom`, {
                center: currentUser._id,
                name: name
            })
            toast.success("Classroom created successfully");
            setOpen(false);
        } catch (error) {
            setError(error?.response?.data?.message || 'Something went wrong');
        }
    }
    return (
        <div>
            <h1 className='text2xl text-center font-semibold text-gray-800'>Create A Class Room</h1>
            <div className='mt-5 mb-3'>
                <input
                    label="Class Name"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Class Name"
                    className='w-full h-[40px] border border-gray-400 rounded-md px-2 text-sm text-gray-700 outline-none bg-white'
                />
            </div>
            <p className='text-red-500 mb-2 text-sm'>{error}</p>
            <Button
                onClick={createClass}
                variant="filled" className='bg-secondary text-white'>
                Create
            </Button>
        </div>
    );
};

export default CreateClassRoom;