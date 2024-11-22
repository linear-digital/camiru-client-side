import React from 'react';
import MessageCard from './MessageCard';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../../../Components/helper/axios.instance';
import { useRootContext } from '../RootContext';
import { useEffect } from 'react';
import { set } from 'react-hook-form';

const ChatBox = ({ target }) => {
    const { message, user } = useRootContext()
    const [oldMessages, setOldMessages] = React.useState([])
    const { data, isLoading } = useQuery({
        queryKey: ['messages', target],
        queryFn: async () => {
            const res = await fetcher({
                url: `/message?chat=${target?._id}`,
                method: 'GET',
            })
            setOldMessages(res)
            return res
        },

    })
    useEffect(() => {
        if (message) {
            setOldMessages([...oldMessages, message])
        }
    }, [message])
    return (
        <div className='p-5 w-full flex flex-col gap-[10px] overflow-y-auto h-full'>
            {
                oldMessages?.map((item, index) => <MessageCard
                    key={index}
                    position={user?._id === item?.sender ? "right" : "left"}
                    text={item?.message}
                />)
            }
            {/* <MessageCard position={"left"}
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
            /> */}

        </div>
    );
};

export default ChatBox;