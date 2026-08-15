import { useTheme } from '../hooks/useTheme'
import './ThemeToggle.css'

function ThemeToggle() {
  const {
    theme,
    toggleTheme,
  } = useTheme()

  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={
        isDark
          ? 'Switch to light theme'
          : 'Switch to dark theme'
      }
      title={
        isDark
          ? 'Switch to light theme'
          : 'Switch to dark theme'
      }
      onClick={toggleTheme}
    >
      <span
        className="theme-toggle-icon"
        aria-hidden="true"
      >
        {isDark ? '☀' : '☾'}
      </span>

      <span className="theme-toggle-label">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  )
}

export default ThemeToggle