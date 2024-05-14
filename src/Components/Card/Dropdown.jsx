import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "antd";
import { useState } from "react";

export const ClassRoomSelector = ({ options, bg, color, border }) => {
    const [option, setOption] = useState(options[0]);

    return <Dropdown
        
        className='option-classroom'
        menu={{
            items: [
                ...options?.map((item, index) => {
                    return {
                        label: <button
                            className={`${option === item ? "text-primary" : ""} w-full   text-start`}
                            onClick={() => setOption(item)}
                        >
                            {item}
                        </button>,
                        key: index,
                    }
                })
            ],
        }}
        trigger={['click']}
        
    >
        <button className={`h-9 pl-[19px] pr-[18px] py-[12.59px] bg-[${bg}] border border-[${border ? border : "#FFBB3B"}] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-xs font-bold`}>
            <span className=" text-xs font-medium tracking-tight">
                {option}
            </span>
            <FontAwesomeIcon icon={faChevronDown} className={` text-[${color}]`} />
        </button>
    </Dropdown>
}