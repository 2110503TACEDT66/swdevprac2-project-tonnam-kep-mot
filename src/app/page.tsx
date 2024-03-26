import Image from 'next/image'
import Banner from '../components/Banner';
import Card from '../components/Card';
import PromoteCard from '@/components/PromoteCard';

export default function Home() {
  return (
    <main>
      <Banner />
      <PromoteCard></PromoteCard>
    </main>
  )
}
