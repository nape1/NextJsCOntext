import { createContext, useContext } from 'react';

const AppStateContext = createContext({});

export function AppWrapper({ children }) {
    let sharedState = {
        name: 'tester',
        age: '34'
    }

    return (
        <AppStateContext.Provider value={sharedState}>
            {children}
        </AppStateContext.Provider>
    )
}

export function useAppStateContext() {
    return useContext(AppStateContext);
}