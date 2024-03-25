import Image from 'next/image'
import styles from './productcard.module.css'

export default function Card({campName,imgSrc}:{campName:string,imgSrc:string}){
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
      <Image src={imgSrc} 
      alt='Product'
      fill = {true}
      objectFit='cover' />
      </div>
      <div className={styles.cardtext}>{campName}</div>
    </div>
  );
};
