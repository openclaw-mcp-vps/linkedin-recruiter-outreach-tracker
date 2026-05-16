import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RecruiterTrack — Optimize LinkedIn Outreach',
  description: 'Track recruiter response rates and optimize outreach with AI-powered message analysis and A/B testing.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2f27feef-e2bf-4c05-867c-7d372220c63c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
