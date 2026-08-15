import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const THEME_STORAGE_KEY = 'gitscope-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const savedTheme =
    window.localStorage.getItem(THEME_STORAGE_KEY)

  if (
    savedTheme === 'dark' ||
    savedTheme === 'light'
  ) {
    return savedTheme
  }

  const prefersLight =
    window.matchMedia(
      '(prefers-color-scheme: light)',
    ).matches

  return prefersLight ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] =
    useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark'
        ? 'light'
        : 'dark',
    )
  }

  return {
    theme,
    toggleTheme,
  }
}