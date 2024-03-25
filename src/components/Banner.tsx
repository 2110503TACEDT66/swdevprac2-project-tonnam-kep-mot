import Image from 'next/image'
import styles from './banner.module.css'

export default function Banner(){
  return (
    <div className={styles.banner}>
      <Image src={'/img/camp.jpg'} 
      alt="cover"
      fill = {true}
      objectFit='cover' />
      <div className={styles.bannerText}>
        <h1 className='text-4xl font-medium'>Campground Booking</h1>
        <h3 className='text-xl font-serif'>Web application to booking a campground</h3>
      </div>
    </div>
  );
};
