import React from 'react';
import { Header, Footer } from '../components';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }:LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
