import type { Metadata } from 'next'
import Image from 'next/image'
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
  { name: 'Youtube', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>, href: '#' },
  { name: 'Instagram', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>, href: '#' },
  { name: ' Facebook', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>, href: '#' },
  { name: 'Linkedin', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>, href: '#' },
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
               {/* <Image src="/LOGO.png" alt="FounderUnfiltered Logo" width={40} height={40} className="rounded-lg object-cover shrink-0" />
              <h1 className="heading-hero text-white mb-5">
                FounderUnfiltered9<br />
                <span className="gold-text">Podcast</span>
              </h1> */}
              <div className="flex items-center gap-3 mb-6">
  <Image
    src="/LOGO.png"
    alt="FounderUnfiltered Logo"
    width={48}
    height={48}
    className="rounded-lg"
  />

<h1 className="text-3xl lg:text-4xl font-bold text-white whitespace-nowrap">
  FounderUnfiltered <span className="gold-text">Podcast</span>
</h1>
</div>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                Real HR conversations for founders, professionals, and anyone who's ever been confused, blindsided, or burned by the world of work. No corporate script. No filler.
We connect with entrepreneurs and businessmen to break down how their businesses work—from idea to execution. We discuss business models, management strategies, failures, and growth stories to help new entrepreneurs learn faster and smarter.

              </p>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
              Perfect for anyone who wants to start a business or improve the one they already have.
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
                    <div className="text-gold-300 text-sm">Episodes Comming soon .. · Weekly</div>
                  </div>
                </div>

                <div className="p-4 bg-white/10 rounded-xl mb-4">
                  {/* <div className="text-xs text-gold-300 font-semibold mb-1">NOW PLAYING — EP 42</div> */}
                  {/* <div className="font-semibold text-sm mb-3">The Payroll Mistake That Almost Shut Down a Startup</div> */}
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
                <h3 className="font-display text-2xl font-bold mb-3">You are welcome on our Podcast</h3>
                <p className="text-white/75 leading-relaxed mb-6">
                  If you’re a founder, leader, or professional with real experiences and insights to share, we’d love to hear from you. If you’re interested in being a guest on the Founders Unfiltered9 podcast, feel free to connect with us. We’re always looking to have honest conversations with people who have meaningful stories, lessons, and perspectives that can inspire and help others in their journey. 🎙️
                </p>
                <div className="flex items-center justify-between mb-6 p-4 bg-white/10 rounded-xl border border-white/20">
                  <div>
                    <div className="text-gold-300 text-xs font-semibold">Founder HR Strategy Session</div>
                    {/* <div className="font-display text-2xl font-bold">₹2,500</div> */}
                    {/* <div className="text-white/60 text-xs">/ 60 min</div> */}
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

            {/* <div className="bg-background rounded-2xl p-10 border border-border">
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
