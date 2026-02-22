'use client'

import { useState } from 'react'
import { Mail, Linkedin, Mic, MapPin, Send, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const inquiryTypes = [
  'Payroll & Compliance',
  'HR Policy Setup',
  'Virtual / Fractional HR',
  'HR Training Workshop',
  'Career Advisory',
  'Interview Prep',
  'Podcast Strategy Session',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', inquiry: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required'
    if (!form.inquiry) errs.inquiry = 'Please select an inquiry type'
    if (form.message.trim().length < 15) errs.message = 'Please tell us a bit more'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    const subject = `[FounderUnfiltered9] ${form.inquiry} Inquiry from ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nInquiry: ${form.inquiry}\n\n${form.message}`
    window.location.href = `mailto:hello@founderunfiltered9.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSuccess(true)
    setForm({ name: '', email: '', inquiry: '', message: '' })
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gradient pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="heading-hero text-white mb-5">Let's Talk</h1>
          <p className="text-white/75 text-xl max-w-xl mx-auto">
            Whether it's a quick question or a serious engagement — every conversation starts here.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 10C1200 50 960 70 720 40C480 10 240 -10 0 30Z" fill="#F9F7F4" /></svg>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Info panel */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="heading-md mb-3">Contact Details</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All messages are responded to within 24 business hours. For urgent compliance matters, email directly.
                </p>
              </div>

              {[
                { icon: Mail, label: 'Email', value: 'hello@founderunfiltered9.com', href: 'mailto:hello@founderunfiltered9.com' },
                { icon: Linkedin, label: 'LinkedIn', value: '/in/founderunfiltered9', href: 'https://linkedin.com' },
                { icon: Mic, label: 'Podcast', value: 'FounderUnfiltered9 Podcast', href: '/podcast' },
                { icon: MapPin, label: 'Based In', value: 'Bengaluru, India', href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-brand-gradient flex items-center justify-center shrink-0">
                    <item.icon className="h-4.5 w-4.5 text-gold-400 h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:text-gold-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick links */}
              <div className="p-5 bg-gold-50 rounded-xl border border-gold-200 mt-4">
                <p className="text-sm font-semibold text-gold-700 mb-3">Common Reasons to Reach Out</p>
                <div className="space-y-2">
                  {['Book a free discovery call', 'Ask about fractional HR pricing', 'Request a compliance audit', 'Book podcast strategy session'].map((r) => (
                    <div key={r} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ArrowRight className="h-3 w-3 text-gold-500 shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-border shadow-lg p-8">
                {success ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="font-display text-2xl font-bold mb-2">Opening Your Mail App…</h3>
                    <p className="text-muted-foreground mb-6 text-sm">
                      If it didn't open,{' '}
                      <a href="mailto:hello@founderunfiltered9.com" className="text-gold-600 underline font-medium">
                        email us directly
                      </a>.
                    </p>
                    <button onClick={() => setSuccess(false)}
                      className="px-5 py-2.5 rounded-xl border-2 border-brand-800 text-brand-900 text-sm font-semibold hover:bg-brand-800 hover:text-white transition-all">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Vikram Anand"
                          value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }) }}
                          error={errors.name} />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="vikram@company.com"
                          value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }) }}
                          error={errors.email} />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="inquiry">What can we help with?</Label>
                      <select id="inquiry"
                        value={form.inquiry}
                        onChange={(e) => { setForm({ ...form, inquiry: e.target.value }); setErrors({ ...errors, inquiry: '' }) }}
                        className={`flex h-11 w-full rounded-lg border bg-white px-4 py-2 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${errors.inquiry ? 'border-destructive' : 'border-input'}`}
                      >
                        <option value="">Select inquiry type…</option>
                        {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.inquiry && <p className="text-xs text-destructive mt-1">{errors.inquiry}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message">Tell us more</Label>
                      <Textarea id="message" rows={5}
                        placeholder="Describe your situation, challenge, or what you're looking for…"
                        value={form.message} onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                        error={errors.message} />
                    </div>

                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gold-gradient text-brand-900 font-semibold text-sm shadow-md hover:opacity-90 transition-opacity"
                    >
                      <Send className="h-4 w-4" /> Send Message
                    </button>
                    <p className="text-xs text-center text-muted-foreground">Opens your email client with the message pre-filled.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
