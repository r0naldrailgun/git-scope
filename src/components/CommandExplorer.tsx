import { gitCommands } from '../data/commands'
import CommandCard from './CommandCard'
import './CommandExplorer.css'

function CommandExplorer() {
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

      <div className="command-summary">
        <span>
          <strong>{gitCommands.length}</strong> commands
        </span>

        <span>5 categories</span>
      </div>

      <div className="command-grid">
        {gitCommands.map((command) => (
          <CommandCard key={command.name} command={command} />
        ))}
      </div>
    </section>
  )
}

export default CommandExplorer