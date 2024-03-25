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
        <h1>Campground Booking</h1>
        <p>Web application to booking a campground</p>
      </div>
    </div>
  );
};
