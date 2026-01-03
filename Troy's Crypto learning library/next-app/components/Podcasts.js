import { podcasts } from '@/app/data/podcasts'
import PodcastCard from './PodcastCard'

export default function Podcasts() {
  return (
    <section className="podcasts-section">
      <div className="container">
        <h2 className="section-title">Video Podcasts</h2>
        <div className="section-underline"></div>
        <p className="section-description">
          Stay updated with the best AI podcasts from leading experts and practitioners.
        </p>
        <div className="podcast-grid">
          {podcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </div>
    </section>
  )
}
