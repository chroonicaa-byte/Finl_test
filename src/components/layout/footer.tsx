import Link from 'next/link'
import Image from "next/image"
import { Mic, Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center">
                {/* <span className="text-brand-900 font-bold text-sm font-display">FU</span> */}
                <Image src="/LOGO.png" alt="FounderUnfiltered Logo" width={40} height={40} className="rounded-lg object-cover shrink-0" />
              </div>
              <div className="leading-tight">
                {/* <div className="font-display font-bold text-white">FounderUnfiltered</div>
                <div className="text-gold-400 text-xs tracking-widest">9</div> */}
                    {/* <Image src="/LOGO.png" alt="FounderUnfiltered Logo" width={40} height={40} className="rounded-lg object-cover shrink-0" /> */}
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm">
              Real HR expertise for founders, SMEs, and professionals. Payroll compliance, fractional HR, career coaching — unfiltered, practical, results-driven.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Mail, href: 'mailto:hello@founderunfiltered9.com' },
                { icon: Mic, href: '/podcast' },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold-500/30 flex items-center justify-center transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Payroll & Compliance', 'HR Policy Setup', 'Virtual HR Partner', 'Career Advisory', 'Interview Prep', 'HR Training'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-white/65 hover:text-gold-300 text-sm transition-colors flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '/about' },
                // { label: 'Pricing', href: '/pricing' },
                { label: 'Podcast', href: '/podcast' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/65 hover:text-gold-300 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-gold-400 font-semibold mb-1">🎙 New Episode Live</p>
              <p className="text-xs text-white/60">FounderUnfiltered9 Podcast — listen now</p>
              <Link href="/podcast" className="text-xs text-gold-300 hover:text-gold-200 mt-1 inline-flex items-center gap-1">
                Listen <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} FounderUnfiltered9. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
