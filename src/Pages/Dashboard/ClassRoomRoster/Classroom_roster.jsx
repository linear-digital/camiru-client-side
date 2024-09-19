import React from 'react';

import Filter from './Filter';
import Table from './Table';
import { useQuery } from '@tanstack/react-query';
import api from '../../../Components/helper/axios.instance';
import Loader from '../../../Components/Loader';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Classroom_roster = () => {
    const { currentUser } = useSelector(state => state.user)
    const [selectedClass, setSelectedClass] = useState({
        
    })
    const searchPa = useSearchParams()
    const search = searchPa[0]?.get('id')
    const { classrooms } = useSelector(state => state.classroom)
    const { data, isLoading } = useQuery({
        queryKey: ['students-r', currentUser?._id, search],
        queryFn: async () => {
            const res = await api.get(`/student/center/${currentUser?._id}?classroom=${search || classrooms[0]?._id}`)
            return res.data
        }
    })
    useEffect(() => {
        setSelectedClass(classrooms[0]?._id)
    }, [classrooms])
    if (isLoading) {
        return <Loader />
    }
    return (
        <main className='lg:p-10 p-5 bg-white rounded-lg poppins'>
            <Filter
                
                name={"Classroom Rosters"}
                desc={"Select your class to checkout the reports"}
            />
            <section className='lg:mb-20 mb-10 mt-10'>
                <Table data={data} />
            </section>
            <Filter
               
                name={"Upcoming"}
                desc={"Upcoming Student list down bellow"}
            />
            <section className='lg:mb-20 my-10'>
                <Table data={data} />
            </section>
            <Filter
               
                name={"Graduated"}
                desc={"Graduated Student list down bellow"}
            />
            <section className='mt-10'>
                <Table data={data} />
            </section>
        </main>
    );
};

export default Classroom_roster;