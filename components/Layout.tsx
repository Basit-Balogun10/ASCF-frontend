import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "../contexts/ThemeContext";
import SupportDialogBox from "./SupportDialogBox";
import CookieDialogBox from "./CookieDialogBox";

type propsType = {
    children: React.ReactNode & {
        type: {
            name: string;
        };
    };
};

const Layout = ({ children }: propsType) => {
    const [theme, setTheme] = useState<string>("light");
    const [supportModalOpened, setSupportModalOpened] =
        useState<boolean>(false);

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
    }, []);

    const toggleThemeMode = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("ascf-theme", "light");
            setTheme("light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("ascf-theme", "dark");
            setTheme("dark");
        }
    };

    return (
        <>
            <ThemeProvider value={{ theme, setTheme, toggleThemeMode }}>
                {children.type.name !== "Home" && <Header />}
                <CookieDialogBox />
                <SupportDialogBox />
                {children}
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default Layout;
