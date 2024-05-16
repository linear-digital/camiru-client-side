import React from 'react';

import Filter from './Filter';
import Table from './Table';

const Classroom_roster = () => {
    return (
        <main className='lg:p-10 p-5 bg-white rounded-lg poppins'>
            <Filter
                name={"Classroom Rosters"}
                desc={"Select your class to checkout the reports"}
            />
            <section className='lg:mb-20 mb-10 mt-10'>
                <Table />
            </section>
            <Filter
                name={"Upcoming"}
                desc={"Upcoming Student list donw bellow"}
            />
            <section className='lg:mb-20 mb-10'>
                <Table />
            </section> 
             <Filter
                name={"Graduated"}
                desc={"Graduated Student list donw bellow"}
            />
            <section className='mt-10'>
                <Table />
            </section>
        </main>
    );
};

export default Classroom_roster;