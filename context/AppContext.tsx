import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import languagesObject from '../data/languages';

const LanguageContext = createContext({});

export default function LanguageProvider({ children }) {
    const [languageSelected, setLanguageSelected] = useState("en");
    const languageObject = languagesObject;

    // const providerValues = useMemo(() => ({
    //     languages: languageObject[languageSelected],
    //     languageSelected,
    // }), [])

    // const providerHandler = useCallback(() => { setLanguageSelected }), []);
    return (
        <LanguageContext.Provider value={{
            state: {
                languages: languageObject[languageSelected],
                languageSelected: languageSelected,
            },
            setLanguageSelected: setLanguageSelected,
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguageContext() {
    return useContext(LanguageContext);
}