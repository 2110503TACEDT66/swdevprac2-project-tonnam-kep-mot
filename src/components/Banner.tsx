'use client'
import { useState} from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import styles from './banner.module.css'

export default function Banner(){
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg' , '/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const {data:session}=useSession()
  return (
    <div className={styles.banner} onClick={() => { setIndex(index + 1) }}>
      <Image src={covers[index % 4]} 
      alt="cover"
      fill = {true}
      objectFit='cover' />
      <div className={styles.bannerText}>
        <h1 className='text-4xl font-medium'>Campground Booking</h1>
        <h3 className='text-xl font-serif'>Web application to booking a campground</h3>
        </div>
        {
          session? <div className='z-30 absolute top-5 left-10 font-semibold text-cyan-800 text-x1'>
          Hello {session.user?.name}</div>:null
        }
      <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-5 rounded-lg z-30 absolute bottom-0 right-0 hover:bg-cyan-800 hover:text-white hover:border-transparent font-serif' onClick={(e) => {e.stopPropagation(); router.push('/camp')}}>
            Select Campground
      </button>
    </div>
  );
};
