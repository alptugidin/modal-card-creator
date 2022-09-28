import React from 'react';
import { Provider } from 'react-redux';
import { Header, Footer } from '../components';
import store from '../redux/store';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }:LayoutProps) => (
  <Provider store={store}>
    <Header />
    <main>{children}</main>
    <Footer />
  </Provider>
);

export default Layout;
