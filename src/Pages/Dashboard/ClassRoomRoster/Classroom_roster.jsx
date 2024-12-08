import React from 'react';

import Filter from './Filter';
import Table from './Table';
import { useQuery } from '@tanstack/react-query';
import api, { fetcher } from '../../../Components/helper/axios.instance';
import Loader from '../../../Components/Loader';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Classroom_roster = () => {
    const { currentUser } = useSelector(state => state.user)
    console.log(currentUser);
    const searchPa = useSearchParams()
    const search = searchPa[0]?.get('id')
    const { classrooms } = useSelector(state => state.classroom)
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['students-r', currentUser?._id, search],
        queryFn: async () => {

            const res = await fetcher({
                url: `/student/center/${currentUser?._id}?classroom=${search || classrooms[0]?._id}`,
                method: 'GET',
            })
            return res
        }
    })
    if (isLoading) {
        return <Loader />
    }
    return (
        <main className='lg:p-10 p-5 bg-white rounded-lg poppins'>
            <Filter
                refetch={refetch}
                name={"Classroom Rosters"}
                desc={"Select your class to checkout the reports"}
            />
            <section className='lg:mb-20 mb-10 mt-10'>
                <Table data={data} />
            </section>
            <Filter
                show={"false"}
                name={"Upcoming"}
                desc={"Upcoming Student list down bellow"}
            />
            <section className='lg:mb-20 my-10'>
                <h1 className='text-2xl font-semibold text-gray-500 text-center'>No data</h1>
            </section>
            <Filter
                show={"false"}
                name={"Graduated"}
                desc={"Graduated Student list down bellow"}
            />
            <section className='mt-10'>
                {/* <Table data={data} /> */}
                <h1 className='text-2xl font-semibold text-gray-500 text-center'>No data</h1>
            </section>
        </main>
    );
};

export default Classroom_roster;