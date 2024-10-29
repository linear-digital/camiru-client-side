import React from 'react';
import { Logo } from '../../Components/Logo/Logo';
import { links } from '../../util/links';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Bell } from '../../util/icons';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import nameDisplay from '../../util/nameDisplay';
import { imageUrl } from '../../Components/helper/axios.instance';
import { Popover } from 'antd';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Avatar } from 'antd';
import { Menu } from 'antd';

const Sidebar = ({ setOpen }) => {
    const location = useLocation();
    const closeSidebar = () => {
        setOpen && setOpen(false);
    }
    const searchPa = useSearchParams()
    const search = searchPa[0]?.get('id')
    const [collapse, setCollapse] = React.useState(false);
    const { currentUser } = useSelector(state => state.user)
    const { classrooms } = useSelector(state => state.classroom)
    const { width } = useSelector(state => state.settings)
    const [paths, setPaths] = React.useState([]);
    useEffect(() => {
        if (classrooms) {
            setPaths(links.map(link => {
                if (link.id === 2 || link.id === 3) {
                    return {
                        ...link,
                        children: classrooms
                    }
                }
                return link
            }))
        }
    }, [classrooms])
    useEffect(() => {
        if (search) {
            document.title = classrooms.find(c => c._id === search)?.name?.toUpperCase() || 'Classroom'
        }
    }, [search])

    return (
        <div className={`${collapse ? 'max-w-[70px]' : 'min-w-[260px]'} w-full h-full shadow-lg pt-5 flex flex-col justify-between overflow-auto bg-white`}>
            <div>
                <Logo to={'/dashboard'} className={'max-w-[154px] mx-auto'} />
                <div className={`${collapse ? 'hidden' : 'flex'} items-center  mt-7 justify-between pr-3`}>
                    <h3 className='text-gray-700 text-sm ml-8'>MAIN MENU</h3>
                </div>
                <ul className='mt-3 w-full max-h-[70vh] overflow-y-auto'>
                    {
                        paths.map((link, index) => {
                            return <NavigationCard isCollapse={collapse} isIcon={link.isIcon} onClick={closeSidebar} link={link} key={index} active={location.pathname === link.path}
                                name={link.name}
                            />
                        })
                    }
                </ul>
            </div>
            <div className='w-full bg-accent h-16 flex items-center pl-4 justify-between'>
                <Link to={'/dashboard/profile'} className="flex items-center gap-4">
                    {/* <div className="w-10 h-10 bg-white rounded-full" /> */}
                    <Avatar src={imageUrl(currentUser?.profilePic)}
                        size={40}
                        className='border-1 border-white'
                    />
                    {
                        !collapse && <div>
                            <div className=" h-4 text-white text-sm font-semibold">{nameDisplay(currentUser)}</div>
                            <div className=" h-3 mt-1 text-white text-xs font-normal">Profile Setting</div>
                        </div>
                    }
                </Link>
                {
                    !collapse && <div className='px-5 border-l h-full flex items-center border-gray-300'>
                        <Bell />
                    </div>
                }
            </div>
        </div>
    );
};

export default Sidebar;

export const NavigationCard = ({ link, active, onClick, isCollapse, name }) => {
    const menu = [
        {
            key: link.path,
            label: <span className={`${active && "text-white"}`}>{link.name}</span>,
            icon: link.isIcon ?
                <FontAwesomeIcon icon={link.icon} className={`${!active ? "text-[#7F7F7F]" : "text-white"} text-[22px]`} />
                :
                <span className={`text-sm ${!active ? "text-[#7F7F7F]" : "text-white"}`}>
                    <link.icon />
                </span>
            ,
            children: link.children?.map(item => {
                return {
                    key: item._id,
                    label: <Link to={`${link.path}?id=${item._id}`}  >
                        {item.name}
                    </Link>,
                }
            }),
        }
    ]

    return <li className='mb-1 w-full'>
        {
            link?.children ?
                <Link onClick={onClick} to={`${link.path}?id=${link?.children[0]?._id}`} className={`py-2 ${active && "bg-primary"} w-full flex items-center text-sm gap-6 relative h-[55px] rounded `}>
                    {
                        active &&
                        <span className='float-left'>
                            <Icon />
                        </span>
                    }
                    <div className={`flex w-full items-center gap-4 ${!active && "pl-7"}`}>
                        {link.icon &&
                            <span>
                                {
                                    link.isIcon ?
                                        <FontAwesomeIcon icon={link.icon} className={`${!active ? "text-[#7F7F7F]" : "text-white"} text-[22px]`} />
                                        :
                                        <link.icon className={`text-sm ${!active ? "text-[#7F7F7F]" : "text-white"}`} />
                                }
                            </span>
                        }
                        {
                            !isCollapse && <p className={` ${active ? "text-white" : "text-black"} text-xs font-normal `}>{name}</p>
                        }
                    </div>
                    {
                        !active && <span className='absolute right-7 text-blue-gray-600'>
                            <FontAwesomeIcon icon={faChevronRight} height={24} />
                        </span>
                    }
                </Link>

                // <div onClick={onClick} className={`py-2 ${active ? "bg-primary active" : "pl-2"} w-full flex items-center  text-sm  relative  rounded `}>
                //     {
                //         active &&
                //         <span className='float-left'>
                //             <Icon />
                //         </span>
                //     }
                //     <div className={`flex w-full items-center`}>

                //         <Menu

                //             className={`${!active ? "text-current" : "text-white"} text-xs font-normal bg-transparent w-full`}
                //             mode="vertical"
                //             triggerSubMenuAction='click'
                //             items={menu}
                //         />
                //     </div>
                // </div>
                :
                <Link onClick={onClick} to={link.path} className={`py-2 ${active && "bg-primary"} w-full flex items-center text-sm gap-6 relative h-[55px] rounded `}>
                    {
                        active &&
                        <span className='float-left'>
                            <Icon />
                        </span>
                    }
                    <div className={`flex w-full items-center gap-4 ${!active && "pl-7"}`}>
                        {link.icon &&
                            <span>
                                {
                                    link.isIcon ?
                                        <FontAwesomeIcon icon={link.icon} className={`${!active ? "text-[#7F7F7F]" : "text-white"} text-[22px]`} />
                                        :
                                        <link.icon className={`text-sm ${!active ? "text-[#7F7F7F]" : "text-white"}`} />
                                }
                            </span>
                        }
                        {
                            !isCollapse && <p className={` ${active ? "text-white" : "text-black"} text-xs font-normal `}>{name}</p>
                        }
                    </div>
                    {
                        !active && <span className='absolute right-7 text-blue-gray-600'>
                            <FontAwesomeIcon icon={faChevronRight} height={24} />
                        </span>
                    }
                </Link>
        }
    </li>
}

const Icon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="6" height="44" viewBox="0 0 6 44" fill="none">
        <path d="M0 0.416992C1.333 0.416992 2.61141 0.949235 3.55398 1.89663C4.49655 2.84403 5.02609 4.12898 5.02609 5.4688V38.3056C5.02609 39.6454 4.49655 40.9303 3.55398 41.8777C2.61141 42.8251 1.333 43.3574 0 43.3574H0V0.416992Z" fill="white" />
    </svg>
}