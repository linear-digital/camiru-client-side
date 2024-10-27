import { useQuery } from '@tanstack/react-query';
import { Button, Spin } from 'antd';
import { Table } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import api, { fetcher } from '../../../Components/helper/axios.instance';
import moment from 'moment';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Popconfirm } from 'antd';
import calculateAge from '../../../util/ageCalculator';

const StudentList = ({ id, refetch: refetchList }) => {

    const { currentUser } = useSelector(state => state.user)
    const { classrooms } = useSelector(state => state.classroom)

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['students-import', id],
        queryFn: async () => {
            
            const res = await fetcher({
                url: `/student/center/${currentUser?._id}?ignore=${id}`,
                method: 'GET',
            })
            return res
        }
    })
    const [loading, setLoading] = useState(false)
    const transperStudent = async (selectedId) => {
        try {
            setLoading(true)
           
            const res = await fetcher({
                url: `/student/center/transper`,
                method: 'PATCH',
                data: {
                    id: selectedId,
                    class: id || classrooms[0]?._id
                }
            })
            toast.success("Student transfered successfully")
            refetch()
            refetchList()
            setLoading(false)
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || 'Something went wrong')
            setLoading(false)
        }
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => {
                return <>{record?.firstName} {record?.lastName}</>
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Date of Birth',
            dataIndex: 'birthDate',
            render: (text, record) => {
                return calculateAge(record?.birthDate)
                // return moment(record?.birthDate).format('DD-MM-YYYY')
            }
        },
        {
            title: 'Class Name',
            dataIndex: 'classRoom',
            render: (text, record) => {
                return record?.classRoom.name
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text, record) => {
                return <Popconfirm title="Are you sure you want to import this student?"
                    onConfirm={() => transperStudent(record?._id)}
                >
                    <Button size='middle' type='primary' className='text-xs'

                    >Import</Button>
                </Popconfirm>
            }
        },
    ];
    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div className='mt-10'>
            <Table rowKey={data => {
                return data._id
            }} columns={columns} dataSource={data} />
        </div>
    );
};

export default StudentList;