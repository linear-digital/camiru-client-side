import React from 'react';
import Voice from './Voice';

const MessageCard = ({ position, text, type, isLast }) => {
    return (
        <div className={`w-full flex flex-col justify-center  ${position === "left" ? "items-start" : "items-end"}`} >
            {
                type !== "voice" ?
                    <div className={`min-w-24 max-w-[300px] messageCard flex items-center justify-center py-3 ${(isLast && position === "left") ? "rounded-tl-xl rounded-tr-xl rounded-br-xl " : (isLast && position === "right")? "rounded-tl-xl rounded-tr-xl rounded-bl-xl" : "rounded-xl"} px-4`}   >
                        <p className={`${position === "left" ? "text-gray-800" : "text-[#187A82]"} text-xs font-normal`}>{text}</p>
                    </div>
                    :
                    <Voice />
            }
            {
                isLast && <div className="text-[#187A82] text-xs font-normal mt-2 px-4">12:45 PM</div>
            }

        </div>
    );
};

export default MessageCard;