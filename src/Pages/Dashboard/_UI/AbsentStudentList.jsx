import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import AbsRow from './AbsRow';

const AbsentStudentList = () => {
    return (
        <Card className='p-5 w-full h-full shadow-blue-gray-50'>
            <section className="flex items-center justify-between">
                <h2 className=" text-zinc-800 text-xs font-semibold ">Absent Student List</h2>
                <button className=' text-xs px-6 flex gap-3 items-center'>
                    See All
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </section>
            <section className='flex flex-col gap-3 mt-5'>
                <AbsRow />
                <AbsRow />
                <AbsRow />
                <AbsRow />
                <AbsRow />
            </section>
        </Card>
    );
};

export default AbsentStudentList;