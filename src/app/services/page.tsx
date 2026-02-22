import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Building2, BookOpen, Mic, Laptop, GraduationCap, RotateCcw, TrendingUp, Users2 } from 'lucide-react'

export const metadata: Metadata = { title: 'Services – HR Consulting, Training & Career Advisory' }

interface Service {
  name: string
  desc: string
  price: string
  priceNote: string
  features: string[]
  cta: string
  highlight?: boolean
}

interface Category {
  id: string
  icon: React.ElementType
  label: string
  tag: string
  tagColor: string
  headline: string
  subhead: string
  services: Service[]
}

const categories: Category[] = [
  {
    id: 'business',
    icon: Building2,
    label: 'For Founders & SMEs',
    tag: 'Revenue Foundation',
    tagColor: 'bg-brand-800 text-gold-300',
    headline: 'HR Consulting Services',
    subhead: 'High-trust, problem-solving services companies actively pay for.',
    services: [
      {
        name: 'Payroll & Compliance Management',
        desc: 'Monthly payroll processing, statutory compliance, documentation audits, PF/ESI guidance, and labour law alignment.',
        price: '₹8,000',
        priceNote: '/ month',
        features: ['Monthly payroll processing', 'PF & ESI filing guidance', 'Statutory compliance audit', 'Labour law alignment', 'Documentation review'],
        cta: 'Get Payroll Support',
      },
      {
        name: 'HR Policy & Process Setup',
        desc: 'Leave policies, attendance frameworks, performance review systems, onboarding/offboarding SOPs built for your business.',
        price: '₹15,000',
        priceNote: 'one-time',
        highlight: true,
        features: ['Leave & attendance policy', 'Performance review framework', 'Onboarding SOP', 'Offboarding checklist', 'Employee handbook outline'],
        cta: 'Build Your HR System',
      },
      {
        name: 'Virtual HR / Fractional HR Partner',
        desc: 'Ongoing HR support for startups or SMEs without an in-house HR team. Your dedicated HR partner, on-demand.',
        price: '₹12,000',
        priceNote: '/ month',
        features: ['Dedicated HR contact', 'HR queries answered within 24hrs', 'Policy updates & drafting', 'Hiring advisory', 'Monthly HR health check'],
        cta: 'Hire a Fractional HR',
      },
    ],
  },
  {
    id: 'training',
    icon: BookOpen,
    label: 'Training & Workshops',
    tag: 'Authority Builder',
    tagColor: 'bg-gold-100 text-gold-700',
    headline: 'Knowledge & Training Services',
    subhead: 'For small business owners, founders, managers, and junior HR professionals.',
    services: [
      {
        name: 'HR Compliance Workshop',
        desc: 'A focused session for founders and small business owners covering everything you need to stay legally compliant.',
        price: '₹3,500',
        priceNote: '/ session',
        features: ['PF, ESI, PT overview', 'Labour law basics', 'Common compliance traps', 'Q&A with HR expert', 'Resource toolkit included'],
        cta: 'Book Workshop',
      },
      {
        name: 'Workplace Etiquette & Communication',
        desc: 'Corporate behaviour, internal communication, and leadership basics — for teams and individual contributors.',
        price: '₹5,000',
        priceNote: '/ session',
        highlight: true,
        features: ['Professional communication', 'Email & meeting etiquette', 'Conflict handling basics', 'Leadership presence', 'Group exercises included'],
        cta: 'Book Training',
      },
      {
        name: 'Payroll & HR Basics Training',
        desc: 'For junior HR professionals who need a solid foundation in payroll processing and HR operations.',
        price: '₹4,500',
        priceNote: '/ person',
        features: ['Payroll processing walkthrough', 'Statutory deductions explained', 'HRMS tools overview', 'Common mistakes & fixes', 'Certificate included'],
        cta: 'Enrol Now',
      },
    ],
  },
  {
    id: 'podcast',
    icon: Mic,
    label: 'Podcast Services',
    tag: 'Brand Leverage',
    tagColor: 'bg-slate-100 text-slate-700',
    headline: 'Podcast-Driven Services',
    subhead: 'Use the podcast as a gateway to paid, high-value consulting sessions.',
    services: [
      {
        name: 'Founder HR Strategy Session',
        desc: 'Podcast listeners can book a paid 1:1 strategy call to discuss their specific HR challenges with the host.',
        price: '₹2,500',
        priceNote: '/ 60 min',
        highlight: true,
        features: ['1-on-1 with podcast host', 'Your specific HR scenario', 'Actionable next steps', 'Follow-up resource list', 'Recording available'],
        cta: 'Book Strategy Call',
      },
      {
        name: 'Workplace Problem Clinic',
        desc: 'Submit your anonymous HR challenge — real advice delivered via podcast + private written consultation.',
        price: '₹1,500',
        priceNote: '/ submission',
        features: ['Anonymous submission option', 'Featured on podcast episode', 'Private written response', 'Practical action plan', 'Peer learning value'],
        cta: 'Submit Your Problem',
      },
    ],
  },
  {
    id: 'digital',
    icon: Laptop,
    label: 'Digital & Scalable',
    tag: 'Future Growth',
    tagColor: 'bg-blue-50 text-blue-700',
    headline: 'Digital Offerings & Templates',
    subhead: 'Scalable products for self-starters and founders who prefer to DIY.',
    services: [
      {
        name: 'HR Templates & Toolkits',
        desc: 'Ready-to-use policies, onboarding checklists, payroll sheets, and appraisal formats built for Indian SMEs.',
        price: '₹999',
        priceNote: 'per toolkit',
        features: ['Offer letter templates', 'Onboarding checklist', 'Payroll input sheet', 'Leave policy template', 'Appraisal form'],
        cta: 'Buy Toolkit',
      },
      {
        name: 'Mini Courses',
        desc: '"HR Setup for Startups", "Compliance Simplified" — self-paced courses with real examples and frameworks.',
        price: '₹1,499',
        priceNote: 'per course',
        highlight: true,
        features: ['Self-paced video modules', 'Downloadable workbooks', 'Real case studies', 'Certificate on completion', 'Lifetime access'],
        cta: 'Browse Courses',
      },
    ],
  },
  {
    id: 'career',
    icon: GraduationCap,
    label: 'Career Services',
    tag: 'Career Advisory',
    tagColor: 'bg-emerald-50 text-emerald-700',
    headline: 'Career Launch & Advisory',
    subhead: 'For freshers, career-gap returners, transitioners, and experienced professionals.',
    services: [
      {
        name: 'Fresher Career Launch',
        desc: 'Resume & profile structuring, interview readiness, and workplace expectations coaching for first-time job seekers.',
        price: '₹2,000',
        priceNote: 'package',
        features: ['Resume structuring from scratch', 'LinkedIn profile setup', 'Interview readiness session', 'Workplace expectations guide', 'Email & follow-up etiquette'],
        cta: 'Launch Your Career',
      },
      {
        name: 'Career Restart Consulting',
        desc: 'For professionals returning after a career gap. Resume rebuilding, confidence coaching, and job market positioning.',
        price: '₹3,500',
        priceNote: 'package',
        highlight: true,
        features: ['Gap narrative strategy', 'Resume rebuild', 'Confidence & interview coaching', 'Market positioning advice', '2 mock interview rounds'],
        cta: 'Restart Your Career',
      },
      {
        name: 'Career Transition Guidance',
        desc: 'Skill mapping, resume realignment, and transition strategy for professionals changing roles or industries.',
        price: '₹3,000',
        priceNote: 'package',
        features: ['Skill gap mapping', 'Resume realignment', 'Target industry research', 'Transition roadmap', 'Networking strategy'],
        cta: 'Plan Your Transition',
      },
      {
        name: 'Experienced Professional Advisory',
        desc: 'Career growth planning, workplace navigation coaching, and communication strategy for mid-to-senior professionals.',
        price: '₹4,000',
        priceNote: 'package',
        features: ['Career growth roadmap', 'Workplace politics navigation', 'Leadership communication', 'Promotion strategy', '3 coaching sessions'],
        cta: 'Grow Your Career',
      },
    ],
  },
  {
    id: 'interview',
    icon: Users2,
    label: 'Interview Prep',
    tag: 'HR Insider Edge',
    tagColor: 'bg-rose-50 text-rose-700',
    headline: 'HR Insider Interview Prep',
    subhead: 'Coached by someone who has actually conducted hundreds of HR interviews.',
    services: [
      {
        name: 'HR Interview Prep Package',
        desc: 'Mock interviews, HR perspective coaching, and salary & negotiation guidance from an actual HR professional.',
        price: '₹2,500',
        priceNote: 'package',
        highlight: true,
        features: ['2 mock interview sessions', 'HR perspective debrief', 'Common HR question bank', 'STAR method coaching', 'Salary negotiation tactics', 'Offer evaluation guidance'],
        cta: 'Prep with an HR Insider',
      },
      {
        name: 'Resume & LinkedIn Optimisation',
        desc: 'Resume review and LinkedIn overhaul backed by what HR actually looks for — not just keywords.',
        price: '₹1,800',
        priceNote: 'package',
        features: ['ATS-focused resume review', 'LinkedIn headline & summary', 'Keyword strategy', 'Skills section audit', '1 revision round'],
        cta: 'Optimise Profile',
      },
    ],
  },
]

