export default function PersonCard({ person }) {
  return (
    <div className="person-card">
      <div className="person-avatar">
        <span className="avatar-placeholder">{person.avatar}</span>
      </div>
      <a
        href={person.url}
        target="_blank"
        rel="noopener noreferrer"
        className="person-name"
      >
        {person.name}
      </a>
      <p className="person-handle">{person.handle}</p>
      <p className="person-bio">{person.bio}</p>
    </div>
  )
}
