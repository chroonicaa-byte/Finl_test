import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mic, Building2, Users, GraduationCap, Star, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FounderUnfiltered9 – HR Leadership. Real Business Conversations.',
}

const pillars = [

  {
    icon: GraduationCap,
    label: 'For Professionals & Freshers',
    title: 'Career advisory from people who sit on the other side of the table',
    desc: 'Resume strategy, interview coaching, career transitions — guided by real HR insiders.',
    href: '/services#career',
    color: 'from-gold-600 to-gold-500',
  },
  {
    icon: Mic,
    label: 'The Podcast',
    title: 'Founders Unfiltered9 is a podcast where we break down real business journeys ',
    desc: 'From zero to profitability. No gyaan, no theory — only practical insights, mistakes, and systems that actually work.',
    href: '/podcast',
    color: 'from-slate-700 to-slate-800',
  },
]

const trustPoints = [
  'Real conversations with founders and professionals',
  'Insights from real business journeys',
  'Practical career guidance from HR leaders',
  'Lessons from hiring mistakes and leadership decisions',
]

const testimonials = [
  {
    name: 'Vikram Anand',
    role: 'Founder, TechSprout',
    text: 'We were running payroll completely wrong for 18 months. One session with FounderUnfiltered9 fixed our compliance gaps and saved us from a major fine.',
    initials: 'VA',
  },
  {
    name: 'Sneha Pillai',
    role: 'HR Manager, RetailEdge',
    text: 'The HR Policy Setup service gave us a complete framework in two weeks. What would have taken us months of guesswork was done professionally.',
    initials: 'SP',
  },
  {
    name: 'Arjun Desai',
    role: 'MBA Graduate',
    text: 'Career restart coaching helped me reposition after a 14-month gap. Got a role at a Series B startup within 6 weeks of our sessions.',
    initials: 'AD',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-brand-gradient flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-100" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold-500 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gold-300 text-sm font-medium mb-8 animate-fade-in">
              <Mic className="h-3.5 w-3.5" />
              {/* <span>HR Consulting · Training · Career Advisory · Podcast</span> */}
              <span>Consulting · Training · Career Advisory · Podcast</span>
            </div>

            <h1 className="heading-hero text-white mb-6 animate-slide-up">
              Real People.<br />
              <span className="gold-text">Real Business.</span><br />
               Real Growth.
            </h1>

            <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-2xl animate-slide-up-2">
              Real HR conversations for founders, professionals, and anyone navigating the world of work.
No corporate scripts. Only practical insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-3">
              <Link href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-brand-900 font-semibold text-base shadow-xl shadow-gold-500/25 hover:opacity-90 transition-opacity"
              >
                Enquire Now <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/podcast"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/25 text-white font-medium text-base hover:bg-white/10 transition-colors"
              >
                <Mic className="h-5 w-5 text-gold-400" /> Listen to Podcast
              </Link>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 65 960 85 720 55C480 25 240 0 0 45Z" fill="#F9F7F4" />
          </svg>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="section-pad bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="heading-xl text-foreground mb-4">We Help You In</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Business , career advisory, and a podcast — all built on one thing: real HR experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <Link key={p.title} href={p.href}
                className="group relative rounded-2xl overflow-hidden card-lift border border-border bg-white"
              >
                <div className={`h-2 bg-gradient-to-r ${p.color}`} />
                <div className="p-8">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${p.color} text-white text-xs font-semibold mb-5`}>
                    <p.icon className="h-3.5 w-3.5" />
                    {p.label}
                  </div>
                  <h3 className="heading-md text-foreground mb-3 group-hover:text-gold-600 transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex items-center gap-1 text-gold-600 text-sm font-semibold">
                    Learn more <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-pad bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">Why FounderUnfiltered9</p>
              <h2 className="heading-xl mb-6">HR Advice From Someone Who's Actually Done the Job</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Most HR consultants give you templates. We give you context — the same judgment a seasoned HR professional uses when sitting across from a founder or candidate.
              </p>
              <div className="space-y-3">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-gold-600 font-semibold hover:text-gold-700 transition-colors">
                Our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Stats card */}
            {/*   <div className="relative">
              <div className="bg-brand-gradient rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { value: '150+', label: 'Businesses Supported' },
                    { value: '500+', label: 'Professionals Coached' },
                    { value: '8 yrs', label: 'HR Experience' },
                    { value: '40+', label: 'Podcast Episodes' },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="font-display text-3xl font-bold gold-text">{s.value}</div>
                      <div className="text-white/60 text-xs mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-white/10 rounded-xl border border-white/10 text-sm text-white/80 leading-relaxed italic">
                  "I don't give you what you want to hear. I give you what HR actually thinks — so you can use it."
                  <div className="text-gold-400 font-semibold mt-2 not-italic">— FounderUnfiltered9</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white shadow-xl rounded-xl px-4 py-3 border border-border">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Mic className="h-4 w-4 text-gold-500" />
                  Podcast Live Every Week
                </div>
              </div>
            </div>   */}
            
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-pad bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">Client Stories</p>
            <h2 className="heading-xl mb-4">Results Speak Louder</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-border card-lift">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white font-semibold text-sm font-display">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-brand-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-100" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="heading-xl text-white mb-5">Let’s Talk About Real Work and Real Business.</h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Whether you need compliance support, a fractional HR partner, or career coaching — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-brand-900 font-semibold shadow-xl shadow-gold-500/25 hover:opacity-90 transition-opacity"
            >
              Book a Call <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/25 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
