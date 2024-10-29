import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'antd';
import { Dropdown } from 'antd';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentList from '../Classroom/StudentList';
import { useSearchParams } from 'react-router-dom';

const ImportPeople = ({ refetch, page }) => {
    const [open, setOpen] = useState(false);
    const searchPa = useSearchParams()
    const search = searchPa[0]?.get('id')
    return (
        <div>
            <Modal title="Import Existing" open={open} onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                footer={null}
                width={1000}
            >
                {
                    open && <StudentList id={search} refetch={refetch} />
                }
            </Modal>
            <Dropdown
                className='option-classroom'
                menu={{
                    items: [
                        {
                            label: <Link to={'/dashboard/add-student'}
                                className={`text-start`}
                            >
                                Add Student
                            </Link>,
                            key: '0',
                        },
                        {
                            label: <Link to={'/dashboard/add-staff'}
                                className={`text-start`}
                            >
                                Add Staff
                            </Link>,
                            key: '3',
                        },
                        {
                            label: <button
                                className={`text-start`}
                                onClick={() => setOpen(true)}
                            >
                                Import Existing
                            </button>,
                            key: '1',
                        }
                    ],
                }}
                trigger={['click']}
            >
                {
                    page === "roster" ?
                        <button className="lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px]  bg-[#ffbb3b33] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-[10px] text-amber-600 font-semibold">
                            <span className=" text-xs font-medium tracking-tight">
                                Add People
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        :
                        <button className="w-[135px] lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px] bg-[#15acde40] text-[#15ACDE] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
                            <span className=" text-xs font-medium tracking-tight">
                                Add People
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                }

            </Dropdown>
        </div>
    );
};

export default ImportPeople;