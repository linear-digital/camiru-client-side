import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavSearchbar = ({ state, setState, variant, placeholder }) => {

    return (
        <div className={`lg:w-[338px] w-full h-12 bg-white rounded-2xl overflow-hidden flex items-center lg:ml-5 shadow-md shadow-gray-100 ${variant === 'borderd' ? 'border border-amber-400' : ''}`} >
            <FontAwesomeIcon icon={faSearch} className='ml-4 text-[#999999] text-base' />
            <input
                className='w-full h-full text-sm bg-transparent rounded-md outline-none pl-4'
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder={placeholder ? placeholder : 'Search anything here'}
            />
        </div>
    );
};

export default NavSearchbar;