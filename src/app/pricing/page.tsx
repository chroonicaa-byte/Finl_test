// import type { Metadata } from 'next'
// import Link from 'next/link'
// import { ArrowRight, CheckCircle2, X, Zap } from 'lucide-react'

// export const metadata: Metadata = { title: 'Pricing – Transparent HR Service Plans' }

// const plans = [
//   {
//     name: 'Starter',
//     tagline: 'For freshers & first-jobbers',
//     price: '₹2,000',
//     period: 'one-time',
//     highlight: false,
//     badge: null,
//     desc: 'Everything a first-time job seeker needs to enter the market with confidence.',
//     features: [
//       { text: 'Resume structuring & review', yes: true },
//       { text: 'LinkedIn profile setup', yes: true },
//       { text: 'Interview readiness session', yes: true },
//       { text: 'Workplace expectations guide', yes: true },
//       { text: 'Mock interview (1 round)', yes: false },
//       { text: 'HR insider coaching', yes: false },
//       { text: 'Salary negotiation guidance', yes: false },
//       { text: 'HR policy or compliance support', yes: false },
//     ],
//     cta: 'Get Started',
//   },
//   {
//     name: 'Professional',
//     tagline: 'For career builders & transitioners',
//     price: '₹4,500',
//     period: 'one-time',
//     highlight: true,
//     badge: 'Most Popular',
//     desc: 'For experienced professionals, career restarters, and those making a strategic move.',
//     features: [
//       { text: 'Full resume rebuild', yes: true },
//       { text: 'LinkedIn optimisation', yes: true },
//       { text: '2 mock interview sessions', yes: true },
//       { text: 'HR insider coaching', yes: true },
//       { text: 'Salary & negotiation guidance', yes: true },
//       { text: 'Transition / gap narrative strategy', yes: true },
//       { text: 'HR policy or compliance support', yes: false },
//       { text: 'Fractional HR access', yes: false },
//     ],
//     cta: 'Get Professional',
//   },
//   {
//     name: 'Business Starter',
//     tagline: 'For early-stage founders & SMEs',
//     price: '₹18,000',
//     period: 'one-time setup',
//     highlight: false,
//     badge: null,
//     desc: 'One-time HR foundation setup for startups building their people systems from scratch.',
//     features: [
//       { text: 'HR Policy & Process Setup', yes: true },
//       { text: 'Offer letter & contract templates', yes: true },
//       { text: 'Onboarding & offboarding SOP', yes: true },
//       { text: 'Compliance checklist', yes: true },
//       { text: 'Payroll guidance session', yes: true },
//       { text: 'Fractional HR monthly retainer', yes: false },
//       { text: 'Ongoing payroll processing', yes: false },
//       { text: 'Priority HR support', yes: false },
//     ],
//     cta: 'Build Your HR',
//   },
//   {
//     name: 'Business Pro',
//     tagline: 'For growing SMEs needing ongoing HR',
//     price: '₹12,000',
//     period: '/ month',
//     highlight: false,
//     badge: 'Best Value',
//     desc: 'A fractional HR partner + payroll management on a monthly retainer.',
//     features: [
//       { text: 'Monthly payroll processing', yes: true },
//       { text: 'PF, ESI & statutory compliance', yes: true },
//       { text: 'Dedicated HR contact', yes: true },
//       { text: 'Policy updates & drafting', yes: true },
//       { text: 'Hiring advisory', yes: true },
//       { text: 'Monthly HR health report', yes: true },
//       { text: 'Compliance workshop (quarterly)', yes: true },
//       { text: 'Priority 24hr support', yes: true },
//     ],
//     cta: 'Start Retainer',
//   },
// ]

// const addOns = [
//   { name: 'HR Templates Toolkit', price: '₹999', desc: 'Policies, checklists, payroll sheets' },
//   { name: 'Mini Course (per course)', price: '₹1,499', desc: '"HR for Startups", "Compliance Simplified"' },
//   { name: 'Compliance Workshop', price: '₹3,500', desc: 'Per session, up to 10 attendees' },
//   { name: 'Podcast Strategy Session', price: '₹2,500', desc: '60-min paid call with podcast host' },
//   { name: 'Workplace Problem Clinic', price: '₹1,500', desc: 'Anon submission + written consultation' },
//   { name: 'Career Transition Guidance', price: '₹3,000', desc: 'Skill mapping + transition roadmap' },
// ]

