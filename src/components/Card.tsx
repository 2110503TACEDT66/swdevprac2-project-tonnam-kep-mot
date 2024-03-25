'use client'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';

export default function Card({campName,imgSrc}:{campName:string,imgSrc:string}){
  return (
    <InteractiveCard contentName={campName}>
      <div className="w-full h-[70%] relative rounded-t-lg">
      <Image src={imgSrc} 
      alt='Product'
      fill = {true}
      className='object-cover rounded-t-lg' />
      </div>
      <div className="w-full h-[30%] p-[10px]">{campName}</div>
    </InteractiveCard>
  );
};


