import '../styles/globals.css'
import '@srmagura/react-loading-skeleton/dist/skeleton.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
export default MyApp
