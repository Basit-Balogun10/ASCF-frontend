import { createContext } from "react";

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
    toggleThemeMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ThemeContext.Provider
export default ThemeContext