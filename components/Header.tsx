import Link from "next/link";
import tw from "tailwind-styled-components";

const Header = () => {
  return (
    <Container>
      <Logo>ASCF</Logo>
      <Nav>
        <NavItem>
          <Link href="/">HOME</Link>
        </NavItem>
        <NavItem>
          <Link href="/about">ABOUT US</Link>
        </NavItem>
        <NavItem>
          <Link href="/blog">BLOG</Link>
        </NavItem>
        <NavItem>
          <Link href="/event">EVENTS</Link>
        </NavItem>
        <NavItem>
          <Link href="/shop">
            <Button>SHOP NOW</Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/login">
            <Button>SIGN IN</Button>
          </Link>
        </NavItem>
      </Nav>
      <Menu>
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
      </Menu>
    </Container>
  );
};

const Container = tw.section`
    flex
    justify-between
    items-center
    px-8
    py-8
`;

const Logo = tw.h1`
  text-black
  dark:text-white
  text-3xl
  font-semibold
  cursor-pointer
  hover:text-red
`;

const Nav = tw.ul`
  flex
  items-center
`;

const NavItem = tw.li`
  hidden
  lg:block
  text-white
  text-base
  font-semibold
  ml-6
  cursor-pointer
  hover:text-red
  
`;

const Menu = tw.div`
  flex
  lg:hidden
`;

const Button = tw.button`
  bg-white
  rounded
  text-red
  text-base
  font-bold
  px-3
  py-2
`;

export default Header;
