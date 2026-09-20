import { ChevronRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const PORTRAIT_URL =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260728_050334_5b076e26-0ce7-4898-b432-d764190e448f.png&w=1280&q=85'

const services = ['/ AI AUTOMATION', '/ AI INTEGRATION', '/ AI AGENT DEVELOPMENT']

function ServiceItem({ label, delay }: { label: string; delay: number }) {
  const { ref, style } = useReveal<HTMLSpanElement>({ delay })
  return (
    <span
      ref={ref}
      style={style}
      className="font-mono text-xs uppercase tracking-[0.15em] text-white/90 drop-shadow-md"
    >
      {label}
    </span>
  )
}

export default function SectionOne() {
  const introReveal = useReveal({ delay: 300 })
  const badgeReveal = useReveal({ delay: 150 })
  const h1Reveal = useReveal({ delay: 280 })
  const cardReveal = useReveal({ delay: 420 })

  return (
    <section
      className="relative flex min-h-screen flex-col justify-between px-5 pb-12 pt-24 sm:min-h-[100svh] sm:px-8 sm:pt-28 md:px-12 md:pb-16"
    >
      {/* Top row: service list (left) + intro text (right) */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        {/* Service list */}
        <div className="flex flex-col gap-2">
          {services.map((s, i) => (
            <ServiceItem key={s} label={s} delay={150 + i * 120} />
          ))}
        </div>

        {/* Intro paragraph */}
        <div
          ref={introReveal.ref as React.RefObject<HTMLDivElement>}
          style={introReveal.style}
          className="max-w-xs sm:text-right"
        >
          <p className="text-lg leading-relaxed text-white drop-shadow-md sm:text-xl">
            We design automation that brings clarity, precision, and efficiency to the way your company operates.
          </p>
        </div>
      </div>

      {/* Bottom row: badge + H1 (left) + contact card (right) */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        {/* Left: badge + H1 */}
        <div>
          {/* Badge */}
          <div
            ref={badgeReveal.ref as React.RefObject<HTMLDivElement>}
            style={badgeReveal.style}
            className="mb-5 inline-flex items-center border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
              We Automate 100+ Businesses
            </span>
          </div>

          {/* H1 */}
          <div
            ref={h1Reveal.ref as React.RefObject<HTMLDivElement>}
            style={h1Reveal.style}
          >
            <h1 className="text-5xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
              Clear. Precise.
              <br />
              Automated.
            </h1>
          </div>
        </div>

        {/* Right: Mitha glass contact card */}
        <div
          ref={cardReveal.ref as React.RefObject<HTMLDivElement>}
          style={cardReveal.style}
          className="flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md"
        >
          <img
            src={PORTRAIT_URL}
            alt="Mitha, co-founder of NovaAI"
            className="h-24 w-20 rounded-lg object-cover"
          />
          <div className="flex flex-col gap-1.5 pr-2">
            <span className="text-sm font-medium text-white">Talk with Mitha</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
              Co-founder of NovaAI
            </span>
            <button className="mt-1.5 flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85">
              Book 15-mins call
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
