'use client'

import { useState } from "react"
import VideoPlayer from "./VideoPlayer"
import { Rating } from "@mui/material"
import { useWindowListener } from "@/hooks/useWindowListener"

export default function PromoteCard(){
    const [playing,setPlaying] = useState(true)
    const [rating,setRating] = useState(0)
    useWindowListener('contextmenu', (e) => {
        e.preventDefault()
    });
    return(
        <div className="w-[80%] shadow-lg mx-10 p-2 rounded-lg bg-gray-200 flex flex-row">
            <VideoPlayer vdoSrc="/video/getcamp.mp4" isPlaying={playing}></VideoPlayer>
            <div>Get your camping today.
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={()=>{setPlaying(!playing)}}>
                    {playing? 'Pause':'Play'}
            </button>
            
            </div>
        </div>
    )
}