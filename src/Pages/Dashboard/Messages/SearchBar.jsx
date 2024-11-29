import React from 'react';
import { SearchHandle } from '../../../util/icons';

const SearchBar = ({ state, setState }) => {
    return (
        <div className="w-full h-10 pr-5 py-px bg-white rounded-xl border border-slate-200 justify-start items-center inline-flex mt-5 pl-3">
            <SearchHandle />
            <input type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className = 'w-full h-full bg-white border-none outline-none text-sm px-2'
                placeholder = 'Search here...'
                    />
        </div>
    );
};

export default SearchBar;