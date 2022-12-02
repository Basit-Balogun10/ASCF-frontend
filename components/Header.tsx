import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

import themeContext from "../contexts/ThemeContext";
import { checkIsMobile } from "../utils";

type propsType = {
    displayLogo?: boolean;
    displayNavBar?: boolean;
};

interface navLinksType {
    title: string;
    urlFragment: string;
    isActive: boolean;
}

// todo: WHERE TO PUT THIS? HERE OR IN COMPONENT (BEFORE USEEFECT)
const navLinks = [
    {
        title: "home",
        urlFragment: "",
        isActive: global.window?.location.href.includes(""),
    },
    {
        title: "about us",
        urlFragment: "about",
        isActive: global.window?.location.href.includes("about"),
    },
    {
        title: "blog",
        urlFragment: "blog",
        isActive: global.window?.location.href.includes("blog"),
    },
    {
        title: "events",
        urlFragment: "events",
        isActive: global.window?.location.href.includes("events"),
    },
];

const Header = ({ displayNavBar = false, displayLogo = true }: propsType) => {
    const [activeNavLink, setActiveNavLink] = useState<null | string>();
    const { theme, setTheme, toggleThemeMode } = useContext(themeContext);
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    // REVIEW DEPENDENCY ARRAYS DOCS
    useEffect(() => {
        setIsMobile(checkIsMobile());
        console.log("checked mobile");
    }, []);

    useEffect(() => {
        navLinks.forEach((navLink) => {
            if (global.window?.location.href.includes(navLink.urlFragment)) {
                setActiveNavLink(navLink.urlFragment);
            }
        });
    });

    return (
        <nav
            className={`flex ${
                displayLogo ? "justify-between" : "justify-end py-8"
            } h-24 items-center pr-4 md:pl-4 md:pr-12`}
        >
            {displayLogo && (
                <Link href="/" passHref>
                    <Image
                        src="/images/logo.png"
                        width={`${isMobile ? "180px" : "150px"}`}
                        height={`${isMobile ? "180px" : "150px"}`}
                        className="cursor-pointer bg-transparent border-none"
                        alt="ASCF Logo"
                    />
                </Link>
            )}
            {!displayNavBar && (
                <ul className={`hidden md:flex flex-wrap items-center`}>
                    {navLinks.map((navLink, index) => (
                        <Link
                            href={`/${navLink.urlFragment}`}
                            passHref
                            key={index}
                        >
                            <li
                                className={`hover:px-4 hover:bg-red-100/50 hover:py-1 ${
                                    !displayNavBar && displayLogo
                                        ? "dark:text-white text-ourBlack"
                                        : "text-white"
                                } text-[0.8rem] tracking-wide ${
                                    activeNavLink === navLink.urlFragment &&
                                    "underline decoration-ourRed decoration-4 underline-offset-4"
                                } hover:no-underline font-extrabold ml-6 cursor-pointer rounded-md transition-all ease-in-out`}
                            >
                                <p>{navLink.title.toUpperCase()}</p>
                            </li>
                        </Link>
                    ))}
                    <li className="ml-6 px-3 py-2 hover:bg-red-100 bg-white text-ourRed text-[0.8rem] tracking-wide font-extrabold rounded cursor-pointer shadow-md shadow-black">
                        <Link href="/shop">SHOP NOW</Link>
                    </li>
                    <li className="ml-6 px-5 py-2 hover:bg-red-100 bg-white text-ourRed text-[0.8rem] tracking-wide font-extrabold rounded cursor-pointer shadow-md shadow-black">
                        <Link href="/login">SIGN IN</Link>
                    </li>
                    {theme == "light" ? (
                        <IoMdMoon
                            className={`w-8 h-8 ml-6 p-1 ${
                                !displayNavBar && displayLogo
                                    ? "dark:text-white text-ourBlack hover:bg-red-200/50 dark:hover:bg-gray-100/50"
                                    : "text-white hover:bg-gray-100/50"
                            } hover:bg-gray-100/50 rounded-md cursor-pointer transition-colors ease-in-out`}
                            onClick={toggleThemeMode}
                        />
                    ) : (
                        <IoMdSunny
                            className={`w-8 h-8 ml-6 p-1 ${
                                !displayNavBar && displayLogo
                                    ? "dark:text-white text-ourBlack hover:bg-gray-500 dark:hover:bg-gray-100/50"
                                    : "text-white hover:bg-gray-100/50"
                            } rounded-md cursor-pointer transition-colors ease-in-out`}
                            onClick={toggleThemeMode}
                        />
                    )}
                </ul>
            )}
            <div className="flex md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
        </nav>
    );
};

export default Header;
// todo: Use the useRef hook for the list of navigation items
