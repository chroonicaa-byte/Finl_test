import type { Metadata } from 'next'
import Link from 'next/link'
import { Mic, Play, ArrowRight, Headphones, Calendar, ExternalLink } from 'lucide-react'

export const metadata: Metadata = { title: 'Podcast – FounderUnfiltered9' }

const episodes = [
  {
    ep: 'EP 42',
    title: 'The Payroll Mistake That Almost Shut Down a Startup',
    desc: 'A founder skipped PF registration for 8 months. Here\'s what happened, the penalty they paid, and exactly how they fixed it.',
    duration: '38 min',
    topic: 'Compliance',
    topicColor: 'bg-red-50 text-red-700',
    new: true,
  },
  {
    ep: 'EP 41',
    title: 'How to Answer "Why Did You Leave?" When You Got Fired',
    desc: 'The honest, strategic way to handle the most feared interview question — from someone who\'s asked it 500 times.',
    duration: '28 min',
    topic: 'Interview Prep',
    topicColor: 'bg-blue-50 text-blue-700',
    new: false,
  },
  {
    ep: 'EP 40',
    title: 'Building a Leave Policy That Doesn\'t Breed Resentment',
    desc: 'Most leave policies fail because they treat employees like liabilities. Here\'s how to build one that actually works.',
    duration: '34 min',
    topic: 'HR Policy',
    topicColor: 'bg-green-50 text-green-700',
    new: false,
  },
  {
    ep: 'EP 39',
    title: 'Career Gaps in 2024: What HR Really Thinks',
    desc: 'Straight talk on how modern HR views career breaks — and what you need to say to turn a gap into a strength.',
    duration: '31 min',
    topic: 'Career Advisory',
    topicColor: 'bg-purple-50 text-purple-700',
    new: false,
  },
  {
    ep: 'EP 38',
    title: 'Why Your Startup Doesn\'t Need a Full-Time HR Manager Yet',
    desc: 'When to hire in-house, when to outsource, and what you can handle yourself — a framework for founders at every stage.',
    duration: '42 min',
    topic: 'Fractional HR',
    topicColor: 'bg-amber-50 text-amber-700',
    new: false,
  },
  {
    ep: 'EP 37',
    title: 'Salary Negotiation: What HR Expects You to Know',
    desc: 'The tactics that work, the ones that backfire, and how to counter an offer without sounding greedy.',
    duration: '26 min',
    topic: 'Negotiation',
    topicColor: 'bg-teal-50 text-teal-700',
    new: false,
  },
]

const platforms = [
  { name: 'Spotify', icon: '🎵', href: '#' },
  { name: 'Apple Podcasts', icon: '🎙', href: '#' },
  { name: 'Google Podcasts', icon: '▶️', href: '#' },
  { name: 'YouTube', icon: '📺', href: '#' },
]

const topics = ['Compliance', 'Interview Prep', 'HR Policy', 'Career Advisory', 'Fractional HR', 'Negotiation', 'Payroll', 'Leadership']

export default function PodcastPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <div className="w-96 h-96 rounded-full bg-gold-500 blur-[120px] ml-auto mt-20" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gold-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                New Episode Every Week
              </div>
              <h1 className="heading-hero text-white mb-5">
                FounderUnfiltered9<br />
                <span className="gold-text">Podcast</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                Real HR conversations for founders, professionals, and anyone who's ever been confused, blindsided, or burned by the world of work. No corporate script. No filler.
              </p>
              <div className="flex flex-wrap gap-3">
                {platforms.map((p) => (
                  <a key={p.name} href={p.href}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                  >
                    <span>{p.icon}</span> {p.name} <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Podcast card visual */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center">
                    <Mic className="h-8 w-8 text-brand-900" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl">FounderUnfiltered9</div>
                    <div className="text-gold-300 text-sm">42 Episodes · Weekly</div>
                  </div>
                </div>

                <div className="p-4 bg-white/10 rounded-xl mb-4">
                  <div className="text-xs text-gold-300 font-semibold mb-1">NOW PLAYING — EP 42</div>
                  <div className="font-semibold text-sm mb-3">The Payroll Mistake That Almost Shut Down a Startup</div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-gold-gradient rounded-full" />
                    </div>
                    <span className="text-xs text-white/60">15:24 / 38:00</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">⏮</button>
                  <button className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Play className="h-6 w-6 text-brand-900 ml-0.5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">⏭</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 10C1200 50 960 70 720 40C480 10 240 -10 0 30Z" fill="#F9F7F4" /></svg>
        </div>
      </section>

      {/* Topic filter */}
      <section className="py-10 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-muted-foreground mr-2">Topics:</span>
            {topics.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full bg-white border border-border text-sm text-foreground hover:border-gold-400 hover:text-gold-700 cursor-pointer transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="section-pad bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-1">All Episodes</p>
              <h2 className="heading-lg">Latest from the Podcast</h2>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Headphones className="h-4 w-4" /> 42 episodes
            </div>
          </div>

          <div className="space-y-4">
            {episodes.map((ep) => (
              <div key={ep.ep}
                className="group bg-white rounded-2xl border border-border p-6 hover:border-gold-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-brand-gradient flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Play className="h-6 w-6 text-gold-400 ml-0.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-muted-foreground">{ep.ep}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${ep.topicColor}`}>{ep.topic}</span>
                      {ep.new && <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gold-100 text-gold-700 border border-gold-200">NEW</span>}
                    </div>
                    <h3 className="font-display font-bold text-foreground group-hover:text-gold-700 transition-colors mb-1.5">{ep.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{ep.desc}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0 pl-4">
                    <span className="text-xs text-muted-foreground">{ep.duration}</span>
                    <ArrowRight className="h-4 w-4 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paid session CTA */}
      <section className="section-pad bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-brand-gradient rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-hero-pattern" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-5">
                  <Calendar className="h-6 w-6 text-brand-900" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Book a Strategy Session</h3>
                <p className="text-white/75 leading-relaxed mb-6">
                  Heard something on the podcast that applies to your situation? Book a paid 1:1 call with the host and go deep on your specific challenge.
                </p>
                <div className="flex items-center justify-between mb-6 p-4 bg-white/10 rounded-xl border border-white/20">
                  <div>
                    <div className="text-gold-300 text-xs font-semibold">Founder HR Strategy Session</div>
                    <div className="font-display text-2xl font-bold">₹2,500</div>
                    <div className="text-white/60 text-xs">/ 60 min</div>
                  </div>
                  <div className="text-right text-xs text-white/60">
                    <div>Limited slots</div>
                    <div>per week</div>
                  </div>
                </div>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-brand-900 font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Book Session <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-10 border border-border">
              <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center mb-5">
                <Mic className="h-6 w-6 text-gold-600" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Workplace Problem Clinic</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Submit your anonymous HR challenge and get real advice — featured on the podcast and delivered privately in writing. Real problems. Real answers.
              </p>
              <div className="p-4 bg-white rounded-xl border border-border mb-6">
                <div className="text-xs font-semibold text-muted-foreground mb-1">Workplace Problem Clinic</div>
                <div className="font-display text-2xl font-bold text-foreground">₹1,500</div>
                <div className="text-muted-foreground text-xs">per submission</div>
              </div>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-800 text-brand-900 font-semibold text-sm hover:bg-brand-800 hover:text-white transition-all"
              >
                Submit Your Problem <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
