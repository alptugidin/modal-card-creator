import React, {
  ReactElement, useState, Suspense,
} from 'react';
import { NextPageWithLayout } from './_app';
import {
  Appearance, Content, ModalCardGenerator, SettingsAndCode, Showcase, TargetingRules,
} from '../components';
import Layout from '../layouts/layout';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { modals } from '../components/ModalCardGenerator/Modals';
import { updateEditableTextCount, updateEditableTexts } from '../features/modalCreateSlice';
import { strings } from '../components/ModalCardGenerator/Modals/stringsIndex';

const Home: NextPageWithLayout = () => {
  const activeModal = useAppSelector((state) => state.modalCreate.activeModal);
  const dispatch = useAppDispatch();

  const DynamicRender = () => {
    const Modal = modals[activeModal - 1];
    console.log(activeModal);
    dispatch(updateEditableTextCount(strings[activeModal - 1].length));
    dispatch(updateEditableTexts(strings[activeModal - 1]));
    return <Modal inStory={false} />;
  };

  return (
    <div className="">
      <Showcase />
      <div className="container mx-auto">
        <ModalCardGenerator />
        <div className="flex">
          <div className="basis-1/3">
            <Appearance />
            <Content />
            <TargetingRules />
            <SettingsAndCode />
          </div>
          <div className="basis-2/3 relative pb-20">
            <div className="sticky h-auto top-2 w-full flex items-start justify-center">
              <Suspense fallback={<p>Loading...</p>}>
                {DynamicRender()}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
Home.getLayout = (page:ReactElement) => (
  <Layout>
    {page}
  </Layout>
);

export default Home;
