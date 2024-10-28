// ChartComponent.js
import moment from 'moment/moment';
import React from 'react';
import { useEffect } from 'react';
import { Tooltip } from 'antd';


const ChartComponent = ({ type, selectedBar, setSelectedBar, month, year }) => {

    const date = new Date();
    const [sDate, setSDate] = React.useState(date);
    const [days, setDays] = React.useState([]);
    function getDaysOfMonth(year, month) {
        // Create a new date object for the first day of the month
        let selectedDate = new Date(year, month, 1);

        // Create an empty array to store the days
        let days = [];

        // Loop through the days of the month
        while (selectedDate.getMonth() === month) {
            // Push the day number to the array
            const checked_in = Math.floor(Math.random() * 120);
            const absent = 120 - checked_in
            const newDate = {
                day: selectedDate,
                active: date.getDate() === selectedDate.getDate(),
                checked_in,
                total: 120,
                absent,
                selected: false
            }
            if (date.getDate() === selectedDate.getDate()) {
                setSelectedBar(newDate)
            }

            if (type === "daily") {
                if (newDate.day === new Date()) {
                    newDate.selected = true
                }
            }
            else if (type === "weekly") {
                if (moment(newDate.day).isoWeek() === moment().isoWeek()) {
                    newDate.selected = true
                }
            }
            else if (type === "monthly") {
                newDate.selected = true
                // Move to the next day
            }
            days.push(newDate);
            setDays(days);
            selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + 1);
        }

        return days;
    }
    useEffect(() => {
        if (selectedBar) {
            const filterDays = days.map(day => {
                return {
                    ...day,
                    active: selectedBar?.day === day.day,
                    selected: type === "daily" ? selectedBar?.day === day.day : day?.selected
                }
            })
            setDays(filterDays)
        }
    }, [selectedBar])
    useEffect(() => {
        if (type === "monthly") {
            getDaysOfMonth(year, month)
        }
        else {
            getDaysOfMonth(date.getFullYear(), date.getMonth())
        }
    }, [type, month, year])
    return (

        <section className='lg:h-[110px] h-[100px] flex gap-1 justify-between mt-5'>
            {
                days.map((day, index) => (
                    <Tooltip trigger="hover" placement="top" title={`Checked-in: ${day.checked_in} | Absent: ${day.absent}`} key={index}>
                        <div onClick={() => setSelectedBar(day)} className='flex flex-col gap-1 items-center cursor-pointer justify-start'>
                            <div className='lg:h-[90px] h-[70px] lg:w-[10px] w-[7px] bg-[#ecf1f8e4] rounded-lg relative overflow-hidden'>
                                <div className={`absolute ${day.selected ? `${!day.active ? "bg-[#15acde67]" : "bg-[#15ACDE]"} ` : ''}  bottom-0`}
                                    style={{
                                        height: `${(day.checked_in / day.total) * 100}%`,
                                        width: '100%'
                                    }}
                                />
                                <div className={`absolute  ${day.selected ? `${!day.active ? 'bg-[#fb6eb067]' : 'bg-[#FB6EB0]'}` : ''} top-0`}
                                    style={{
                                        height: `${(day.absent / day.total) * 100}%`,
                                        width: '100%'
                                    }}
                                />
                            </div>
                            {
                                (type === "monthly" || type === "daily") ?
                                     <div className='flex justify-between items-center'>
                                        <p className='text-gray-600 lg:text-xs text-[8px]'>{moment(day.day).format('D')}</p>
                                    </div>
                                    :
                                    day.selected && <div className='flex justify-between items-center'>
                                        <p className='text-gray-600 lg:text-xs text-[8px]'>{moment(day.day).format('ddd')}</p>
                                    </div>
                            }

                        </div>
                    </Tooltip>

                ))
            }
        </section>
    );
};

export default ChartComponent;
