import Link from "next/link";

const Header = () => {
    return (
        <section
            className="flex
    justify-between
    items-center
    px-8
    py-8"
        >
            <h1
                className="text-black
  dark:text-white
  text-3xl
  font-semibold
  cursor-pointer
  hover:text-ourRed"
            >
                ASCF
            </h1>
            <ul
                className="flex
  items-center"
            >
                <li
                    className="hidden
  md:block
  text-white
  text-base
  font-semibold
  ml-6
  cursor-pointer
  hover:text-ourRed"
                >
                    <Link href="/">HOME</Link>
                </li>
                <li
                    className="hidden
  md:block
  text-white
  text-base
  font-semibold
  ml-6
  cursor-pointer
  hover:text-ourRed"
                >
                    <Link href="/about">ABOUT US</Link>
                </li>
                <li
                    className="hidden
  md:block
  text-white
  text-base
  font-semibold
  ml-6
  cursor-pointer
  hover:text-ourRed"
                >
                    <Link href="/blog">BLOG</Link>
                </li>
                <li
                    className="hidden
  md:block
  text-white
  text-base
  font-semibold
  ml-6
  cursor-pointer
  hover:text-ourRed"
                >
                    <Link href="/event">EVENTS</Link>
                </li>
                <li
                    className="hidden
  md:block
  text-white
  text-base
  font-semibold
  ml-6
  cursor-pointer
  hover:text-ourRed"
                >
                    <Link href="/shop">
                        <button
                            className="bg-white
  rounded
  text-ourRed
  text-base
  font-bold
  px-3
  py-2"
                        >
                            SHOP NOW
                        </button>
                    </Link>
                </li>
                <li
                    className="hidden
  md:block
  text-white
  text-base
  font-semibold
  ml-6
  cursor-pointer
  hover:text-ourRed"
                >
                    <Link href="/login">
                        <button
                            className="bg-white
  rounded
  text-ourRed
  text-base
  font-bold
  px-3
  py-2"
                        >
                            SIGN IN
                        </button>
                    </Link>
                </li>
            </ul>
            <div
                className="flex
  md:hidden"
            >
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
        </section>
    );
};

export default Header;
