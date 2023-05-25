import { Home } from '@ahnafia/components'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className='w-full bg-white'>
      <Home />
    </div>
  )
}
