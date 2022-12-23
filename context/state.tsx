import { createContext, useContext, useState } from 'react';

const AppStateContext = createContext({});

export function AppWrapper({ children }) {
    // let sharedState = {
    //     name: 'tester',
    //     age: '34'
    // }
    const [count, setCount] = useState(1)
    return (
        <AppStateContext.Provider value={{ count, setCount }}>
            {children}
        </AppStateContext.Provider>
    )
}

export function useAppStateContext() {
    return useContext(AppStateContext);
}