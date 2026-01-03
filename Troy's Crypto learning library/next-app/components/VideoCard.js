'use client';

export default function VideoCard({ video, delay = 0 }) {
  return (
    <div className="video-card" style={{ animationDelay: `${delay}ms` }}>
      <div className="video-embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.embedId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-content">
        <div className="video-body">
          <div className="video-tags">
            {video.tags.map((tag, index) => (
              <button key={index} className="tag">
                {tag}
              </button>
            ))}
          </div>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="video-title-link"
          >
            <h3 className="video-title">
              <strong>{video.title}</strong>
            </h3>
          </a>
          <p className="video-author">{video.author}</p>
          <p className="video-description">{video.description}</p>
        </div>
        <div className="video-footer">
          <span className="video-duration">{video.duration}</span>
          <a
            href={video.longcutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="longcut-link"
          >
            <span>Watch on LongCut</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h6v6"></path>
              <path d="M10 14 21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
