import type { GitCommand } from '../types/git'
import './CommandCard.css'

interface CommandCardProps {
  command: GitCommand
}

function CommandCard({ command }: CommandCardProps) {
  return (
    <article className="command-card">
      <div className="command-card-header">
        <span className="command-category">{command.category}</span>

        <span className="command-prompt" aria-hidden="true">
          $
        </span>
      </div>

      <h3 className="command-name">{command.name}</h3>

      <p className="command-description">{command.description}</p>

      <div className="command-block">
        <span className="command-block-label">Syntax</span>

        <code>{command.syntax}</code>
      </div>

      <div className="command-block">
        <span className="command-block-label">Example</span>

        <code>{command.example}</code>
      </div>
    </article>
  )
}

export default CommandCard