'use client'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function Card ({campName, imgSrc} : {campName:string, imgSrc:string}) {
    const [value, setValue] = useState(5);

    return (
        <InteractiveCard contentName={campName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[15px] text-black text-center font-serif'>{campName}</div>
        </InteractiveCard>
    );
}