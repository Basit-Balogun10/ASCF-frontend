import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdMoon, IoMdSunny, IoMdClose, IoMdMenu } from "react-icons/io";

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
    const [mobileNav, toggleMobileNav] = useState<boolean>(false);

    const handleMobileNavToggle = () => {
        let mobileNavOpen =
            document.querySelector<HTMLElement>(".mobile-nav-open");
        let mobileNavClose =
            document.querySelector<HTMLElement>(".mobile-nav-close");

        if (mobileNavOpen) {
            if (mobileNavClose) {
                console.log("here");
                // mobileNavClose.style.transform = "translateX(60px)";
                // mobileNavOpen.style.transform = "translateX(0px)";
            } else {
                // mobileNavOpen.style.transform = "translateX(60px)";
            }
            setTimeout(() => toggleMobileNav(!mobileNav), 200);
        }

        // setTimeout(() => toggleMobileNav(!mobileNav), 200)
        // toggleMobileNav(!mobileNav);
    };

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
            {mobileNav && (
                <IoMdClose
                    className="mobile-nav-close z-[150] fixed md:hidden top-8 right-6 w-10 h-10 text-ourRed transitio-all ease-in-out"
                    onClick={handleMobileNavToggle}
                />
            )}
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
                <ul
                    className={`${
                        mobileNav
                            ? "h-full w-full visible"
                            : "h-0 invisible md:visible"
                    } 
                            z-[100] h-screen fixed top-0 right-0 flex flex-col items-left justify-center pl-2 pb-16 space-y-8 md:bg-transparent md:dark:bg-transparent bg-gray-100 dark:bg-black
                            md:h-[initial] md:w-[initial] md:static md:flex md:flex-row md:space-y-0 md:bg-[initial] md:transitio-none
                            `}
                >
                    {navLinks.map((navLink, index) => (
                        <Link
                            href={`/${navLink.urlFragment}`}
                            passHref
                            key={index}
                        >
                            <li
                                className={`
                                ${
                                    mobileNav
                                        ? "visible"
                                        : "invisible md:visible"
                                }
                                md:hover:px-4 md:hover:bg-red-100/50 md:hover:py-1 ${
                                    !displayNavBar && displayLogo
                                        ? "dark:text-white text-ourBlack"
                                        : "text-white"
                                } text-base md:text-[0.8rem] tracking-wide ${
                                    activeNavLink === navLink.urlFragment &&
                                    "underline decoration-ourRed decoration-4 underline-offset-4"
                                } hover:no-underline font-extrabold ml-6 cursor-pointer rounded-md transitio-all ease-in-out`}
                            >
                                <p>{navLink.title.toUpperCase()}</p>
                            </li>
                        </Link>
                    ))}
                    <li className="mr-auto md:mr-0 ml-6 px-3 py-2 hover:bg-red-100 bg-white text-ourRed text-base md:text-[0.8rem] tracking-wide font-extrabold rounded cursor-pointer shadow-md shadow-black">
                        <Link href="/shop">SHOP NOW</Link>
                    </li>
                    <li className="mr-auto md:mr-0 ml-6 px-5 py-2 hover:bg-red-100 bg-white text-ourRed text-base md:text-[0.8rem] tracking-wide font-extrabold rounded cursor-pointer shadow-md shadow-black">
                        <Link href="/login">SIGN IN</Link>
                    </li>
                    {theme == "light" ? (
                        <IoMdMoon
                            className={`fixed md:static top-0 right-20 w-10 h-10 md:w-8 md:h-8 md:ml-6 p-1 text-ourRed ${
                                !displayNavBar && displayLogo
                                    ? "md:dark:text-white md:text-ourBlack md:hover:bg-red-200/50 md:dark:hover:bg-gray-100/50"
                                    : "md:text-white hover:bg-gray-100/50"
                            } md:hover:bg-gray-100/50 rounded-md cursor-pointer transition-colors ease-in-out`}
                            onClick={toggleThemeMode}
                        />
                    ) : (
                        <IoMdSunny
                            className={`fixed md:static top-0 right-20 w-10 h-10 md:w-8 md:h-8 md:ml-6 p-1 text-ourRed ${
                                !displayNavBar && displayLogo
                                    ? "md:dark:text-white md:text-ourBlack md:hover:bg-gray-500 md:dark:hover:bg-gray-100/50"
                                    : "md:text-white md:hover:bg-gray-100/50"
                            } rounded-md cursor-pointer transition-colors ease-in-out`}
                            onClick={toggleThemeMode}
                        />
                    )}
                </ul>
            )}
            <IoMdMenu
                // data-aos="fade-left"
                // data-aos-duration="500"
                className="mobile-nav-open md:hidden absolute top-7 right-7 w-9 h-9 text-ourRed"
                onClick={handleMobileNavToggle}
            />
        </nav>
    );
};

export default Header;
// todo: Use the useRef hook for the list of navigation items
