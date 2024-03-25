import Image from 'next/image'
import styles from './productcard.module.css'

export default function Card(){
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
      <Image src={'/img/camp1.jpg'} 
      alt='Product'
      fill = {true}
      objectFit='cover' />
      </div>
      <div className={styles.cardtext}>ลานแคมปิ้งที่ร่มรื่นด้วยร่มเงาของไม้ใหญ่ริมแม่น้ำแควน้อย ค่าบริการสำหรับผู้ใหญ่ 200 บาทต่อคน / คืน </div>
    </div>
  );
};
