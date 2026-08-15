import { useMemo, useState } from 'react'
import { gitCommands } from '../data/commands'
import type { GitCommandCategory } from '../types/git'
import CommandCard from './CommandCard'
import './CommandExplorer.css'
import './SearchControls.css'
import './CategoryControls.css'

type CategoryFilter = 'All' | GitCommandCategory

const categories: CategoryFilter[] = [
  'All',
  'Basics',
  'Branching',
  'Remote',
  'History',
  'Undo',
]

function CommandExplorer() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>('All')

  const filteredCommands = useMemo(() => {
    const normalizedSearchQuery = searchQuery.trim().toLowerCase()

    return gitCommands.filter((command) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        command.category === selectedCategory

      const matchesSearch =
        normalizedSearchQuery === '' ||
        command.name.toLowerCase().includes(normalizedSearchQuery) ||
        command.description
          .toLowerCase()
          .includes(normalizedSearchQuery) ||
        command.syntax.toLowerCase().includes(normalizedSearchQuery) ||
        command.example.toLowerCase().includes(normalizedSearchQuery) ||
        command.category.toLowerCase().includes(normalizedSearchQuery)

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

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

        <div className="category-control">
          <span className="category-control-label">
            Filter by category
          </span>

          <div
            className="category-filter-list"
            aria-label="Command categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`category-filter-button ${
                  selectedCategory === category ? 'active' : ''
                }`}
                type="button"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="command-summary">
        <span>
          <strong>{filteredCommands.length}</strong> of {gitCommands.length}{' '}
          commands
        </span>

        <span>
          {selectedCategory === 'All'
            ? 'All categories'
            : selectedCategory}
        </span>
      </div>

      {filteredCommands.length > 0 ? (
        <div className="command-grid">
          {filteredCommands.map((command) => (
            <CommandCard key={command.name} command={command} />
          ))}
        </div>
      ) : (
        <p className="section-description">
          No Git commands match the current search and category filters.
        </p>
      )}
    </section>
  )
}

export default CommandExplorer