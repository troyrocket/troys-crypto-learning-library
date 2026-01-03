export default function PodcastCard({ podcast }) {
  return (
    <div className="podcast-card">
      <h3 className="podcast-title">{podcast.title}</h3>
      <div className="podcast-tags">
        {podcast.tags.map((tag, index) => (
          <span key={index} className="tag-badge">
            {tag}
          </span>
        ))}
      </div>
      <p className="podcast-host">{podcast.host}</p>
      <p className="podcast-description">{podcast.description}</p>
      <a
        href={podcast.url}
        target="_blank"
        rel="noopener noreferrer"
        className="podcast-link"
      >
        <span>Listen →</span>
      </a>
    </div>
  )
}
