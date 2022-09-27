import React from 'react';
import EditInput from './EditInput';
import CheckBox from './CheckBox';

const SettingsAndCode = () => {
  const fn = () => {};

  return (
    <div className="mt-24">
      <div className="flex items-center gap-4">
        <img src="/stepFive.svg" alt="" />
        <p className="font-[Poppins] font-bold text-xl tracking-tight whitespace-pre">Settings and Code</p>
      </div>
      <div className="flex">
        <div className="basis-1/3">
          <p className="mt-7 text-xl font-[Poppins] font-semibold">Webhook to Send data</p>
          <p className="mt-3 font-[Poppins]">Enter your Webhook URL</p>
          <span className="mt-3 font-[Poppins]">
            You can  create a simple one with
            <span className="font-semibold"> make.com</span>
          </span>
          <EditInput />
          <div className="mt-3">
            <div className="flex items-center gap-3">
              <CheckBox />
              <p className="font-[Poppins]">Send form submissions</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <CheckBox />
              <p className="font-[Poppins]">Send click data</p>
            </div>
          </div>
          <div className="w-full h-[260px] bg-[#333333] rounded-lg mt-7 relative">
            {/*  */}
            <button
              type="button"
              className="base-color-bg text-white text-md font-[Poppins] px-3 py-1 rounded-full absolute bottom-3 right-3 base-color-shadow"
            >
              Copy the code
            </button>
          </div>
          <div className="flex gap-2 mt-3">
            <img src="/infoMark.svg" alt="infoMark" width="16" height="16" className="mb-5" />
            <p className="font-[Poppins] text-sm">
              Copy and paste the embed code above just before the
              closing &lt;/body&gt; tag of your website template file.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SettingsAndCode;
