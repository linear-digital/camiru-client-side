import React from 'react';
import { PaperClip, Send } from '../../../util/icons';

const ChatBottom = () => {
    return (
        <div className='lg:pt-5 pt-2 border-t lg:px-5 p-1'>
            <div className="w-full h-14 bg-[#F1F6FA] rounded-xl border border-slate-200 flex items-center justify-between pr-5" >
                <input type="text"
                    className='w-full h-full bg-transparent border-none outline-none text-sm pl-5'
                    placeholder='Write your message...'
                />
                <div className="flex items-center gap-3">
                    <button>
                        <PaperClip />
                    </button>
                    <button className='w-20 h-10 bg-[#F8D124] text-white text-xs rounded-2xl flex items-center gap-1 justify-center'>
                        Send <Send />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBottom;