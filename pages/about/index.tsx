// @ts-nocheck
import { Container } from "react-bootstrap";
import Navigation from "../../components/Navigation";
import { useCountContext, useLanguageContext, useThemeContext } from "../../context/AppContext";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Contacts() {
    const { count, setCount } = useCountContext()
    const { theme, setTheme } = useThemeContext()
    const { language, setLanguage } = useLanguageContext()
    const { pathname, asPath } = useRouter()

    return (
        <>
            {/* <Navigation /> */}
            <Container className="page">
                <h1>Path is {asPath}</h1>
                <h3>count:{count} Theme:{theme} language:{language}</h3>
                <button onClick={() => setCount((prev) => prev + 1)}>Increment count</button>
                {' '}
                <button onClick={() => setCount((prev) => prev - 1)}>Decrement count</button>
                {' '}
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    Toggle theme
                </button>
                {' '}
                <button onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}>
                    Toggle language
                </button>
                <div>
                    <Link href="/"> Home</Link> {' '}
                    <Link href="/contact"> Contact</Link>{' '}
                    <Link href="/about/about-sub"> About SubPage</Link>
                </div>
            </Container>
        </>
    );
}
