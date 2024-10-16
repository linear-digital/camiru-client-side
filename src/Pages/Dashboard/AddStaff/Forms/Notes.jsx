import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Input } from 'antd';
import { Modal } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Notes = ({ data, setData }) => {
    const [notes, setNotes] = React.useState([]);
    const [note, setNote] = React.useState('');
    const [show, setShow] = React.useState(false);
    const onNext = () => {
        setData({ notes })
    }
    useEffect(() => {
        setNotes(data.notes || [])
    }, [])
    return (
        <div className='bg-staff-bg border-staff-pc border rounded-lg w-full lg:p-[53px] p-5 '>
            <Modal open={show} onCancel={() => setShow(!show)} footer={null} centered>
                <form className='w-full flex flex-col items-end mt-5'
                    onSubmit={(e) => {
                        e.preventDefault();
                        const note = e.target.note.value;
                        if (!note) {
                            return;
                        }
                        setNotes([...notes, { note }]);
                        setShow(false);
                        setNote('');
                    }}
                >
                    <Input.TextArea
                        onChange={(e) => setNote(e.target.value)}
                        value={note}
                        name='note'
                        rows={5}
                        placeholder='Add Personal Notes'
                        className='border-none outline-none w-full'
                        size='large'
                    />
                    <button
                        type='submit'
                        className='py-1 px-8  rounded-3xl mt-3 text-white  font-semibold bg-staff-pc border border-staff-pc text-lg'
                    >
                        Add Note
                    </button>
                </form>
            </Modal>
            <ul
                className='list-decimal list-inside'
            >

                {

                    notes.map((note, index) => (
                        <li key={index}>
                            <button className='text-red-500'
                                onClick={() => {
                                    setNotes(notes.filter((item, i) => i !== index))
                                }}
                            >
                                <TrashIcon className='w-4 h-4' />
                            </button> <p className='text-[#7F7F7F] text-sm'>
                                {note?.note}
                            </p>
                        </li>
                    ))

                }
            </ul>
            <div className='flex items-center border border-staff-pc py-2  rounded gap-x-3 px-5 text-base w-[250px] justify-center cursor-pointer mt-5'
                onClick={() => setShow(!show)}
            >
                <span>
                    Add Personal Notes
                </span>
                <PlusIcon className='w-5 h-5' />
            </div>
            <div className="flex justify-center items-center gap-x-4 mt-10">
                <Link to={'?step=3'} className='py-2 px-10 rounded-3xl mt-3 text-black/40  font-semibold bg-transparent border border-staff-pc text-lg hover:text-staff-pc'>
                    Previous
                </Link>
                <button
                    onClick={onNext}
                    className='py-2 px-10 rounded-3xl mt-3 text-white  font-semibold bg-staff-pc border border-staff-pc text-lg'
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Notes;