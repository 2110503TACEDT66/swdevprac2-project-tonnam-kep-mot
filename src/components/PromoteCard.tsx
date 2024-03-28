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
        <div className="w-full shadow-lg mx-10 p-2 rounded-lg bg-gray-200 flex flex-row justify-center items-center">
            <div className="w-full md:w-1 lg:w-1">
                <VideoPlayer vdoSrc="/video/getcamp.mp4" isPlaying={playing}></VideoPlayer>
            </div>
        </div>
    )
}