// @ts-nocheck
import Link from "next/link";
import { Container } from "react-bootstrap";
import Navigation from "../../components/Navigation";
import { useLanguageContext } from "../../context/AppContext";
import { useAppStateContext } from "../../context/state";

export default function About() {
    const value = useLanguageContext();
    const { count, setCount } = useAppStateContext()
    let { aboutTitle, aboutContent } = value.state.languages;
    console.log('====================================');
    console.log('About renders');
    console.log('====================================');
    return (
        <>
            <Navigation />
            <Link href='/about/about-sub'>Go to About Sub Page</Link>
            <Container className="page">
                <h2>{aboutTitle} {count}</h2>
                <p>{aboutContent}</p>
                <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                {' '}
                <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            </Container>
        </>
    );
}
