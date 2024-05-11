import React from 'react';
import NavSearchbar from '../../../Components/Top_bar/NavSearchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Square } from '../../../util/icons';
import Table from './Table';
import { Dropdown } from 'antd';
import { Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const ClassRoom = () => {
    return (
        <main className='p-10 bg-white rounded-lg poppins'>
            <section className='flex justify-between items-center'>
                <div>
                    <h1 className="w-40 text-primary text-2xl font-bold ">Classroom</h1>
                    <p className="w-72 text-neutral-400 mt-2 font-normal text-sm">Select your class to checkout the reports</p>
                </div>
                <div className='flex gap-10 items-center'>
                    <div className="text-primary text-xs font-semibold ">21th December, 2022</div>

                    <Dropdown
                        menu={{
                            items: [
                                {
                                    label: <button>
                                        Infants
                                    </button>,
                                    key: '0',
                                },
                                {
                                    type: 'divider',
                                },
                                {
                                    label: <button>
                                        Toddlers
                                    </button>,
                                    key: '1',
                                },
                                {
                                    type: 'divider',
                                },
                                {
                                    label: <button>
                                        Pre-K
                                    </button>,
                                    key: '2',
                                },
                                {
                                    type: 'divider',
                                },
                                {
                                    label: <button>
                                        After Schoolers
                                    </button>,
                                    key: '3',
                                },
                                {
                                    type: 'divider',
                                },
                                {
                                    label: '3rd menu item',
                                    key: '4',
                                },
                            ],
                        }}
                        trigger={['click']}
                    >
                        <button className="w-[135px] h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-[#15acde40] text-[#15ACDE] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
                            <span className="  font-medium tracking-tight">Add Profile</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </Dropdown>
                </div>
            </section>
            <section className='mt-10'>
                <Table />
            </section>
        </main>
    );
};

export default ClassRoom;