import React from 'react';
import Header from './Header';

const Layout = ({ children }:any) => (
  <div>
    <div className="bg-gradient-to-b from-white to-[#E3F2F7]">
      <Header />
      <main>{children}</main>
    </div>
  </div>
);

export default Layout;
