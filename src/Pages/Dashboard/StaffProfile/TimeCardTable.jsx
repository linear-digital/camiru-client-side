import { Typography } from 'antd';
import { Table } from 'antd';
import moment from 'moment';
import React from 'react';

const TimeCardTable = () => {
    const columns = [
        {
            key: '1',
            title: 'Day',
            dataIndex: 'day',
            render: (date, index) => {
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
        <div className='custom-left-padding'>
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                rowClassName={'hover:bg-staff-bg pl-6'} // Increase left padding here
                columns={columns}
                
                dataSource={[{key: '1'}, { key: '2'}, {}, {}, {}, {}, {}]}
                pagination={{
                    className: 'text-primary2',
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                }}
                summary={(pageData) => {
                    return (
                        <>
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}></Table.Summary.Cell>
                                <Table.Summary.Cell index={1}>
                                    <div className="text-[#187a82] text-sm font-semibold leading-normal text-start">
                                        Weekly Total
                                    </div>
                                </Table.Summary.Cell>

                                <Table.Summary.Cell index={2} colSpan={2}>
                                    <div className="text-[#187a82] text-sm font-semibold text-center">
                                        01.07.2024 - 06.07.2024
                                    </div>
                                </Table.Summary.Cell>

                                <Table.Summary.Cell index={3}>
                                    <div className="text-[#187a82] text-sm font-semibold">
                                        ** Hours
                                    </div>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={4}>
                                    <div className="text-[#187a82] text-sm font-semibold">
                                        ** Hours
                                    </div>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={5}>
                                    <div className="text-[#187a82] text-sm font-semibold">
                                        ** Hours
                                    </div>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={6}>
                                    <div className="text-[#187a82] text-sm font-semibold">
                                        ** Hours
                                    </div>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                        </>
                    );
                }}
            />
        </div>
    );
};

export default TimeCardTable;