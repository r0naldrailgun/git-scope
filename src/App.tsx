import {
  useEffect,
  useState,
} from 'react'
import './App.css'
import Header from './components/Header'
import CommandExplorer from './components/CommandExplorer'
import WorkflowVisualizer from './components/WorkflowVisualizer'
import CommitChecker from './components/CommitChecker'

const FAVORITES_STORAGE_KEY =
  'gitscope-favorite-commands'

function getInitialFavorites(): string[] {
  if (typeof window === 'undefined') {
    return []
  }

  const savedFavorites =
    window.localStorage.getItem(
      FAVORITES_STORAGE_KEY,
    )

  if (!savedFavorites) {
    return []
  }

  try {
    const parsed =
      JSON.parse(savedFavorites)

    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter(
      (item): item is string =>
        typeof item === 'string',
    )
  } catch {
    return []
  }
}

function App() {
  const [
    favoriteCommands,
    setFavoriteCommands,
  ] = useState<string[]>(
    getInitialFavorites,
  )

  useEffect(() => {
    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favoriteCommands),
    )
  }, [favoriteCommands])

  function toggleFavorite(
    commandName: string,
  ) {
    setFavoriteCommands(
      (currentFavorites) => {
        const alreadyFavorite =
          currentFavorites.includes(
            commandName,
          )

        if (alreadyFavorite) {
          return currentFavorites.filter(
            (name) =>
              name !== commandName,
          )
        }

        return [
          ...currentFavorites,
          commandName,
        ]
      },
    )
  }

  return (
    <div className="app-shell">
      <Header />

      <main className="main-content">
        <section className="hero">
          <p className="eyebrow">
            LEARN • EXPLORE • PRACTICE
          </p>

          <h2>
            Understand Git without memorizing
            everything.
          </h2>

          <p className="hero-description">
            GitScope is an interactive learning
            tool for exploring Git commands,
            understanding common workflows,
            and practicing better commit
            messages.
          </p>

          <a
            className="hero-action"
            href="#commands"
          >
            Explore commands
            <span aria-hidden="true">
              {' '}
              ↓
            </span>
          </a>
        </section>

        <CommandExplorer
          favoriteCommands={
            favoriteCommands
          }
          onToggleFavorite={
            toggleFavorite
          }
        />

        <WorkflowVisualizer />

        <CommitChecker />
      </main>
    </div>
  )
}

export default App