// ChartComponent.js
import React from 'react';
import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const ChartComponent = () => {
    const [data, setData] = React.useState([
        { day: 55, name: '', value: 6, max: 10 },
        { day: 55, name: '', value: 6, max: 10 },
        { day: 55, name: '', value: 6, max: 10 },
        { day: 55, name: '', value: 6, max: 10 },
        { day: 55, name: '', value: 6, max: 10 },
        { day: 55, name: '', value: 6, max: 10 },
        { day: 6, name: 'Sat', value: 5, max: 10 },
        { day: 0, name: 'Sun', value: 6, max: 10 },
        { day: 1, name: 'Mon', value: 10, max: 10 },
        { day: 2, name: 'Tue', value: 8, max: 10 },
        { day: 3, name: 'Wed', value: 4, max: 10 },
        { day: 4, name: 'Thu', value: 5, max: 10 },
        { day: 5, name: 'Fri', value: 7, max: 10 },
        { day: 55, name: '', value: 6, max: 10 },
        { day: 55, name: '', value: 6, max: 10 },
        { day: 55, name: '', value: 6, max: 10 },
        { day: 55, name: '', value: 6, max: 10 },
        { day: 55, name: '', value: 6, max: 10 },
        { day: 55, name: '', value: 6, max: 10 },
    ])
    const date = new Date();

    const today = date.getDay();
    useEffect(() => {
        // setData(data.map((d) => {
        //     if (d.day === today) {
        //         d.value = d.max
        //     }
        //     return d
        // }))
    }, [])
    return (
        <ResponsiveContainer width="100%" height={150} className={'mt-5'}>
            <BarChart data={data} barCategoryGap={28}>

                <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                <XAxis dataKey="name" tick={{ fill: '#888', fontSize: 12 }} tickLine={false} axisLine={false} />
                <YAxis hide />
                {/* <Tooltip cursor={{ fill: 'transparent' }} /> */}

                <Bar
                    background={{ fill: '#F2F6FC' }}
                    dataKey="value"
                    shape={({ x, y, width, day, height, fill }) => {
                        let barFill = fill;
                        if (day === today) {
                            barFill = '#15ACDE';
                        }
                        else if (day === 55) {
                            barFill = '#868B9526';
                        }
                        else {
                            barFill = '#5CD9CA40';
                        }
                        // if (height === Math.max(...data.map((d) => d.value))) {
                        //     barFill = '#3288bd';
                        // } else if (height % 2 === 0) {
                        //     barFill = '#66c2a5';
                        // } else {
                        //     barFill = fill
                        // }
                        return <rect x={x} y={y} width={10} height={height} fill={barFill} rx={2} ry={5} />;
                    }}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartComponent;
