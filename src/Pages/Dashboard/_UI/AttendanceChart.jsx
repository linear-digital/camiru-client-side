import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
    { value: 10, color: "#fb6eb0" },
    { value: 15, color: "#ffbb3b" },
    { value: 15, color: "#96c82c" },
    { value: 20, color: "#15acde" },
];


const StyledText = styled('text')(({ theme }) => ({
    fill: "#EB4462",
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
    fontWeight: 'bold',
}));




function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

export default function AttendanceChart({ height, width }) {
    return (
        <PieChart series={[{ data, innerRadius: '60%' }]}
            width={width} height={height} >
            <PieCenterLabel>
                40
            </PieCenterLabel>
        </PieChart>
    );
}
