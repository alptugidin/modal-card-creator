import React from 'react';
import CollapsableFAQ from './CollapsableFAQ';

const Footer = () => {
  const fn = () => {};
  return (
    <div className="mt-24 container mx-auto">

      <p className="font-[Poppins] text-3xl text-center font-semibold">Conversion & UX ready popups & modals</p>

      <div className="xl:flex xl:justify-between">
        <div className="w-[378px] h-[267px] bg-gray-100 rounded-xl px-16 flex flex-col justify-start items-center gap-4 mt-10">
          <div className="mt-10">
            <img src="/guard.svg" alt="guard" />
          </div>
          <div>
            <p className="font-[Poppins] font-semibold text-lg text-center">Pixel Perfect</p>
          </div>
          <div>
            <p className="text-sm font-[Poppins] tracking-tight text-center">
              Helps you calculate your email marketing roi to measure success.
            </p>
          </div>
        </div>
        <div className="w-[378px] h-[267px] bg-gray-100 rounded-xl px-16 flex flex-col justify-start items-center gap-4 mt-10">
          <div className="mt-10">
            <img src="/conversion.svg" alt="guard" />
          </div>
          <div>
            <p className="font-[Poppins] font-semibold text-lg text-center">Conversion Ready</p>
          </div>
          <div>
            <p className="text-sm font-[Poppins] tracking-tight text-center">
              Empowers your emails by
              generating afree code for
              a CTA in your subject line.
            </p>
          </div>
        </div>
        <div className="w-[378px] h-[267px] bg-gray-100 rounded-xl px-16 flex flex-col justify-start items-center gap-4 mt-10">
          <div className="mt-10">
            <img src="/moderUseful.svg" alt="guard" />
          </div>
          <div>
            <p className="font-[Poppins] font-semibold text-lg text-center">Modern & Useful</p>
          </div>
          <div>
            <p className="text-sm font-[Poppins] tracking-tight text-center">
              Enables you to estimate the
              total profit of your investment
              on a popup service.
            </p>
          </div>
        </div>
      </div>
      <p className="font-[Poppins] text-3xl text-center font-semibold mt-24">Frequently Asked Questions</p>
      <CollapsableFAQ />
      <p className="text-3xl text-center font-[Poppins] font-semibold mt-24">Build great popups without code</p>
      <div className="xl:flex justify-between mt-16 text-center">

        <div className="flex flex-col items-center gap-2 basis-1/4 px-12">
          <div className="w-fit">
            <img src="/flag.svg" alt="flag" />
          </div>
          <p className="font-[Poppins] font-semibold text-lg mt-4">Targeting Options</p>
          <p className="font-[Poppins] text-sm tracking-tight">Target +26 trigger to your visitors</p>
        </div>

        <div className="flex flex-col items-center gap-2 basis-1/4 px-12">
          <div className="w-fit">
            <img src="/noCode.svg" alt="nocode" />
          </div>
          <p className="font-[Poppins] font-semibold text-lg mt-4">No-Code</p>
          <p className="font-[Poppins] text-sm tracking-tight">No code required while you’re creating a popup</p>
        </div>

        <div className="flex flex-col items-center gap-2 basis-1/4 px-12">
          <div className="w-fit">
            <img src="/list.svg" alt="list" />
          </div>
          <p className="font-[Poppins] font-semibold text-lg mt-4">Targeting Options</p>
          <p className="font-[Poppins] text-sm tracking-tight">Integrated with your marketing and CRM platforms</p>
        </div>

        <div className="flex flex-col items-center gap-2 basis-1/4 px-12">
          <div className="w-fit">
            <img src="/aws.svg" alt="aws" />
          </div>
          <p className="font-[Poppins] font-semibold text-lg mt-4">Targeting Options</p>
          <p className="font-[Poppins] text-sm tracking-tight">Don’t worry about speed and Amazon AWS resources</p>
        </div>
      </div>
      <div className="flex-col my-20">
        <div className="w-fit mx-auto">
          <img src="/popupLogo.svg" alt="" />
        </div>
        <p className="text-center text-sm font-[Poppins] tracking-tight mt-3">Powered by Popupsmart</p>
      </div>
    </div>
  );
};

export default Footer;
