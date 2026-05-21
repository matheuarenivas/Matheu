import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll to top on every route change.
// React Router doesn't do this by default; the browser keeps the previous
// scroll position, which is wrong for a typical "new page" navigation.
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
