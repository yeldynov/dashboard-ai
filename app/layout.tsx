import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'Dashboard AI',
  description: 'Transform your photo search with AI precision',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='flex max-w-screen-APPLE font-rubik mx-auto container w-full bg-[#f7f8fa] overflow-scroll flex-col'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
