import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/global.scss'
import { Providers } from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nguyễn Thu Huệ',
  description: 'My website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

/**
 *    TODO: 
 *    Heartbeat function: Need to store a table of number of sessions / task + add another field for task arn that the sesison is running    
 */