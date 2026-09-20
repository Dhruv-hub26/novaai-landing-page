import { useEffect, useRef, useState } from 'react'

interface RevealOptions {
  threshold?: number
  delay?: number
}

export function useReveal<T extends HTMLElement = HTMLDivElement>({ threshold = 0.15, delay = 0 }: RevealOptions = {}) {
  const ref = useRef<T>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const style: React.CSSProperties = {
    transform: revealed ? 'translateY(0)' : 'translateY(2rem)',
    opacity: revealed ? 1 : 0,
    transition: `all 700ms ease-out ${delay}ms`,
    willChange: 'transform',
  }

  return { ref, style }
}
