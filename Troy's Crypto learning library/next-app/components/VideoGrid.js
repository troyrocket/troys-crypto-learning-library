import { videos } from '@/app/data/videos'
import VideoCard from './VideoCard'

export default function VideoGrid() {
  return (
    <section className="videos-section">
      <div className="container">
        <div className="videos-header">
          <div>
            <h2 className="section-title">Featured Videos</h2>
          </div>
          <button className="btn-primary" id="viewCollectionBtn">
            <span>View Complete Collection</span>
          </button>
        </div>

        <p className="videos-intro">
          I have personally watched all of these videos, from beginning to end. I picked these because I learned a lot from them.<br /><br />
          I watch a LOT of YouTube videos on AI. I've filtered the best for you.<br /><br />
          I recommend watching them using{' '}
          <a href="https://longcut.ai" target="_blank" rel="noopener noreferrer">
            LongCut
          </a>
          , a tool that I built with friends to help you learn from long YouTube videos better and faster.
        </p>

        <div className="video-grid">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} delay={(index + 1) * 100 + 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
