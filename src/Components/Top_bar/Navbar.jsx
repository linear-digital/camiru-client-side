import React from 'react';
import NavSearchbar from './NavSearchbar';
import Icons_panel from './Icons_panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SideDrawer } from './Drawer';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const [text, setText] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const { currentUser } = useSelector((state) => state.user)
    return (
        <nav className='py-5 lg:pr-10 pr-5 pl-5 lg:pl-0 flex items-center inter justify-between w-full' >
            <SideDrawer open={open} setOpen={setOpen} />
            <div className='lg:flex items-center gap-5 hidden'>
                <div className="lg:w-[50px] min-w-[30px] lg:h-[50px] min-h-[30px] bg-accent rounded-full " />
                <div>
                    <h1 className=' lg:text-xl text-sm'>
                        <span className="text-black font-normal ">Welcome,</span><span className="text-black font-bold "> {currentUser?.name}</span>
                    </h1>
                    <div className="text-neutral-400 mt-2 lg:text-sm text-[10px] font-normal ">
                        Hi Alvin, don't forget to check your property today
                    </div>
                </div>
                <NavSearchbar state={text} setState={setText} />
            </div>
            <button className='lg:hidden text-[25px]'
                onClick={() => setOpen(true)}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            <Icons_panel />
        </nav>
    );
};

export default Navbar;