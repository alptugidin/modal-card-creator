import React from 'react';
import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Header:NextComponentType = () => (
  <div className="flex py-5 leading-[34px] tracking-tighter font-[inter] container mx-auto">
    <div className="w-2/12 leading-[34px] flex">
      <Link href="/">
        <a className="flex">
          <Image src="/logo.svg" width="36" height="36" />
          <p className="ml-2.5 font-[1000]">modal.cards</p>
        </a>
      </Link>
    </div>
    <div className="xl:block hidden xl:flex w-8/12 gap-7 font-[500]">
      <Link href="#">
        <div className="flex gap-0.5">
          <span>Solutinos</span>
          <button type="button">
            <img src="/dd.svg" alt="ddsvg" width="18" height="18" className="" />
          </button>
        </div>
      </Link>
      <Link href="#">Product Tour</Link>
      <Link href="#">Showcase</Link>
      <Link href="#">Pricing</Link>
    </div>
    <div className="xl:block hidden xl:flex w-2/12 gap-7 justify-center">
      <Link href="#">Sign in</Link>
      <div className="bg-purple-500 text-white px-5 rounded-xl base-color-shadow">
        <Link href="#">Try for free</Link>
      </div>
    </div>
  </div>
);

export default Header;
