import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Steps = () => {
    const location = useLocation();
    const paths = [
        {
            path: "/dashboard/support",
            name: "General"
        },
        {
            path: "/dashboard/support/services",
            name: "Services"
        },
        {
            path: "/dashboard/support/payments",
            name: "Payments"
        },
        {
            path: "/dashboard/support/contact",
            name: "Contact"
        }
    ]
    return (
        <div className='flex gap-4 justify-center flex-wrap'>
            {
                paths.map((path, index) => {
                    return (
                        <Link to={path.path} key={index}>
                            <Button className={`capitalize px-5 ${location.pathname === path.path ? "text-white bg-[#52A1A8]" : "text-black bg-white"} shadow-none`} size='sm'>
                                {path.name}
                            </Button>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Steps;