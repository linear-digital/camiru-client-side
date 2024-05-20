import { faSquareCheck } from '@fortawesome/free-regular-svg-icons/faSquareCheck';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ name, desc }) => {
    const [option, setOption] = useState("Infants");
    const [mode, setMode] = useState("view");
    const location = useLocation();
    const isIncluded = (path) => {
        return location.pathname.includes(path)
    }
    React.useEffect(() => {
        if (isIncluded("enrollment") || isIncluded("details")) {
            setMode("edit")
        }
        else if (isIncluded("health-log")) {
            setMode("filter")
        }
        else {
            setMode("view")
        }
    }, [location.pathname])
    return (
        <section className='flex justify-between items-center'>
            <div>
                <h1 className="text-primary text-2xl font-bold ">{name}</h1>
                <p className="w-72 text-neutral-400 mt-2 font-normal text-sm">
                    {desc}
                </p>
            </div>
            {
                mode === "edit" ?
                    <div className='flex gap-5 items-center'>
                        <button className='btn btn-sm bg-[#5CD9CA40] text-[#187A82] text-xs font-normal px-5'>
                            Mark As Graduate
                            <FontAwesomeIcon icon={faSquareCheck} />
                        </button>
                        <button className='btn btn-sm bg-[#FFBB3B33] text-[#A0A0A0] text-xs font-normal px-5'>
                            Advance Edit Page
                            <FontAwesomeIcon icon={faPen} className='text-[#FFBB3B]' />
                        </button>
                    </div>
                    :
                    null
            }
            {
                mode === "filter" &&
                <div></div>
            }
        </section>
    );
};

export default Header;