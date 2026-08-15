import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <a
          className="brand"
          href="#"
          aria-label="GitScope home"
        >
          <span className="brand-mark">
            &gt;_
          </span>

          <div>
            <h1>GitScope</h1>

            <p>
              Interactive Git Workflow Explorer
            </p>
          </div>
        </a>

        <div className="header-actions">
          <nav
            className="main-nav"
            aria-label="Main navigation"
          >
            <a href="#commands">
              Commands
            </a>

            <a href="#workflow">
              Workflow
            </a>

            <a href="#commit-checker">
              Commit Checker
            </a>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header