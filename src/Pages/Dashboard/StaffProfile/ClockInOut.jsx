import { Table } from 'antd';
import moment from 'moment';
import React from 'react';
import { Printer } from './Navigation.icon';

const ClockInOut = () => {
    const columns = [
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt) => moment(createdAt).format('dddd DD/MM/YYYY hh:mm A'),
        },
        {
            title: 'In Time - Out Time',
            dataIndex: 'time',
            key: 'time',
            render: (time) => `${moment(new Date(new Date().setHours(new Date().getHours() - 3, 0, 0, 0))).format('hh:mm A')} - ${moment(time).format('hh:mm A')}`
        },
        {
            title: 'Total Time',
            dataIndex: 'total',
            key: 'total',
            render: (total) => `3 hours `
        },
        {
            title: 'Impotent Note',
            dataIndex: 'note',
            key: 'note',
            render: (note) => <span className='text-sm font-medium'>Note : <span className='text-gray-600'>
                Lorem ipsum dolor sit amet.</span></span>
        },
        {
            title: <span>Total Time For {moment().format('MMM')} : <span className='text-primary2'>
                72h 46m</span> </span>,
            dataIndex: 'total',
            render: (total) => <div className="flex justify-center">
                <button className='bg-[#ffbb3b]/20 px-5 py-4 rounded-lg'>
                    <Printer />
                </button>
            </div>
        }
    ]
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    return (
        <div className='w-full bg-[#FFF8F9CC]'>
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                className='border border-staff-pc rounded-lg'

                rowClassName={'hover:bg-staff-bg '}
                columns={columns} dataSource={[{}, {}, {}, {}, {}, {}]}
                pagination={{
                    className: 'text-primary2',
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                }}
            />
        </div>
    );
};

export default ClockInOut;