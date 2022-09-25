import React, { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '../components/layout';
import CamperCard from '../components/CamperCard';
import CamperCardTransparent from '../components/CamperCardTransparent';

const Home: NextPageWithLayout = () => (
  <div>
    <div className="h-[calc(100vh_-_76px)] min-h-[834px] mx-auto container px-14">
      <div className="py-10">
        <div>
          <p className="font-[Poppins] font-semibold text-7xl">
            Simple modal
            {' '}
            <br />
            card creator
          </p>
        </div>
        <div className="mt-5 w-11/12">
          <span className="text-4xl font-normal">
            A utility-first CSS framework packed with classeslike flex, pt-4, text-center and
            rotate-90 that can becomposed to build any design, directly in your markup.
          </span>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="base-color-bg text-white px-6 py-3 rounded-xl base-color-shadow text-[Inter] font-medium"
        >
          Try it out now
        </button>
      </div>
      <div className="flex font-normal font-[Poppins] gap-4 text-sm text-gray-600 mt-10">
        <div className="flex gap-3">
          <img src="/check.svg" alt="check" />
          <span>Free and paid plans</span>
        </div>
        <div className="flex gap-3">
          <img src="/check.svg" alt="check" />
          <span>Setup in minutes</span>
        </div>
        <div className="flex gap-3">
          <img src="/check.svg" alt="check" />
          <span>No credit card required*</span>
        </div>
      </div>
    </div>
    <div className="bg-[#666666] h-[630px] flex flex-col">
      <div className="mx-auto container relative h-2/5">
        <CamperCard />
        <CamperCardTransparent />
      </div>
      <div className="h-3/5 container mx-auto px-14 flex text-white justify-between items-center">
        <div className="basis-1/4 flex flex-col gap-4">
          <p className="text-6xl font-semibold font-[Poppins]">3x</p>
          <p className="font-[Inter]">
            Increase
            <br />
            Conversion Rate
          </p>
        </div>
        <div className="basis-1/4 flex flex-col gap-4">
          <p className="text-6xl font-semibold font-[Poppins]">120%</p>
          <p className="font-[Inter]">
            Email
            <br />
            Subscribers
          </p>
        </div>
        <div className="basis-1/4 flex flex-col gap-4">
          <p className="text-6xl font-semibold font-[Poppins]">390%</p>
          <p className="font-[Inter]">
            More Customer
            <br />
            Engagement
          </p>
        </div>
        <div className="basis-1/4 flex gap-4">
          <p className="font-[Poppins] font-semibold text-4xl">
            Popupsmart meets
            all your business
            needs.
          </p>
        </div>
      </div>
    </div>
  </div>

);

Home.getLayout = (page:ReactElement) => (
  <Layout>
    {page}
  </Layout>
);

export default Home;
