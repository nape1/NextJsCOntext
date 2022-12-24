// @ts-nocheck
import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";
import { useLanguageContext } from "../context/AppContext";
import { useAppStateContext } from "../context/state";

export default function Home() {
    const value = useLanguageContext()
    const { count, setCount } = useAppStateContext()
    let { homeTitle, homeContent } = value.state.languages;
    console.log('====================================');
    console.log('Home renders ');
    console.log('====================================');
    return (
        <>
            <Navigation />
            <Container className="page">
                <h2>{homeTitle} {count}</h2>
                <p>{homeContent}</p>
                <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                {' '}
                <button onClick={() => setCount((prev) => prev - 1)}>-</button>

            </Container>
        </>
    );
}