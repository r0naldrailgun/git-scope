import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  favoriteCount: number
}

function Header({
  favoriteCount,
}: HeaderProps) {
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
              Interactive Git Workflow
              Explorer
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

          <div
            className="favorite-count"
            title={`${favoriteCount} favorite commands`}
          >
            <span aria-hidden="true">
              ★
            </span>

            <span>
              {favoriteCount}
            </span>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
