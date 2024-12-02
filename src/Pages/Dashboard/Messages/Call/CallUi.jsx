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
  const room = "quickstart-room";
  const name = nameDisplay(user);
  const [token, setToken] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const resp = await fetcher({
          url: `/message/call/token?room=${room}&username=${name}`,
          method: "GET",
        });
        setToken(resp.token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

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
        ) : (
          <VideoCall token={token}/>
          // <div className="w-full h-[500px]   mt-5 flex justify-center items-center relative">
          //   <div className="flex flex-col items-center">
          //     <Avatar size={100} src={imageUrl(user?.profilePic)} />
          //     <h2 className="text-xl font-semibold mt-2">
          //       {nameDisplay(user)}
          //     </h2>
          //     <p className="text-gray-600 mt-1">Calling...</p>
          //   </div>
          //   <video
          //     // ref={myVideoRef}
          //     autoPlay
          //     playsInline
          //     muted
          //     style={{ width: "300px" }}
          //     className="absolute bottom-0 right-0 border border-gray-300 rounded-md"
          //   />
          // </div>
        )}
      </Modal>
    </div>
  );
};

export default CallUi;
