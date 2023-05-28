import '../styles/globals.css'
import { Footer, Header } from '@ahnafia/components'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>

  )
}
