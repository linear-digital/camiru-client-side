import React from 'react';
import NavSearchbar from '../../../Components/Top_bar/NavSearchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Square } from '../../../util/icons';
import Table from './Table';

const All_Contacts = () => {
    return (
        <main className='p-10 bg-white rounded-lg'>
            <section className='flex justify-between items-center'>
                <div>
                    <h1 className="w-40 text-primary text-2xl font-bold ">Contacts</h1>
                    <p className="w-72 text-neutral-400 mt-2 font-normal text-sm">Checkout your overview at a glance</p>
                </div>
                <div className='flex gap-5'>
                    <NavSearchbar variant={'borderd'} placeholder={"Search Contact"} />
                    <button className="w-[135px] h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-amber-50 text-amber-500 rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-xs">
                        <span className="  font-medium tracking-tight">Add Profile</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <button className="w-[135px] h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white border border-amber-500 rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-xs">
                        <span className=" font-medium tracking-tight">Find Filter</span>
                        <FontAwesomeIcon icon={faChevronDown} className='text-amber-500' />
                    </button>
                    <button className='w-[47px] h-[47px] bg-amber-50 rounded-xl flex justify-center items-center'>
                        <FontAwesomeIcon icon={faBars} className='text-amber-600' />
                    </button>
                    <button className='w-[47px] h-[47px] bg-amber-50 rounded-xl flex justify-center items-center'>
                        <Square />
                    </button>
                </div>
            </section>
            <section className='mt-10'>
                <Table />
            </section>
        </main>
    );
};

export default All_Contacts;