import { useState } from 'react'
import { gitCommands } from '../data/commands'
import CommandCard from './CommandCard'
import './CommandExplorer.css'
import './SearchControls.css'

function CommandExplorer() {
  const [searchQuery, setSearchQuery] = useState('')

  const normalizedSearchQuery = searchQuery.trim().toLowerCase()

  const filteredCommands = gitCommands.filter((command) => {
    if (normalizedSearchQuery === '') {
      return true
    }

    return (
      command.name.toLowerCase().includes(normalizedSearchQuery) ||
      command.description.toLowerCase().includes(normalizedSearchQuery) ||
      command.syntax.toLowerCase().includes(normalizedSearchQuery) ||
      command.example.toLowerCase().includes(normalizedSearchQuery) ||
      command.category.toLowerCase().includes(normalizedSearchQuery)
    )
  })

  return (
    <section className="command-explorer" id="commands">
      <div className="section-heading">
        <div>
          <p className="section-eyebrow">COMMAND EXPLORER</p>

          <h2>Explore essential Git commands.</h2>
        </div>

        <p className="section-description">
          Browse commonly used Git commands and learn what they do, how they
          are written, and where they are useful.
        </p>
      </div>

      <div className="command-controls">
        <div className="search-control">
          <label htmlFor="command-search">Search commands</label>

          <input
            id="command-search"
            className="command-search-input"
            type="search"
            value={searchQuery}
            placeholder="Try: merge, remote, restore..."
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="command-summary">
        <span>
          <strong>{filteredCommands.length}</strong> of {gitCommands.length}{' '}
          commands
        </span>

        <span>5 categories</span>
      </div>

      <div className="command-grid">
        {filteredCommands.map((command) => (
          <CommandCard key={command.name} command={command} />
        ))}
      </div>
    </section>
  )
}

export default CommandExplorer