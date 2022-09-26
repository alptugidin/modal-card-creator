import React from 'react';
import { NextComponentType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Header:NextComponentType = () => (
  <div className="flex py-5 leading-[34px] tracking-tighter font-[inter] container mx-auto">
    <div className="w-2/12 leading-[34px] flex">
      <Link href="/pages">
        <a className="flex">
          <Image src="/logo.svg" width="36" height="36" />
          <p className="ml-2.5 font-[1000]">modal.cards</p>
        </a>
      </Link>
    </div>
    <div className="flex w-8/12 gap-7 font-[500]">
      <Link href="components/Header#">
        <div className="flex gap-0.5">
          <span>Solutinos</span>
          <button type="button">
            <img src="/dd.svg" alt="ddsvg" width="18" height="18" className="" />
          </button>
        </div>
      </Link>
      <Link href="components/Header#">Product Tour</Link>
      <Link href="components/Header#">Showcase</Link>
      <Link href="components/Header#">Pricing</Link>
    </div>
    <div className="flex w-2/12 gap-7 justify-center">
      <Link href="components/Header#">Sign in</Link>
      <div className="base-color-bg text-white px-5 rounded-xl base-color-shadow">
        <Link href="components/Header#">Try for free</Link>
      </div>
    </div>
  </div>
);

export default Header;
