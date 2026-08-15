import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="main-content">
        <section className="hero">
          <p className="eyebrow">LEARN • EXPLORE • PRACTICE</p>

          <h2>Understand Git without memorizing everything.</h2>

          <p className="hero-description">
            GitScope is an interactive learning tool for exploring Git
            commands, understanding common workflows, and practicing better
            commit messages.
          </p>
        </section>

        <section className="feature-grid">
          <article className="feature-card" id="commands">
            <span className="feature-number">01</span>

            <h3>Git Commands</h3>

            <p>
              Explore commonly used Git commands and learn when and why they
              are used.
            </p>

            <span className="coming-soon">Coming soon</span>
          </article>

          <article className="feature-card" id="workflow">
            <span className="feature-number">02</span>

            <h3>Workflow Visualizer</h3>

            <p>
              Understand how main, development, and feature branches work
              together.
            </p>

            <span className="coming-soon">Coming soon</span>
          </article>

          <article className="feature-card" id="commit-checker">
            <span className="feature-number">03</span>

            <h3>Commit Checker</h3>

            <p>
              Check whether your Git commit messages clearly describe the
              changes you made.
            </p>

            <span className="coming-soon">Coming soon</span>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
