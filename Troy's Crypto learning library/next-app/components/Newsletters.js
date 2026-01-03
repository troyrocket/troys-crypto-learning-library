import { newsletters } from '@/app/data/newsletters'
import NewsletterCard from './NewsletterCard'

export default function Newsletters() {
  return (
    <section className="newsletters-section">
      <div className="container">
        <h2 className="section-title">Newsletters</h2>
        <div className="section-underline"></div>
        <p className="section-description">
          Subscribe to these newsletters to get the latest AI news and insights delivered to your inbox.
        </p>
        <div className="newsletter-grid">
          {newsletters.map((newsletter) => (
            <NewsletterCard key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>
      </div>
    </section>
  )
}
