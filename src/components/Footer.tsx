import { Hexagon, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      {/* Top transition mask to smooth canvas fade into footer */}
      <div className="bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent h-48 -mt-48 pointer-events-none relative z-10" aria-hidden="true" />
      
      <footer id="contact" className="relative z-10 w-full bg-[#0a0a0a] border-t border-white/[0.08] px-5 py-16 sm:px-8 md:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Top: Conversion Banner */}
          <div className="mb-20 flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/[0.12] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-2xl shadow-2xl shadow-black/50 lg:flex-row lg:items-center lg:p-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Ready to redefine your workflow?
              </h2>
              <p className="mt-4 text-base text-white/70">
                Join the enterprises building the future of autonomous systems. Get in touch for a bespoke strategy session.
              </p>
            </div>
            <div className="w-full sm:w-auto">
              {submitted ? (
                <div className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-6 sm:w-[380px]">
                  <CheckCircle2 size={16} className="text-green-400" />
                  <span className="text-sm font-medium text-green-400">Check your inbox — invite sent!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/40 focus:ring-1 focus:ring-white/30 sm:w-64"
                  />
                  <button type="submit" className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/85">
                    Book Consultation
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom: Links Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {/* Logo & Social */}
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="flex items-center gap-2 text-white no-underline">
                <Hexagon size={24} strokeWidth={1.5} />
                <span className="text-xl font-medium tracking-tight">novaai</span>
              </a>
              <p className="mt-4 text-xs text-white/50">
                © {new Date().getFullYear()} NovaAI Technologies Inc. All rights reserved.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a href="#" className="text-sm text-white/40 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  GitHub
                </a>
                <a href="#" className="text-sm text-white/40 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  X
                </a>
                <a href="#" className="text-sm text-white/40 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Product */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-white">Product</h4>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Features</a>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Integrations</a>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Enterprise</a>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Pricing</a>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-white">Resources</h4>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Documentation</a>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">API Reference</a>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Blog</a>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Case Studies</a>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-white">Company</h4>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">About</a>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Careers</a>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Contact</a>
              <a href="#" className="text-sm text-white/60 transition-all duration-300 hover:text-white hover:underline hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
