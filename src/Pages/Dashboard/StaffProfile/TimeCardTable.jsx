import { Table } from 'antd';
import moment from 'moment';
import React from 'react';

const TimeCardTable = () => {
    const columns = [
        {
            key: '1',
            title: 'Day',
            dataIndex: 'date',

            render: (date, index) => {
                console.log(date);
                return moment(date).format('dddd')
            },
        },
        {
            key: '2',
            title: 'Date',
            dataIndex: 'date',
            render: (time) => moment(time).format('DD.MM.YYYY'),
        },
        {
            key: '3',
            title: 'Clock In',
            dataIndex: 'clockIn',
            render: (time) => moment(time).format('hh:mm A'),
        },
        {
            key: '4',
            title: 'Meal Break',
            dataIndex: 'mealBreak',
            render: (data) => <span>1 Hour</span>,
        },
        {
            key: '5',
            title: 'Over Time',
            dataIndex: 'overTime',
            render: (data) => '2 Hour',
        },
        {
            key: '6',
            title: 'Leave',
            dataIndex: 'overTime',
            render: (data) => '30 Minuites',
        },
        {
            key: '7',
            title: 'Total Hpurs',
            dataIndex: '',
            render: (data) => '5 Hours',
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
        <div>
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                rowClassName={'hover:bg-staff-bg px-5'}
                columns={columns}
                dataSource={[{}, {}, {}, {}, {}, {}, {}]}
                pagination={{
                    className: 'text-primary2',
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                }}
                footer={() => <div className="grid grid-cols-7">
                    <div className="text-[#187a82] text-sm font-semibold leading-normal text-center">Weekly  Total</div>
                    <div className='col-span-2 text-[#187a82] text-sm font-semibold '>
                        01.07.2024-06.07.2024
                    </div>
                    <div className="text-[#187a82] text-sm font-semibold  leading-normal col-span-1 text-start">
                        ** Hours
                    </div>
                    <div className="text-[#187a82] text-sm font-semibold  leading-normal col-span-1 text-start">
                        ** Hours
                    </div>

                    <div className="text-[#187a82] col-span-1 text-sm font-semibold  leading-normal text-start">
                        ** Hours
                    </div>
                    <div className="text-[#187a82] text-sm font-semibold  leading-normal">* Minutes</div>
                </div>
                }
            />
        </div>
    );
};

export default TimeCardTable;