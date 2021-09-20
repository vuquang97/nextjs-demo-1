import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RedLayout from '../components/layout/RedLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return <RedLayout>
    <Component {...pageProps} />
  </RedLayout>
}
export default MyApp
