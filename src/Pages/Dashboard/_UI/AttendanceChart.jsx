import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';




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

export default function AttendanceChart({ height, width, total, statistics }) {
    return (
        <PieChart series={[{
            data: [
                { value: statistics?.absent, color: "#FB6EB0", label: "Absent" },
                { value: statistics?.present, color: "#ffbb3b", label: "Present" },
                { value: statistics?.checkedOut, color: "#96c82c", label: "Checked Out" },
                { value: statistics?.checkedIn, color: "#15acde", label: "Checked In" },
                { value: statistics?.pending, color: "red", label: "Not Assigned" },
            ], innerRadius: '60%'
        }]}
            width={width} height={height}
        >
            <PieCenterLabel >
                {statistics?.total}
            </PieCenterLabel>
        </PieChart>
    );
}
