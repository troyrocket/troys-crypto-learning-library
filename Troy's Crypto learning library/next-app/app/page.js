import Hero from '@/components/Hero'
import VideoGrid from '@/components/VideoGrid'
import Podcasts from '@/components/Podcasts'
import People from '@/components/People'
import Newsletters from '@/components/Newsletters'
import Products from '@/components/Products'
import Prompts from '@/components/Prompts'

export default function Home() {
  return (
    <div className="page-container">
      <Hero />
      <VideoGrid />
      <Podcasts />
      <People />
      <Newsletters />
      <Products />
      <Prompts />
    </div>
  )
}
