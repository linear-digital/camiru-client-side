import React from 'react';
import { Logo } from '../../Components/Logo/Logo';
import { links } from '../../util/links';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Bell, Classrooms, Home } from '../../util/icons';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className='min-w-[289px] max-w-[300px] h-full shadow-lg pt-10 flex flex-col justify-between'>
            <div>
                <Logo className={'max-w-[224px] mx-auto'} />
                <h3 className='text-gray-700 ml-8 mt-7'>MAIN MENU</h3>
                <ul className='mt-5 w-full'>
                    {
                        links.map((link) => {
                            return <NavigationCard link={link} key={link.id} active={location.pathname === link.path} />
                        })
                    }
                </ul>
            </div>
            <div className='w-full bg-accent h-16 flex items-center pl-4 justify-between'>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full" />
                    <div>
                        <div className=" h-4 text-white text-sm font-semibold">KeyOrent</div>
                        <div className=" h-3 mt-1 text-white text-xs font-normal ">Profile Setting</div>
                    </div>
                </div>
                <div className='px-5 border-l h-full flex items-center border-gray-300'>
                    <Bell />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

export const NavigationCard = ({ link, active }) => {
    return <li className='mb-1 w-full'>
        <Link to={link.path} className={`py-2 ${active && "bg-primary"} w-full flex items-center gap-6 relative h-[57px] rounded`}>
            {
                active &&
                <span className='float-left'>
                    <Icon />
                </span>
            }
            <div className={`flex w-full items-center gap-4 ${!active && "pl-7"}`}>
                {link.icon &&
                    <span>
                        <link.icon className={`text-lg ${!active ? "text-[#7F7F7F]" : "text-white"}`} />

                    </span>
                }
                <div className={` h-5 ${active && "text-white"} text-sm font-normal `}>{link.name}</div>
            </div>
            {
                !active && <span className='absolute right-7 text-blue-gray-600'>
                    <FontAwesomeIcon icon={faChevronRight} height={24} />
                </span>
            }
        </Link>
    </li>
}

const Icon = ({ }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="6" height="44" viewBox="0 0 6 44" fill="none">
        <path d="M0 0.416992C1.333 0.416992 2.61141 0.949235 3.55398 1.89663C4.49655 2.84403 5.02609 4.12898 5.02609 5.4688V38.3056C5.02609 39.6454 4.49655 40.9303 3.55398 41.8777C2.61141 42.8251 1.333 43.3574 0 43.3574H0V0.416992Z" fill="white" />
    </svg>
}