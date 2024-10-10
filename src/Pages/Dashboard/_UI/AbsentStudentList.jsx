import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import AbsRow from './AbsRow';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'antd';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../../../Components/helper/axios.instance';
import Loader from '../../../Components/Loader';

const AbsentStudentList = () => {
    const { classrooms } = useSelector(state => state.classroom)
    const { currentUser } = useSelector(state => state.user)
    const [search, setSearch] = React.useState('')
    const { data, isLoading } = useQuery({
        queryKey: ['absent-student', classrooms[0]?._id, search],
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
        <Card className='p-5 w-full h-full max-h-[350px] border border-[#C7F1FF] bg-[#F8FCFF] shadow-none'>
            <section className="flex items-center justify-between">
                <h2 className=" text-zinc-800 text-xs font-semibold ">Absent Student List</h2>
                <div className="flex">
                    <Dropdown menu={{ items: classrooms.map(item => ({ key: item._id, label: <button onClick={() => setSearch(item?._id)}>{item.name}</button> })) }} trigger={['click']}>
                        <button className='flex items-center gap-2 btn-secondary bg-[#96C82C] rounded-3xl btn-xs py-2 px-4 text-[10px] text-white'>
                            <span>  {classrooms[0]?.name}</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </Dropdown>
                    <button className=' text-xs px-6 flex gap-3 items-center'>
                        See All
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </section>
            <section className='flex flex-col gap-3 mt-5 h-full overflow-y-auto'>
                {
                    data?.map((item, index) => (
                        <AbsRow key={index} item={item} />
                    ))
                }
            </section>
        </Card>
    );
};

export default AbsentStudentList;