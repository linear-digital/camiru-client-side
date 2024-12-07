import React from "react";
import MessageCard from "./MessageCard";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../Components/helper/axios.instance";
import { useRootContext } from "../RootContext";
import { useEffect } from "react";
import { set } from "react-hook-form";

const ChatBox = ({ target }) => {
  const { message, user, socket, onseen } = useRootContext();
  const scrollBottmRef = React.useRef(null);
  const handleScroll = () => {
    if (scrollBottmRef.current) {
      scrollBottmRef.current.scrollTop = scrollBottmRef.current.scrollHeight;
    }
  };

  const [allMessages, setOldMessages] = React.useState([]);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["messages", target, onseen],
    queryFn: async () => {
      const res = await fetcher({
        url: `/message?chat=${target?._id}`,
        method: "GET",
      });
      setOldMessages(res);
      seenMessage();
      return res;
    },
  });
  const seenMessage = () => {
    socket.emit("seen", {
      sender: target?.user?.id._id,
      receiver: target?.owner?.id._id,
    });
  };
  useEffect(() => {
    if (message) {
        if (message.sender === target?.user?.id._id || message.receiver === target?.user?.id._id) {
            setOldMessages([...allMessages, message]);
        }
      
      seenMessage();
    }
    handleScroll();
  }, [message]);

  useEffect(() => {
      if (onseen) {
        // make all message seen 
        const message = allMessages?.map(item => {
            if (!item.seen) {
                return { ...item, seen: true }
            }
            return item
        })
        setOldMessages(message)
        handleScroll();
      }
      console.log(onseen);
  },[onseen])
  const getTimeDifferenceInMinutes = (date1, date2) => {
    const created = new Date(date1);
    const updated = new Date(date2);
    const differenceInMinutes = (updated - created) / (1000 * 60); // Milliseconds to minutes
    return differenceInMinutes > 2 ? true : false;
  };
  return (
    <div
      ref={scrollBottmRef}
      className="px-5 w-full flex flex-col gap-[10px] overflow-y-auto h-full pt-5 pb-20"
    >
      {allMessages?.map((item, index) => (
        <MessageCard
          key={index}
          refetch={refetch}
          message={item}
          position={user?._id === item?.sender ? "right" : "left"}
          text={item?.message}
          isLast={
            index === allMessages?.length - 1
              ? true
              : getTimeDifferenceInMinutes(
                  item?.createdAt,
                  allMessages[index + 1]?.createdAt
                )
          }
          type={item?.image.length ? "image" : "text"}
          date={item?.createdAt}
        />
      ))}
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
