import { createContext, useContext, useState } from 'react';
import { NextPage } from 'next';

interface CountContextType {
    count: number;
    // setCount: (count: number) => void;
    setCount: (callback: (currentCount: number) => number) => void;
}

export const CountContext = createContext<CountContextType | undefined>(undefined);

interface CountProviderProps {
    children: React.ReactNode;
}

export const CountProvider: NextPage<CountProviderProps> = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
};

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: NextPage<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

interface LanguageContextType {
    language: string;
    setLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: NextPage<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState('en');
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};


export const useCountContext = () => useContext(CountContext);
export const useThemeContext = () => useContext(ThemeContext);
export const useLanguageContext = () => useContext(LanguageContext);