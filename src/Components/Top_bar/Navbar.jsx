import React from 'react';
import NavSearchbar from './NavSearchbar';
import Icons_panel from './Icons_panel';

const Navbar = () => {
    const [text, setText] = React.useState('');
    return (
        <nav className='py-7 pr-10 flex items-center inter justify-between w-full' >
            <div className='flex items-center gap-5'>
                <div className="w-[50px] h-[50px] bg-accent rounded-full" />
                <div>
                    <h1>
                        <span className="text-black text-xl font-normal ">Welcome,</span><span className="text-black text-xl font-bold "> Camiru</span>
                    </h1>
                    <div className="text-neutral-400 mt-2 text-sm font-normal ">
                        Hi Alvin, don't forget to check your property today
                    </div>
                </div>
                <NavSearchbar state={text} setState={setText} />
            </div>
            <Icons_panel />
        </nav>
    );
};

export default Navbar;