import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | FounderUnfiltered9',
    default: 'FounderUnfiltered9 – Real HR. Real Business. No Fluff.',
  },
  description:
    'HR consulting, compliance, training, and career advisory services for startups, SMEs, and professionals. Powered by real HR expertise.',
  keywords: ['HR consulting', 'payroll compliance', 'startup HR', 'career coaching', 'HR training', 'fractional HR'],
  authors: [{ name: 'FounderUnfiltered9' }],
  openGraph: {
    type: 'website',
    siteName: 'FounderUnfiltered9',
    title: 'FounderUnfiltered9 – Real HR. Real Business. No Fluff.',
    description: 'HR consulting and career advisory for founders, SMEs, and professionals.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-background text-foreground antialiased font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
