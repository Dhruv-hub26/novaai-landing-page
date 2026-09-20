import { Hexagon } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const navLinks = [
  { label: 'Projects', target: 'capabilities', isProjects: true },
  { label: 'About', target: 'architecture' },
  { label: 'Contact', target: 'contact' },
]

function handleScroll(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) {
  e.preventDefault()
  const target = document.getElementById(targetId)
  if (target) {
    const navbarHeight = 70 // approx height of the fixed navbar
    const targetPosition = target.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: targetPosition - navbarHeight,
      behavior: 'smooth'
    })
  }
}

function NavLink({ label, delay, isProjects, target }: { label: string; delay: number; isProjects?: boolean; target: string }) {
  const { ref, style } = useReveal<HTMLAnchorElement>({ delay })
  return (
    <a
      ref={ref}
      style={style}
      href={`#${target}`}
      onClick={(e) => handleScroll(e, target)}
      className="text-sm text-white/85 transition-colors duration-200 hover:text-white"
    >
      {label}
      {isProjects && (
        <sup className="ml-0.5 font-mono text-[10px] text-white/60">6</sup>
      )}
    </a>
  )
}

export default function Navbar() {
  const logoReveal = useReveal<HTMLAnchorElement>({ delay: 0 })
  const ctaReveal = useReveal<HTMLButtonElement>({ delay: 500 })

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-black/10 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 md:px-12">
        {/* Logo */}
        <a
          ref={logoReveal.ref}
          style={logoReveal.style}
          href="#hero"
          onClick={(e) => handleScroll(e, 'hero')}
          className="flex items-center gap-2 text-white no-underline transition-colors duration-200 hover:text-white/80"
        >
          <Hexagon size={24} strokeWidth={1.5} />
          <span className="text-lg font-medium tracking-tight sm:text-xl">novaai</span>
        </a>

        {/* Center nav links — hidden below md */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link, i) => (
            <NavLink 
              key={link.label} 
              label={link.label} 
              target={link.target}
              isProjects={link.isProjects}
              delay={100 + (i + 1) * 100} 
            />
          ))}
        </div>

        {/* CTA */}
        <button
          ref={ctaReveal.ref}
          style={ctaReveal.style}
          onClick={(e) => handleScroll(e, 'contact')}
          className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-xs text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08] sm:px-5 sm:text-sm"
        >
          Get Free Consultation
        </button>
      </div>
    </nav>
  )
}
