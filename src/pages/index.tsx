import { Footer, Header, Home } from '@ahnafia/components'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className='w-full bg-white'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
