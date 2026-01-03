export default function NewsletterCard({ newsletter }) {
  return (
    <div className="newsletter-card">
      <h3 className="newsletter-title">{newsletter.title}</h3>
      <p className="newsletter-author">{newsletter.author}</p>
      <p className="newsletter-description">{newsletter.description}</p>
      <a
        href={newsletter.url}
        target="_blank"
        rel="noopener noreferrer"
        className="newsletter-link"
      >
        Subscribe →
      </a>
    </div>
  )
}
