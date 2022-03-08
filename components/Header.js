import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  return (
    <Wrapper>
      <Logo>ASCF</Logo>
      <NavItemsList>
        <NavItems>ABOUT US</NavItems>
        <NavItems>BLOG</NavItems>
        <NavItems>EVENTS</NavItems>
        <NavItems $primary={true}>SIGN IN</NavItems>
        <NavItems $primary={true}>SHOP NOW</NavItems>
      </NavItemsList>
    </Wrapper>
  );
};

const Wrapper = tw.section`
    flex 
    w-screen
    justify-between
    items-center
    p-4
    fixed
`;

const Logo = tw.div`
    text-lg flex-1
`;

const NavItemsList = tw.ul`
    flex-1
    flex
    justify-around
    items-center
`;

const NavItems = tw.li`
    ${(p) =>
      p.$primary
        ? 'bg-red-500 px-4 py-2 text-white rounded shadow-md'
        : 'text-black'}
    font-bold
    text-sm
    font-roboto
`;

export default Header;
