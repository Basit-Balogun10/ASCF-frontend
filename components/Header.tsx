import Link from "next/link";
import Image from "next/image";

type propsType = {
    displayLogo?: boolean;
    isHomePage?: boolean;
};

const Header = ({ isHomePage = false, displayLogo = true }: propsType) => {
    return (
        <nav
            className={`flex ${
                displayLogo ? "justify-between" : "justify-end py-8"
            } h-24 items-center px-4`}
        >
            {displayLogo && (
                <Link href="/" passHref>
                    <Image
                        src="/images/logo.png"
                        width="150px"
                        height="150px"
                        className="cursor-pointer bg-transparent border-none"
                        alt="ASCF Logo"
                    />
                    {/* <div
                            className="w-24 h-24 bg-blend-overlay bg-no-repeat bg-center bg-contain"
                            style={styles.logo}
                        ></div> */}
                </Link>
            )}
            {!isHomePage && (
                <ul className={`flex flex-wrap items-center`}>
                    <li
                        className={`hidden md:block hover:px-4 hover:bg-red-100/50 hover:py-1 ${
                            !isHomePage && displayLogo
                                ? "dark:text-white text-ourBlack"
                                : "text-white"
                        } text-[0.8rem] tracking-wide font-extrabold ml-6 cursor-pointer rounded-md transition-all ease-in-out`}
                    >
                        <Link href="/">HOME</Link>
                    </li>
                    <li
                        className={`hidden md:block hover:px-4 hover:bg-red-100/50 hover:py-1 ${
                            !isHomePage && displayLogo
                                ? "dark:text-white text-ourBlack"
                                : "text-white"
                        } text-[0.8rem] tracking-wide font-extrabold ml-6 cursor-pointer rounded-md transition-all ease-in-out`}
                    >
                        <Link href="/about">ABOUT US</Link>
                    </li>
                    <li
                        className={`hidden md:block hover:px-4 hover:bg-red-100/50 hover:py-1 ${
                            !isHomePage && displayLogo
                                ? "dark:text-white text-ourBlack"
                                : "text-white"
                        } text-[0.8rem] tracking-wide font-extrabold ml-6 cursor-pointer rounded-md transition-all ease-in-out`}
                    >
                        <Link href="/blog">BLOG</Link>
                    </li>
                    <li
                        className={`hidden md:block hover:px-4 hover:bg-red-100/50 hover:py-1 ${
                            !isHomePage && displayLogo
                                ? "dark:text-white text-ourBlack"
                                : "text-white"
                        } text-[0.8rem] tracking-wide font-extrabold ml-6 cursor-pointer rounded-md transition-all ease-in-out`}
                    >
                        <Link href="/event">EVENTS</Link>
                    </li>
                    <li className="hidden md:block ml-6 px-3 py-2 hover:bg-red-100 bg-white text-ourRed text-[0.8rem] tracking-wide font-extrabold rounded cursor-pointer shadow-md shadow-black">
                        <Link href="/shop">SHOP NOW</Link>
                    </li>
                    <li className="hidden md:block ml-6 px-5 py-2 hover:bg-red-100 bg-white text-ourRed text-[0.8rem] tracking-wide font-extrabold rounded cursor-pointer shadow-md shadow-black">
                        <Link href="/login">SIGN IN</Link>
                    </li>
                </ul>
            )}
            <div className="flex md:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
