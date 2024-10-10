import { Inter } from 'next/font/google'
import './globals.css'
import Windows from '@/components/Windows'
import NavBar from '@/components/Navbar'
import VericalLines from '@/components/VericalLines'
import Footer from '@/components/common/Footer'
import Stars from '@/components/Stars'
import Navbar from '@/components/components/general/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YM Codes',
  description: 'This is my portfolio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className + ' overflow-hidden'}>
      <Navbar/>

        {/* <NavBar/> */}
        {/* <VericalLines/> */}
        {/* <Stars/> */}
        {/* <Windows/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  )
}
