import type { Metadata } from 'next';
import { Providers } from './providers';
import Footer from '@/components/layout/Footer';
import './globals.css';
import '@/styles/fonts.css';

export const metadata: Metadata = {
  title: 'OpenBD - AGI Platform for Bangladesh',
  description: 'Advanced AI agents and AGI technology built for Bengali speakers',
  keywords: 'AI, AGI, Bangladesh, Bengali, Artificial Intelligence, Machine Learning',
  authors: [{ name: 'Likhon Sheikh' }],
  openGraph: {
    title: 'OpenBD - AGI Platform',
    description: 'Advanced AI agents for Bangladesh',
    url: 'https://openbd.ai',
    siteName: 'OpenBD',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.msar.me/fonts/kalpurush/font.css" rel="stylesheet" />
        <link href="https://cdn.msar.me/fonts/solaiman-lipi/font.css" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main style={{ flex: 1 }}>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}