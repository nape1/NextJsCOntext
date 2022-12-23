import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppWrapper } from '../context/state'
import LanguageProvider from '../context/AppContext'


export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppWrapper>
            <LanguageProvider>
                <Component {...pageProps} />
            </LanguageProvider>
        </AppWrapper>
    )
}
