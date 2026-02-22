import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Mic, Target, Heart, Zap, Award } from 'lucide-react'

export const metadata: Metadata = { title: 'About – Real HR. Real Story.' }

const values = [
  { icon: Target, title: 'Outcome-Obsessed', desc: 'Every recommendation we make is tied to a real business or career result — not theoretical best practice.' },
  { icon: Heart, title: 'Human-First HR', desc: 'HR isn\'t paperwork. It\'s people. We build systems that respect both the founder\'s constraints and the employee\'s dignity.' },
  { icon: Zap, title: 'Practical Over Perfect', desc: 'You don\'t need a 40-page HR manual. You need the right 5 policies that your team will actually follow.' },
  { icon: Award, title: 'Insider Perspective', desc: 'We\'ve sat on both sides of the table — interviewing, hiring, coaching, and advising. That perspective is our edge.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
          <div className="w-96 h-96 rounded-full bg-gold-500 blur-[100px] ml-auto mt-20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">About Us</p>
            <h1 className="heading-hero text-white mb-6">
              HR Without the Corporate Script
            </h1>
            <p className="text-white/75 text-xl leading-relaxed">
              FounderUnfiltered9 exists because most HR advice is either too generic, too expensive, or too disconnected from how small businesses actually operate.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 10C1200 50 960 70 720 40C480 10 240 -10 0 30Z" fill="#F9F7F4" /></svg>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">The Story</p>
              <h2 className="heading-xl mb-6">Built From 8 Years Inside HR</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                FounderUnfiltered9 was built by an HR professional who spent years inside companies — processing payroll, building policies, running interviews, and watching businesses make the same avoidable HR mistakes over and over.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The consulting practice started because founders kept asking: <em>"Can you just help us get this right?"</em> The podcast started because thousands more needed the same answers but couldn't afford a consultant.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, FounderUnfiltered9 serves startups, SMEs, freshers, career-breakers, and professionals who want HR advice without the jargon — and results without the fluff.
              </p>
              <Link href="/services"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gold-gradient text-brand-900 font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                See What We Offer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="bg-brand-gradient rounded-2xl p-8 text-white">
                <Mic className="h-8 w-8 text-gold-400 mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">The Podcast Side</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  FounderUnfiltered9 Podcast covers real workplace problems — compliance nightmares, difficult hires, career pivots, salary negotiations — without the corporate filter. Every episode is a free clinic. Every booking is a paid one.
                </p>
                <Link href="/podcast" className="inline-flex items-center gap-1 text-gold-400 text-sm font-semibold mt-4 hover:text-gold-300">
                  Listen to episodes <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border">
                <h3 className="font-display text-lg font-bold mb-4">Who We Work With</h3>
                <div className="space-y-3">
                  {[
                    { emoji: '🏢', text: 'Startups (5–100 employees) building their first HR systems' },
                    { emoji: '🧑‍💼', text: 'SME founders navigating payroll and compliance for the first time' },
                    { emoji: '🎓', text: 'Freshers and students entering the job market' },
                    { emoji: '🔄', text: 'Professionals restarting after a career gap' },
                    { emoji: '📈', text: 'Experienced professionals planning their next move' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-base">{item.emoji}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="heading-xl mb-4">Our Working Principles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-background rounded-2xl p-7 border border-border card-lift">
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center mb-5">
                  <v.icon className="h-6 w-6 text-gold-600" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="heading-lg text-white mb-4">Let's Talk — No Pitch, No Pressure</h2>
          <p className="text-white/70 mb-8 text-lg">A 20-minute discovery call is all it takes to figure out how we can help.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-brand-900 font-semibold shadow-xl shadow-gold-500/25 hover:opacity-90 transition-opacity"
          >
            Book Discovery Call <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
