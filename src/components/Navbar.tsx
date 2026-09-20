import { Hexagon } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const navLinks = ['About', 'Blog', 'Contact']

function NavLink({ label, delay, isProjects }: { label: string; delay: number; isProjects?: boolean }) {
  const { ref, style } = useReveal<HTMLAnchorElement>({ delay })
  return (
    <a
      ref={ref}
      style={style}
      href="#"
      className="text-sm text-white/85 transition-colors duration-300 hover:text-white"
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
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/15"
      style={{ backdropFilter: 'none' }}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 md:px-12">
        {/* Logo */}
        <a
          ref={logoReveal.ref}
          style={logoReveal.style}
          href="#"
          className="flex items-center gap-2 text-white no-underline"
        >
          <Hexagon size={24} strokeWidth={1.5} />
          <span className="text-lg font-medium tracking-tight sm:text-xl">novaai</span>
        </a>

        {/* Center nav links — hidden below md */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          <NavLink label="Projects" delay={100} isProjects />
          {navLinks.map((link, i) => (
            <NavLink key={link} label={link} delay={100 + (i + 1) * 100} />
          ))}
        </div>

        {/* CTA */}
        <button
          ref={ctaReveal.ref}
          style={ctaReveal.style}
          className="rounded-md border border-white/20 bg-white/15 px-4 py-2 text-xs backdrop-blur-md transition-colors duration-300 hover:bg-white/25 sm:px-5 sm:text-sm"
        >
          Get Free Consultation
        </button>
      </div>
    </nav>
  )
}