// export default function PricingPage() {
//   return (
//     <>
//       {/* Hero */}
//       <section className="bg-brand-gradient pt-32 pb-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-hero-pattern" />
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-gold-300 text-sm font-medium mb-6">
//             <Zap className="h-3.5 w-3.5" /> Transparent Pricing — No Surprises
//           </div>
//           <h1 className="heading-hero text-white mb-6">Simple, Honest Pricing</h1>
//           <p className="text-white/75 text-xl max-w-2xl mx-auto">
//             No retainer traps. No hidden fees. Pay for exactly what you need.
//           </p>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 10C1200 50 960 70 720 40C480 10 240 -10 0 30Z" fill="#F9F7F4" /></svg>
//         </div>
//       </section>

//       {/* Plans */}
//       <section className="section-pad bg-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
//             {plans.map((plan) => (
//               <div key={plan.name}
//                 className={`rounded-2xl flex flex-col h-full transition-all duration-300 ${plan.highlight ? 'border-2 border-gold-400 shadow-2xl shadow-gold-200/40 ring-4 ring-gold-100 relative' : 'border border-border bg-white shadow-sm hover:shadow-md'} ${plan.highlight ? 'bg-white' : ''}`}
//               >
//                 {plan.badge && (
//                   <div className="absolute -top-3.5 left-0 right-0 flex justify-center">
//                     <span className="px-4 py-1 rounded-full bg-gold-gradient text-brand-900 text-xs font-bold shadow-md">
//                       {plan.badge}
//                     </span>
//                   </div>
//                 )}

//                 <div className="p-7 pb-0 pt-8">
//                   <p className="text-gold-600 text-xs font-semibold tracking-widest uppercase mb-1">{plan.tagline}</p>
//                   <h3 className="font-display text-xl font-bold text-foreground mb-1">{plan.name}</h3>
//                   <div className="flex items-end gap-1.5 mt-3 mb-2">
//                     <span className="font-display text-4xl font-bold">{plan.price}</span>
//                     <span className="text-muted-foreground text-sm mb-1.5">{plan.period}</span>
//                   </div>
//                   <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.desc}</p>
//                 </div>

//                 <div className="px-7 flex-1">
//                   <ul className="space-y-3 mb-7">
//                     {plan.features.map((f) => (
//                       <li key={f.text} className="flex items-start gap-2.5">
//                         {f.yes
//                           ? <CheckCircle2 className="h-4 w-4 text-gold-500 mt-0.5 shrink-0" />
//                           : <X className="h-4 w-4 text-muted-foreground/30 mt-0.5 shrink-0" />}
//                         <span className={`text-sm ${f.yes ? 'text-foreground' : 'text-muted-foreground/40'}`}>{f.text}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="p-7 pt-0">
//                   <Link href="/contact"
//                     className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all ${plan.highlight ? 'bg-gold-gradient text-brand-900 shadow-md hover:opacity-90' : 'border-2 border-brand-800 text-brand-900 hover:bg-brand-800 hover:text-white'}`}
//                   >
//                     {plan.cta} <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Add-ons */}
//       <section className="section-pad bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <p className="text-gold-600 text-sm font-semibold tracking-widest uppercase mb-3">À La Carte</p>
//             <h2 className="heading-xl mb-4">Add-On Services</h2>
//             <p className="text-muted-foreground text-lg max-w-xl mx-auto">
//               Pick exactly what you need — no need to commit to a full package.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
//             {addOns.map((a) => (
//               <div key={a.name} className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-background card-lift">
//                 <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center shrink-0">
//                   <span className="font-display font-bold text-gold-600 text-sm">{a.price.replace('₹', '')}</span>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-sm text-foreground mb-0.5">{a.name}</div>
//                   <div className="text-xs text-muted-foreground">{a.desc}</div>
//                   <div className="font-display font-bold text-gold-600 mt-1">{a.price}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Guarantee */}
//       <section className="py-16 bg-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
//           <div className="text-center p-10 rounded-2xl border border-gold-200 bg-gold-50">
//             <div className="text-4xl mb-4">🛡️</div>
//             <h3 className="heading-md mb-3">Our Commitment</h3>
//             <p className="text-muted-foreground leading-relaxed">
//               If our service doesn't deliver what we promised, we'll redo it — no arguments, no extra charge. Every engagement comes with a clear scope so you know exactly what you're getting.
//             </p>
//             <Link href="/contact"
//               className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-gold-gradient text-brand-900 font-semibold text-sm shadow-md hover:opacity-90 transition-opacity"
//             >
//               Talk to Us <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

export default function PricingPage() {
  return <div>Pricing Page</div>;
}