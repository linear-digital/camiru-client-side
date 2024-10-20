import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MUIDatePicker = ({ updater, defaultValue }) => {

    const [date, setDate] = useState({
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    });
    useEffect(() => {
        updater(new Date(date.year, date.month, date.day).toISOString())
    }, [date])

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <div className='flex gap-3 enroll3'>
                <DesktopDatePicker views={['day',]}
                    label='Day'

                    value={dayjs(defaultValue)}
                    onChange={(e) => {
                        setDate({
                            ...date,
                            day: e.$d.getDate(),
                        })
                    }}

                />
                <DesktopDatePicker
                    label='Month'
                    value={dayjs(defaultValue)}
                    views={['month',]}
                    onChange={(e) => {
                        setDate({
                            ...date,
                            month: e.$M,
                        })
                    }}
                />
                <DesktopDatePicker
                    label='Year'
                    value={dayjs(defaultValue)}
                    views={['year',]}
                    onChange={(e) => {
                        setDate({
                            ...date,
                            year: e.$y,
                        })
                    }}
                />
            </div>
        </LocalizationProvider>
    );
};

export default MUIDatePicker;