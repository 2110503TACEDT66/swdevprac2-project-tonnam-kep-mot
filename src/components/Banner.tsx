'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner() {
  const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg'];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const URL = `/camp`
  const win: Window = window;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % covers.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [covers.length]);
  return (
    <div className={styles.banner}>
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        objectFit="cover"
        key={index} // Add key prop here
      />
      <div className={styles.bannerText}>
        <h1 className="text-4xl font-medium">Campground Booking</h1>
        <h3 className="text-xl font-serif">Web application to booking a campground</h3>
      </div>
      <button
        className="text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-5 rounded-lg z-30 absolute bottom-0 right-0 hover:bg-cyan-800 hover:text-white hover:border-transparent font-serif"
        onClick={(e) => {
          e.stopPropagation();
          win.location.assign(URL)
          // router.replace('/camp')
        }
      }
      >
        Explore our Campground
      </button>
    </div>
  );
}
