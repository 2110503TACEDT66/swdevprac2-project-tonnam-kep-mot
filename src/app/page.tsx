import Image from 'next/image'
import styles from './page.module.css'
import Banner from '../components/Banner';
import Card from '../components/Card';

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
      <Card campName='กระต่ายกินเนื้อ ลานกางเต๊นท์' imgSrc='/img/camp1.jpg'/>
        <Card campName='จูบติ๋มที่ริมบึง' imgSrc='/img/camp2.jpg'/>
        <Card campName='Lakeview Camping' imgSrc='/img/camp3.jpg'/>
      </div>
    </main>
  )
}
