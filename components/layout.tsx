import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import store from '../redux/store';

const Layout = ({ children }:any) => (
  <Provider store={store}>
    <Header />
    <main>{children}</main>
  </Provider>
);

export default Layout;
