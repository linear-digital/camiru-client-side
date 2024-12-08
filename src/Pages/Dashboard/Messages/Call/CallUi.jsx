import { Avatar } from "antd";
import { Modal } from "antd";
import React from "react";
import {
  fetcher,
  imageUrl,
} from "../../../../Components/helper/axios.instance";
import nameDisplay from "../../../../util/nameDisplay";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { useRootContext } from "../../RootContext";
import { useState } from "react";
import { useEffect } from "react";
import CallIcon from "@mui/icons-material/Call";
import { Spin } from "antd";
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import VideoCall from "./VideoCall";
const CallUi = ({ user, chat }) => {
  const {
    user: currentUser,
    setIncomming,
    setShowCall,
    showCall,
    socket,
    incomming,
    accepted,
    onGoing,
    endCall,
    acceptcall,
    setCallBetween
  } = useRootContext();

  const room = incomming?.room || chat?._id;
  const name = nameDisplay(currentUser);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (socket) {
      socket.on("end", (data) => {
        setShowCall(false);
        setIncomming(null);
      });
    }
  }, [socket]);
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
  }, [socket, ]);
  const callUser = (token) => {
    socket.emit("offer", {
      room,
      token,
      target: user._id,
      profilePic: user?.profilePic,
      caller: currentUser._id,
    });
    setCallBetween([user._id, currentUser._id]);
    
  };
  return (
    <div className="call-ui">
      <Modal
        open={showCall}
        onCancel={() => {
          endCall();
        }}
        footer={
          accepted ? null : 
          <div className="flex justify-center w-full gap-x-4">
            {incomming ? (
              <>
                <button
                  onClick={acceptcall}
                  className="text-white bg-green-600 w-10 h-10 rounded-full cursor-pointer"
                >
                  <CallIcon fontSize="medium" />
                </button>
                <button
                  onClick={endCall}
                  className="text-white bg-red-600 w-10 h-10 rounded-full cursor-pointer"
                >
                  <PhoneDisabledIcon fontSize="medium" />
                </button>
              </>
            ) : (
              <button
                onClick={endCall}
                className="text-white bg-red-600 w-10 h-10 rounded-full cursor-pointer"
              >
                <CallEndIcon fontSize="medium" />
              </button>
            )}
          </div>
        }
        centered
        width={1000}
      >
        {!token ? (
          <div className="w-full h-[500px]   mt-5 flex justify-center items-center relative">
            <Spin size="large" />
          </div>
        ) : 
        accepted ? (
           <VideoCall token={token}/>
        )
        :
        incomming ? (
          <div className="w-full h-[500px]   mt-5 flex justify-center items-center relative">
            <div className="flex flex-col items-center">
              <Avatar
                size={100}
                src={imageUrl(user?.profilePic)}
                className="border"
              >
                {incomming.name?.slice(0, 1)}
              </Avatar>
              <h2 className="text-xl font-semibold mt-2">{incomming.name}</h2>
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
                {nameDisplay(user)}
              </h2>
              <p className="text-gray-600 mt-1">
                {onGoing ? "Loading" : "Calling..."}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CallUi;
