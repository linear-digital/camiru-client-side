import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AttendanceNavigation = ({ state, setState }) => {
    const links = [
        {
            id: 1,
            title: "Daily",
            path: "daily"
        },
        {
            id: 2,
            title: "Weekly",
            path: "weekly"
        },
        {
            id: 3,
            title: "Monthly",
            path: "monthly"
        }
    ]
    return (
        <div className='flex gap-1'>
            {
                links.map((link) => {
                    return <AttCard key={link.id} title={link.title} path={link.path} active={state === link.path} onChange={(e) => setState(e)}/>
                })
            }
            <button className='ml-5'>
                <FontAwesomeIcon icon={faEllipsis}/>
            </button>
        </div>
    );
};

export default AttendanceNavigation;

const AttCard = ({ title, path, active, onChange }) => {
    return <button onClick={() => onChange(path)}
        className={`w-[75px] text-center py-2 text-xs border-b-[3px] ${active ? "border-primary" : "border-gray-200"}`}
    >
        {title}
    </button>
}