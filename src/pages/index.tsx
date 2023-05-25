import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-white h-screen text-red-600'>
      Ahnafia Todo
    </div>
  )
}
