import { Hexagon, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#0a0a0a] border-t border-white/[0.08] px-5 py-16 sm:px-8 md:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Top: Conversion Banner */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl shadow-2xl shadow-black/50 lg:flex-row lg:items-center lg:p-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Ready to redefine your workflow?
            </h2>
            <p className="mt-4 text-base text-white/70">
              Join the enterprises building the future of autonomous systems. Get in touch for a bespoke strategy session.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/30 focus:bg-white/10 sm:w-64"
            />
            <button className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/85">
              Book Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
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
              <a href="#" className="text-sm text-white/40 transition-colors hover:text-white">
                GitHub
              </a>
              <a href="#" className="text-sm text-white/40 transition-colors hover:text-white">
                X
              </a>
              <a href="#" className="text-sm text-white/40 transition-colors hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium text-white">Product</h4>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Features</a>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Integrations</a>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Enterprise</a>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Pricing</a>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium text-white">Resources</h4>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Documentation</a>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">API Reference</a>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Blog</a>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Case Studies</a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium text-white">Company</h4>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">About</a>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Careers</a>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Contact</a>
            <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
