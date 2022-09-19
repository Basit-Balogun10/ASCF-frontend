import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "../contexts/ThemeContext";

type propsType = {
    children: React.ReactNode;
};

const Layout = ({ children }: propsType) => {
    const [theme, setTheme] = useState<string>("light");
    useEffect(() => {
        if (
            localStorage.getItem("ascf-theme") === "dark" ||
            (!("ascf-theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        console.log('called')
    }, []);

    const toggleThemeMode = () => {
        console.log("called2");
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("ascf-theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("ascf-theme", "dark");
        }
    };
    return (
        <>
            <ThemeProvider value={{ theme, setTheme, toggleThemeMode }}>
                <button className="bg-red-500 dark:bg-blue-500 hidden" onClick={toggleThemeMode}>CHANGE THEME</button>
                <Header />
                {children}
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default Layout;
