import { createContext } from "react";

interface ThemeContextInterface {
    theme: string;
    setTheme: (theme: string) => void;
    toggleThemeMode: () => void;
}

const ThemeContext = createContext<null | ThemeContextInterface>(null);

export const ThemeProvider = ThemeContext.Provider
export default ThemeContext