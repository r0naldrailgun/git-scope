import type { GitCommand } from '../types/git'
import './CommandCard.css'

interface CommandCardProps {
  command: GitCommand
  isFavorite: boolean
  onToggleFavorite: (
    commandName: string,
  ) => void
}

function CommandCard({
  command,
  isFavorite,
  onToggleFavorite,
}: CommandCardProps) {
  return (
    <article className="command-card">
      <div className="command-card-header">
        <span className="command-category">
          {command.category}
        </span>

        <div className="command-card-actions">
          <button
            className={`favorite-button ${
              isFavorite
                ? 'favorite-button-active'
                : ''
            }`}
            type="button"
            aria-label={
              isFavorite
                ? `Remove ${command.name} from favorites`
                : `Add ${command.name} to favorites`
            }
            aria-pressed={isFavorite}
            title={
              isFavorite
                ? 'Remove from favorites'
                : 'Add to favorites'
            }
            onClick={() =>
              onToggleFavorite(
                command.name,
              )
            }
          >
            {isFavorite ? '★' : '☆'}
          </button>

          <span
            className="command-prompt"
            aria-hidden="true"
          >
            $
          </span>
        </div>
      </div>

      <h3 className="command-name">
        {command.name}
      </h3>

      <p className="command-description">
        {command.description}
      </p>

      <div className="command-block">
        <span className="command-block-label">
          Syntax
        </span>

        <code>{command.syntax}</code>
      </div>

      <div className="command-block">
        <span className="command-block-label">
          Example
        </span>

        <code>{command.example}</code>
      </div>
    </article>
  )
}

export default CommandCard