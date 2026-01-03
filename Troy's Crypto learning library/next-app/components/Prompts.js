import { prompts } from '@/app/data/prompts'
import PromptCard from './PromptCard'

export default function Prompts() {
  return (
    <section className="prompts-section">
      <div className="container">
        <h2 className="section-title">Prompts</h2>
        <div className="section-underline"></div>
        <p className="section-description">
          Useful AI prompts to help you learn and work more effectively with AI tools.
        </p>
        <div className="prompts-grid">
          {prompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </div>
    </section>
  )
}
