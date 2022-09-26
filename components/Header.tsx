import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module";

type propsType = {
    displayLogo?: boolean;
    isHomePage?: boolean;
};

const Header = ({ isHomePage = false, displayLogo = true }: propsType) => {
    return (
        <nav
            className={`flex ${
                displayLogo ? "justify-between" : "justify-end"
            } items-center px-8 py-8`}
        >
            {/* check for display logo */}
            {
                displayLogo && (
                    <Link href="/" passHref>
                        <Image
                            src="/images/logo.jpg"
                            width="100px"
                            height="100px"
                            className="w-16 h-16 cursor-pointer bg-white border-none"
                            alt="ASCF Logo"
                        />
                    </Link>
                )
            }
            {/* <div
                className="w-3/5 absolute top-0 right-0 h-full bg-blend-overlay bg-no-repeat bg-center bg-contain"
                style={styles.logo}
            ></div> */}
            {!isHomePage && (
            <ul className={`flex items-center`}>
                <li className="hidden md:block hover:px-4 hover:bg-red-100/50 hover:py-1 text-white text-xs font-extrabold ml-6 cursor-pointer rounded-md transition-all ease-in-out">
                    <Link href="/">HOME</Link>
                </li>
                <li className="hidden md:block hover:px-4 hover:bg-red-100/50 hover:py-1 text-white text-xs font-extrabold ml-6 cursor-pointer rounded-md transition-all ease-in-out">
                    <Link href="/about">ABOUT US</Link>
                </li>
                <li className="hidden md:block hover:px-4 hover:bg-red-100/50 hover:py-1 text-white text-xs font-extrabold ml-6 cursor-pointer rounded-md transition-all ease-in-out">
                    <Link href="/blog">BLOG</Link>
                </li>
                <li className="hidden md:block hover:px-4 hover:bg-red-100/50 hover:py-1 text-white text-xs font-extrabold ml-6 cursor-pointer rounded-md transition-all ease-in-out">
                    <Link href="/event">EVENTS</Link>
                </li>
                <li className="hidden md:block ml-6 px-3 py-2 hover:bg-red-100 bg-white text-ourRed text-xs font-extrabold rounded cursor-pointer">
                    <Link href="/shop">SHOP NOW</Link>
                </li>
                <li className="hidden md:block ml-6 px-5 py-2 hover:bg-red-100 bg-white text-ourRed text-xs font-extrabold rounded cursor-pointer">
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
