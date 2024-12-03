import { Avatar, Button } from "antd";
import { Modal } from "antd";
import React from "react";
import {
  fetcher,
  imageUrl,
} from "../../../../Components/helper/axios.instance";
import nameDisplay from "../../../../util/nameDisplay";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { useRootContext } from "../../RootContext";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Spin } from "antd";
import VideoCall from "./VideoCall";

const CallUi = ({ showCall, setShowCall, user, chat }) => {
  const { socket, incomming, accepted } = useRootContext();
  const { user: currentUser } = useRootContext();
  const room = chat?._id;
  const name = nameDisplay(currentUser);
  const [token, setToken] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const resp = await fetcher({
          url: `/message/call/token?room=${room}&username=${name}`,
          method: "GET",
        });
        setToken(resp.token);
        if (!incomming) {
          callUser(resp.token);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [socket]);
  const callUser = (token) => {
    socket.emit("offer", {
      room,
      token,
      target: user._id,
      profilePic: user?.profilePic,
    });
  };
  const acceptCall = () => {
    socket.emit("accept", { room, target: user._id });
  };
  return (
    <div className="call-ui">
      <Modal
        open={showCall}
        onCancel={() => setShowCall(false)}
        footer={
          <div className="flex justify-center w-full">
            <button
              //   onClick={stopMediaStream}
              className="text-white bg-red-600 w-10 h-10 rounded-full"
            >
              <CallEndIcon fontSize="medium" />
            </button>
          </div>
        }
        centered
        width={1000}
      >
        {!token ? (
          <div className="w-full h-[500px]   mt-5 flex justify-center items-center relative">
            <Spin size="large" />
          </div>
        ) : incomming ? (
          <div className="w-full h-[500px]   mt-5 flex justify-center items-center relative">
            <div className="flex flex-col items-center">
              <Avatar
                size={100}
                src={imageUrl(user?.profilePic)}
                className="border"
              >
                {incomming.sub?.slice(0, 1)}
              </Avatar>
              <h2 className="text-xl font-semibold mt-2">{incomming.sub}</h2>
              <p className="text-gray-600 mt-1">Incomming Call</p>
            </div>
          </div>
        ) : (
          // <VideoCall token={token}/>
          <div className="w-full h-[500px]   mt-5 flex justify-center items-center relative">
            <div className="flex flex-col items-center">
              <Avatar
                size={100}
                src={imageUrl(user?.profilePic)}
                className="border"
              >
                {user?.firstName?.slice(0, 1)}
              </Avatar>
              <h2 className="text-xl font-semibold mt-2">
                {nameDisplay(user)} {user._id}
              </h2>
              <p className="text-gray-600 mt-1">Calling...</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CallUi;
