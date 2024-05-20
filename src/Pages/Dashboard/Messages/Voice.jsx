
import React, { useMemo, useState, useCallback, useRef } from 'react';

import audio from './audio.mp3'
import WavesurferPlayer from '@wavesurfer/react'
import { button } from '@material-tailwind/react';
const Voice = () => {

    const [wavesurfer, setWavesurfer] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const onReady = (ws) => {
        setWavesurfer(ws)
        setIsPlaying(false)
    }

    const onPlayPause = () => {
        wavesurfer && wavesurfer.playPause()
        setIsPlaying(!isPlaying)
    }
    return (
        <div className="w-[263.50px] h-[44.18px] bg-sky-100 rounded-tl-[9.47px] rounded-tr-[9.47px] rounded-br-[9.47px] flex justify-between items-center px-3 messageCard">
            <button
                onClick={onPlayPause}
            >
                <PlayButton isPlaying={isPlaying} />
            </button>
            <WavesurferPlayer
                height={35}
                waveColor="#187A82"
                url={audio}
                width={180}
                onReady={onReady}
                barGap={3}
                barWidth={1}
                barRadius={3}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />
            <div className="opacity-50 text-slate-500 text-[9.47px] font-normal">00:48</div>

        </div>
    );
};

export default Voice;

const PlayButton = ({ isPlaying }) => {
    if (isPlaying) {
        return (
            <button className='w-[25px] h-[25px] bg-[#187A82] text-white rounded-full flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z" />
                </svg>
            </button>

        )
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
            <circle cx="12.7419" cy="12.7131" r="11.8337" fill="#187A82" />
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5732 9.08555C10.5732 8.61298 11.0999 8.3311 11.4931 8.59324L16.935 12.2211C17.2863 12.4553 17.2863 12.9716 16.935 13.2058L11.4931 16.8336C11.0999 17.0958 10.5732 16.8139 10.5732 16.3413V9.08555Z" fill="white" />
        </svg>

    )
}