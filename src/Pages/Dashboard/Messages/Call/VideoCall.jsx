import React from "react";

import {
  LiveKitRoom,
  PreJoin,
  useToken,
  VideoConference,
  formatChatMessageLinks,
} from '@livekit/components-react';
import { LogLevel, VideoPresets } from 'livekit-client';
import "@livekit/components-styles";
import { useMemo } from "react";
import DebugMode from "./lib/Debug";

const VideoCall = ({ token }) => {
  const roomOptions = useMemo(() => {
    return {
      videoCaptureDefaults: {
        deviceId:  undefined,
        resolution:  VideoPresets.h720,
      },
      publishDefaults: {
        videoSimulcastLayers:
        [VideoPresets.h540, VideoPresets.h216]
      },
      audioCaptureDefaults: {
        deviceId:  undefined,
      },
      adaptiveStream: { pixelDensity: 'screen' },
      dynacast: true,
    };
  }, []);
  return (
    <div>
      {/* <LiveKitRoom
        video={true}
        audio={true}
        token={token}
        serverUrl={"wss://meet-genzit-tg68oj7z.livekit.cloud"}
        // Use the default LiveKit theme for nice styles.
        data-lk-theme="default"
        
      >
        <VideoConference
          chatMessageFormatter={formatChatMessageLinks}
          SettingsComponent={undefined}
        />
        <RoomAudioRenderer />
        <ControlBar />
      </LiveKitRoom> */}
      <LiveKitRoom
          token={token}
          serverUrl={"wss://meet-genzit-tg68oj7z.livekit.cloud"}
          options={roomOptions}
          video={true}
          audio={true}
          // onDisconnected={onLeave}
        >
          <VideoConference chatMessageFormatter={formatChatMessageLinks} />
          <DebugMode logLevel={LogLevel.info} />
        </LiveKitRoom>
    </div>
  );
};

export default VideoCall;
