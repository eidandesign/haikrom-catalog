import { useState, useEffect, useRef } from 'react'

// Returns `visible` (show nav) and `scrolled` (past top threshold).
// Nav hides when scrolling down past threshold, reappears on any upward scroll.
export function useScrollDirection(threshold = 8) {
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const prevY = useRef(0)

  useEffect(() => {
    // Initialise to current scroll position so the first event has the right delta
    prevY.current = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - prevY.current

      setScrolled(y > 60)

      if (y < 80) {
        // Always visible near the top
        setVisible(true)
      } else if (Math.abs(delta) >= threshold) {
        // delta < 0 = scrolling up → show; delta > 0 = scrolling down → hide
        setVisible(delta < 0)
      }

      // Always track position so direction detection stays accurate
      prevY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return { visible, scrolled }
}
