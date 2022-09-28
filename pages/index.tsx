import React, { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import {
  Appearance, Content, ModalCardGenerator, SettingsAndCode, Showcase, TargetingRules,
} from '../components';
import Layout from '../layouts/layout';

const Home: NextPageWithLayout = () => (
  <div>
    <Showcase />
    <div className="container mx-auto">
      <ModalCardGenerator />
      <Appearance />
      <Content />
      <TargetingRules />
      <SettingsAndCode />
    </div>
  </div>

);

Home.getLayout = (page:ReactElement) => (
  <Layout>
    {page}
  </Layout>
);

export default Home;
