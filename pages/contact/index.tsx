// @ts-nocheck
import { Container } from "react-bootstrap";
import Navigation from "../../components/Navigation";
import { useLanguageContext } from "../../context/AppContext";
import { useAppStateContext } from "../../context/state";

export default function Contacts() {
    const value = useLanguageContext()
    const { count, setCount } = useAppStateContext()
    let { emailLabel, phoneLabel } = value.state.languages;

    console.log('====================================');
    console.log('Contacts renders');
    console.log('====================================');

    return (
        <>
            <Navigation />

            <Container className="page">
                <h2>{value.state.languages.contactTitle}{count}</h2>
                <div>
                    <li>{`${emailLabel}: hi@example.com`}</li>
                    <li>{`${phoneLabel}: +010112345`}</li>
                </div>

                <button onClick={() => setCount((prev) => prev + 1)}>+</button>
                {' '}
                <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            </Container>
        </>
    );
}
