import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import { NextPage } from 'next';
import { CountProvider, LanguageProvider, ThemeProvider } from "../context/AppContext";
interface AppProps {
    Component: NextPage;
    pageProps: object;
}

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
    return (
        <CountProvider>
            <ThemeProvider>
                <LanguageProvider>
                    <Component {...pageProps} />
                </LanguageProvider>
            </ThemeProvider>
        </CountProvider>
    );
};

export default App;