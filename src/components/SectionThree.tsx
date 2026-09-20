import { useReveal } from '../hooks/useReveal'
import { Zap, Cpu, Database } from 'lucide-react'

function SignalChart() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl bg-white/[0.02] p-4 border border-white/[0.05]">
      <div className="relative h-16 w-full">
        <svg
          className="h-full w-full stroke-white/50"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          fill="none"
          strokeWidth="1.5"
        >
          <path
            d="M0 20 Q 10 20, 15 10 T 30 20 T 45 30 T 60 15 T 75 25 T 90 20 T 100 20"
            className="animate-[dash_3s_linear_infinite]"
            strokeDasharray="100"
            strokeDashoffset="0"
          />
        </svg>
        {/* Decorative scanning line effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-[200%] animate-[scan_2s_linear_infinite]" />
      </div>
      
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -200; }
        }
        @keyframes scan {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
      `}</style>
    </div>
  )
}

export default function SectionThree() {
  const sectionReveal = useReveal({ delay: 150 })
  const bento1Reveal = useReveal({ delay: 200 })
  const bento2Reveal = useReveal({ delay: 350 })
  const bento3Reveal = useReveal({ delay: 500 })

  return (
    <section
      ref={sectionReveal.ref as React.RefObject<HTMLDivElement>}
      style={sectionReveal.style}
      className="relative flex min-h-screen flex-col justify-center px-5 py-24 sm:min-h-[100svh] sm:px-8 md:px-12"
    >
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-md rounded-full">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/80">
            Multi-modal Intelligence
          </span>
        </div>
        <h2 className="text-4xl font-normal leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl">
          Core Architecture
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">
        {/* Card 1: Decoupled inference engine */}
        <div
          ref={bento1Reveal.ref as React.RefObject<HTMLDivElement>}
          style={bento1Reveal.style}
          className="col-span-1 flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-md shadow-2xl shadow-black/50 lg:col-span-2 lg:row-span-2"
        >
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Cpu size={20} className="text-white" />
            </div>
            <h3 className="text-xl font-medium text-white">Decoupled Inference Engine</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
              Process vast streams of multi-modal data concurrently. Our bespoke architecture separates logic from execution for unthrottled performance.
            </p>
          </div>
          <SignalChart />
        </div>

        {/* Card 2: Enterprise latency stats */}
        <div
          ref={bento2Reveal.ref as React.RefObject<HTMLDivElement>}
          style={bento2Reveal.style}
          className="col-span-1 flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-md shadow-2xl shadow-black/50"
        >
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Zap size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-medium text-white">Edge Latency</h3>
            <p className="mt-1 text-sm text-white/70">Sub-12ms response worldwide.</p>
          </div>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-5xl font-light text-white drop-shadow-md">11.8</span>
            <span className="font-mono text-sm text-white/50">ms</span>
          </div>
        </div>

        {/* Card 3: Adaptive context memory */}
        <div
          ref={bento3Reveal.ref as React.RefObject<HTMLDivElement>}
          style={bento3Reveal.style}
          className="col-span-1 flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-md shadow-2xl shadow-black/50"
        >
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Database size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-medium text-white">Adaptive Context Memory</h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 transition-colors hover:bg-white/10">
              Retrieval Augmented
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 transition-colors hover:bg-white/10">
              Vector Sync
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 transition-colors hover:bg-white/10">
              Real-time Graph
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
