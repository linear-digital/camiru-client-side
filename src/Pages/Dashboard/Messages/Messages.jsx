import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ChatBox from "./ChatBox";
import ChatBottom from "./ChatBottom";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../Components/helper/axios.instance";
import { Spin } from "antd";
import { useRootContext } from "../RootContext";

const Messages = () => {
  const searchParams = useSearchParams();
  const search = searchParams[0]?.get("chat");
  const [open, setOpen] = React.useState(false);
  const { connection } = useRootContext();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["chat", search, connection],
    queryFn: async () => {
      const res = await fetcher({
        url: `/message/chat/${search}`,
        method: "GET",
      });
      return res;
    },
    refetchOnMount: false,
    enabled: !!search,
  });
  return (
    <div className="lg:p-8 p-5 bg-white rounded-lg lg:h-[calc(100vh-100px)] h-[calc(100vh-80px)] flex">
      <Sidebar />
      {open && (
        <div className="sidebar absolute left-0 top-0 bg-[#F8FCFF] h-full flex lg:hidden z-50 flex-col justify-center">
          <div className="flex justify-end mt-4 mr-3">
            <button onClick={() => setOpen(!open)}>Close</button>
          </div>
          <Sidebar open={open} setOpen={setOpen} />
        </div>
      )}
      {!search ? (
        <div className="flex justify-center items-center w-full text-lg">
          Select a conversation
        </div>
      ) : isLoading ? (
        <div className="flex justify-center items-center w-full text-lg">
          <Spin size="large" />
        </div>
      ) : (
        <section className="h-full w-full flex flex-col justify-between">
          <Topbar user={data} setOpen={setOpen} />
          <ChatBox target={data} refetch={refetch} />
          <ChatBottom target={data} />
        </section>
      )}
    </div>
  );
};

export default Messages;
