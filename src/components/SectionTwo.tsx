import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const capabilities = [
  {
    index: '01',
    title: 'Real-time vision',
    body: 'Reads context as it happens and surfaces what matters before you ask.',
  },
  {
    index: '02',
    title: 'Layered insight',
    body: 'Moves from rough outline to sharp output without losing the thread.',
  },
  {
    index: '03',
    title: 'Adaptive speed',
    body: 'Learns your cadence and tightens every pass as you work.',
  },
]

function CapabilityRow({
  index,
  title,
  body,
  delay,
  isLast,
}: {
  index: string
  title: string
  body: string
  delay: number
  isLast: boolean
}) {
  const { ref, style } = useReveal<HTMLDivElement>({ delay })
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      style={style}
      className={`flex gap-5 py-5 transition-colors duration-300 hover:bg-white/[0.02] -mx-5 px-5 sm:-mx-6 sm:px-6 rounded-lg ${!isLast ? 'border-b border-white/[0.08]' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="mt-0.5 font-mono text-[11px] tracking-[0.15em] text-zinc-400 font-medium shrink-0">
        {index}
      </span>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="text-base font-medium text-white sm:text-lg">{title}</span>
          <ChevronRight
            size={16}
            className="text-white/40 transition-all duration-300"
            style={{
              transform: hovered ? 'translateX(4px)' : 'translateX(0)',
              color: hovered ? 'white' : undefined,
            }}
          />
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-200">{body}</p>
      </div>
    </div>
  )
}

export default function SectionTwo() {
  const badgeReveal = useReveal({ delay: 120 })
  const rightCopyReveal = useReveal({ delay: 220 })
  const h2Reveal = useReveal({ delay: 180 })
  const bodyReveal = useReveal({ delay: 320 })
  const ctaReveal = useReveal({ delay: 420 })

  return (
    <section
      id="capabilities"
      className="relative flex min-h-screen flex-col justify-between px-5 pb-12 pt-24 sm:min-h-[100svh] sm:px-8 sm:pt-28 md:px-12 md:pb-16"
    >
      {/* Top row */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        {/* Left badge */}
        <div
          ref={badgeReveal.ref as React.RefObject<HTMLDivElement>}
          style={badgeReveal.style}
          className="inline-flex items-center border-l-2 border-white bg-white/[0.04] px-3 py-1.5 backdrop-blur-xl"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-400 font-medium">
            Insight On Demand
          </span>
        </div>

        {/* Right copy */}
        <div
          ref={rightCopyReveal.ref as React.RefObject<HTMLDivElement>}
          style={rightCopyReveal.style}
          className="max-w-sm sm:text-right"
        >
          <p className="text-lg leading-relaxed text-neutral-200 drop-shadow-md sm:text-xl">
            Our AI doesn't just respond — it interprets, sharpens, and delivers the signal you need.
          </p>
        </div>
      </div>

      {/* Bottom area */}
      <div className="flex flex-1 flex-col justify-end gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
        {/* Left column */}
        <div className="max-w-xl">
          {/* H2 */}
          <div
            ref={h2Reveal.ref as React.RefObject<HTMLDivElement>}
            style={h2Reveal.style}
          >
            <h2 className="text-5xl font-medium leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
              Learn to see
              <br />
              brilliantly.
            </h2>
          </div>

          {/* Body */}
          <div
            ref={bodyReveal.ref as React.RefObject<HTMLDivElement>}
            style={bodyReveal.style}
            className="mt-6 max-w-md"
          >
            <p className="text-sm leading-relaxed text-neutral-200 drop-shadow-md sm:text-base">
              From the first sketch to the final render, Nova turns raw intent into decisions your team can act on —
              quietly, precisely, at speed.
            </p>
          </div>

          {/* CTAs */}
          <div
            ref={ctaReveal.ref as React.RefObject<HTMLDivElement>}
            style={ctaReveal.style}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button className="group flex items-center gap-1.5 rounded-full border border-transparent bg-white px-5 py-2.5 text-xs font-medium text-black transition-colors duration-300 hover:border-white/20 hover:bg-white/85 sm:text-sm">
              Run the demo
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2.5 text-xs text-white backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:text-sm">
              Free consultation
            </button>
          </div>
        </div>

        {/* Right: frosted capability panel */}
        <div className="w-full max-w-md rounded-3xl border border-white/[0.08] bg-white/[0.04] px-5 backdrop-blur-xl shadow-2xl shadow-black/50 sm:px-6">
          {capabilities.map((cap, i) => (
            <CapabilityRow
              key={cap.index}
              {...cap}
              delay={300 + i * 110}
              isLast={i === capabilities.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
