import { people } from '@/app/data/people'
import PersonCard from './PersonCard'

export default function People() {
  return (
    <section className="people-section">
      <div className="container">
        <h2 className="section-title">People to Follow on X</h2>
        <div className="section-underline"></div>
        <p className="section-description">
          Follow these AI experts and thought leaders to stay informed about the latest developments.
        </p>
        <div className="people-grid">
          {people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
