import '@/styles/globals.css'

import { Press_Start_2P } from 'next/font/google'
 
const press_start_2p = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
