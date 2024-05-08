import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavSearchbar = ({ state, setState }) => {
    return (
        <div className="w-80 h-12 bg-white rounded-2xl overflow-hidden flex items-center ml-5 shadow-md shadow-gray-100" >
            <FontAwesomeIcon icon={faSearch} className='ml-4 text-[#999999] text-base'/>
            <input
                className='w-full h-full text-sm  rounded-md outline-none pl-4'
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder='Search anything here'
            /> 
        </div>
    );
};

export default NavSearchbar;