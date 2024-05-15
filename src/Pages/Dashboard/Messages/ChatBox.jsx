import React from 'react';
import MessageCard from './MessageCard';

const ChatBox = () => {
    return (
        <div className='p-5 w-full flex flex-col gap-[10px] overflow-y-auto h-full'>
            <MessageCard position={"left"}
                text={"Hello Jhon!"}
            />
            <MessageCard position={"left"}
                text={"Can you arrange schedule for next meeting?"}

            />
            <MessageCard position={"left"}
                type={"voice"}
                isLast={true}
            />

            <MessageCard position={"right"}
                text={"Hello Jordan!"}
            />
            <MessageCard position={"right"}
                text={`Okay, I’ll arrange it soon. i noftify you 
                when it’s done.`}
                isLast={true}
            />
            <MessageCard position={"left"}
                text={"Hello Jhon!"}
            />
            <MessageCard position={"left"}
                text={"Can you arrange schedule for next meeting?"}

            />
            <MessageCard position={"left"}
                type={"voice"}
                isLast={true}
            />

            <MessageCard position={"right"}
                text={"Hello Jordan!"}
            />
            <MessageCard position={"right"}
                text={`Okay, I’ll arrange it soon. i noftify you 
                when it’s done.`}
            />
              <MessageCard position={"right"}
                type={"voice"}
                isLast={true}
            />

        </div>
    );
};

export default ChatBox;