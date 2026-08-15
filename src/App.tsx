import './App.css'
import Header from './components/Header'
import CommandExplorer from './components/CommandExplorer'
import WorkflowVisualizer from './components/WorkflowVisualizer'
import CommitChecker from './components/CommitChecker'

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="main-content">
        <section className="hero">
          <p className="eyebrow">
            LEARN • EXPLORE • PRACTICE
          </p>

          <h2>
            Understand Git without memorizing everything.
          </h2>

          <p className="hero-description">
            GitScope is an interactive learning tool for
            exploring Git commands, understanding common
            workflows, and practicing better commit messages.
          </p>

          <a
            className="hero-action"
            href="#commands"
          >
            Explore commands
            <span aria-hidden="true"> ↓</span>
          </a>
        </section>

        <CommandExplorer />

        <WorkflowVisualizer />

        <CommitChecker />
      </main>
    </div>
  )
}

export default App