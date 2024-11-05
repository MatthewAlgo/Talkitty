import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface Theme {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
}

const lightTheme: Theme = {
    primaryColor: '#6200ea',
    secondaryColor: '#03dac6',
    backgroundColor: '#ffffff',
    textColor: '#000000',
};

const darkTheme: Theme = {
    primaryColor: '#bb86fc',
    secondaryColor: '#03dac6',
    backgroundColor: '#121212',
    textColor: '#ffffff',
};

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(lightTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
}