import { Avatar, Button } from "antd";
import { Modal } from "antd";
import React from "react";
import { fetcher, imageUrl } from "../../../../Components/helper/axios.instance";
import nameDisplay from "../../../../util/nameDisplay";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { useRootContext } from "../../RootContext";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
} from "@livekit/components-react";
import "@livekit/components-styles";
import { Track } from 'livekit-client';

const CallUi = ({ showCall, setShowCall, user, chat }) => {
    const room = 'quickstart-room';
    const name = nameDisplay(user);
    const [token, setToken] = useState('');
    useEffect(() => {
        (async () => {
          try {
            const resp = await fetcher({
                url: `/message/call/token?room=${room}&username=${name}`,
                method: 'GET',
            })
            console.log(resp);
          } catch (e) {
            console.error(e);
          }
        })();
      }, []);
    
      
  //   const myVideoRef = useRef(null);
  //   const remoteVideoRef = useRef(null);
  //   const peerConnection = useRef(null);
  //   const { socket, connected } = useRootContext();

  //   useEffect(() => {
  //     // Connect to the signaling server

  //     socket.on("offer", async (data) => {
  //       await handleOffer(data);
  //     });

  //     socket.on("answer", async (data) => {
  //       await handleAnswer(data);
  //     });

  //     socket.on("candidate", async (data) => {
  //       await handleCandidate(data);
  //     });

  //     return () => {
  //       socket.disconnect();
  //     };
  //   }, [socket]);

  //   // Create a new RTCPeerConnection
  //   const createPeerConnection = () => {
  //     const config = {
  //       iceServers: [
  //         { urls: "stun:stun.l.google.com:19302" }, // STUN server
  //       ],
  //     };
  //     const pc = new RTCPeerConnection(config);

  //     // Handle local ICE candidates
  //     pc.onicecandidate = (event) => {
  //       if (event.candidate) {
  //         socket.current.emit("candidate", {
  //           target: user?._id,
  //           candidate: event.candidate,
  //         });
  //       }
  //     };

  //     // Handle remote stream
  //     pc.ontrack = (event) => {
  //       if (remoteVideoRef.current) {
  //         remoteVideoRef.current.srcObject = event.streams[0];
  //       }
  //     };

  //     return pc;
  //   };

  //   // Start the local stream
  //   const startStream = async () => {
  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia({
  //         video: true,
  //         audio: true,
  //       });
  //       if (myVideoRef.current) {
  //         myVideoRef.current.srcObject = stream;
  //       }
  //       return stream;
  //     } catch (error) {
  //       console.error("Error accessing media devices:", error);
  //     }
  //   };

  //   // Call a user
  //   const callUser = async () => {
  //     const stream = await startStream();
  //     peerConnection.current = createPeerConnection();
  //     stream.getTracks().forEach((track) => {
  //       peerConnection.current.addTrack(track, stream);
  //     });

  //     const offer = await peerConnection.current.createOffer();
  //     await peerConnection.current.setLocalDescription(offer);

  //     socket.current.emit("offer", {
  //       target: user?._id,
  //       offer,
  //     });
  //   };
  //   const stopMediaStream = async () => {
  //     const stream = await startStream();
  //     if (stream) {
  //       stream.getTracks().forEach((track) => {
  //         track.stop(); // Stop each track (audio/video)
  //       });
  //     }
  //   };
  //   useEffect(() => {
  //     if (socket && connected) {
  //       callUser();
  //     }
  //   }, [socket , connected]);

  //   // Handle an incoming offer
  //   const handleOffer = async (data) => {
  //     const stream = await startStream();
  //     peerConnection.current = createPeerConnection();
  //     stream.getTracks().forEach((track) => {
  //       peerConnection.current.addTrack(track, stream);
  //     });

  //     await peerConnection.current.setRemoteDescription(data.offer);
  //     const answer = await peerConnection.current.createAnswer();
  //     await peerConnection.current.setLocalDescription(answer);

  //     socket.current.emit("answer", {
  //       target: data.socketId,
  //       answer,
  //     });
  //   };

  //   // Handle an incoming answer
  //   const handleAnswer = async (data) => {
  //     await peerConnection.current.setRemoteDescription(data.answer);
  //   };

  //   // Handle incoming ICE candidates
  //   const handleCandidate = async (data) => {
  //     if (data.candidate) {
  //       await peerConnection.current.addIceCandidate(data.candidate);
  //     }
  //   };
  return (
    <div className="call-ui">
        {
           !token &&  <div>Getting token...</div>
        }
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
        <div className="w-full h-[500px]   mt-5 flex justify-center items-center relative">
          <div className="flex flex-col items-center">
            <Avatar size={100} src={imageUrl(user?.profilePic)} />
            <h2 className="text-xl font-semibold mt-2">{nameDisplay(user)}</h2>
            <p className="text-gray-600 mt-1">Calling...</p>
          </div>
          <video
            // ref={myVideoRef}
            autoPlay
            playsInline
            muted
            style={{ width: "300px" }}
            className="absolute bottom-0 right-0 border border-gray-300 rounded-md"
          />
        </div>
      </Modal>
    </div>
  );
};

export default CallUi;