function ServiceCard({ s, ctaHref }: { s: Service; ctaHref: string }) {
  return (
    <div className={`rounded-2xl p-7 flex flex-col h-full border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${s.highlight ? 'border-gold-300 bg-gold-50 ring-2 ring-gold-200' : 'border-border bg-white'}`}>
      {s.highlight && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-gradient text-brand-900 text-xs font-semibold mb-4 w-fit">
          ★ Most Popular
        </div>
      )}
      <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>

      <div className="flex items-end gap-1.5 mb-5">
        <span className="font-display text-3xl font-bold text-foreground">{s.price}</span>
        <span className="text-muted-foreground text-sm mb-1">{s.priceNote}</span>
      </div>

      <ul className="space-y-2.5 mb-7 flex-1">
        {s.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-gold-500 mt-0.5 shrink-0" />
            <span className="text-sm text-foreground">{f}</span>
          </li>
        ))}
      </ul>

      <Link href={ctaHref}
        className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all ${s.highlight ? 'bg-gold-gradient text-brand-900 shadow-md shadow-gold-200 hover:opacity-90' : 'border-2 border-brand-800 text-brand-900 hover:bg-brand-800 hover:text-white'}`}
      >
        {s.cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">Everything We Offer</p>
          <h1 className="heading-hero text-white mb-6">Services & Pricing</h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto leading-relaxed">
            Every service has a clear price. No discovery call required to know what you're getting into.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 10C1200 50 960 70 720 40C480 10 240 -10 0 30Z" fill="#F9F7F4" /></svg>
        </div>
      </section>

      {/* Nav anchors */}
      <div className="sticky top-16 z-30 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
            {categories.map((c) => (
              <a key={c.id} href={`#${c.id}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-brand-900 hover:bg-background transition-colors whitespace-nowrap"
              >
                <c.icon className="h-3.5 w-3.5" />
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service categories */}
      {categories.map((cat, catIdx) => (
        <section key={cat.id} id={cat.id} className={`section-pad ${catIdx % 2 === 0 ? 'bg-background' : 'bg-white'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center">
                    <cat.icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cat.tagColor}`}>
                    {cat.tag}
                  </span>
                </div>
                <h2 className="heading-lg text-foreground mb-2">{cat.headline}</h2>
                <p className="text-muted-foreground">{cat.subhead}</p>
              </div>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-brand-800 text-brand-900 text-sm font-semibold hover:bg-brand-800 hover:text-white transition-all whitespace-nowrap"
              >
                Ask a Question <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className={`grid gap-6 ${cat.services.length === 2 ? 'md:grid-cols-2 max-w-3xl' : cat.services.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
              {cat.services.map((s) => (
                <ServiceCard key={s.name} s={s} ctaHref="/contact" />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-brand-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="heading-lg text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-white/70 mb-8 text-lg">Book a free 20-minute discovery call and we'll point you to the right place.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-brand-900 font-semibold shadow-xl shadow-gold-500/25 hover:opacity-90 transition-opacity"
          >
            Book Free Discovery Call <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
