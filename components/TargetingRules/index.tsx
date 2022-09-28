import React from 'react';
import Toggle from '../commons/Toggle';
import CheckBox from '../commons/CheckBox';
import DeviceSVG from './DeviceSVG';
import EditInput from '../commons/EditInput';
import LanguageSelector from './LanguageSelector';
import SelectedLanguages from './SelectedLanguages';

const TargetingRules = () => {
  const fn = () => {};
  return (
    <div className="mt-24">
      <div className="flex items-center gap-4">
        <img src="/stepFour.svg" alt="" />
        <p className="font-[Poppins] font-bold text-xl tracking-tight whitespace-pre">Targeting Rules</p>
      </div>
      <div className="flex">
        <div className="basis-1/3 mt-7">
          <div className="flex items-center justify-between">
            <p className="font-[Poppins] tracking-tighter font-semibold text-sm">Visitor Device</p>
            <Toggle />
          </div>
          <div className="flex mt-5 justify-between">
            <div className="w-[179px] h-[48px] rounded-lg bg-gray-100 flex items-center gap-2 p-4">
              <CheckBox />
              {/* <img src="/desktop.svg" alt="" /> */}
              <DeviceSVG device="desktop" isActive={false} />
              <span className="font-[Poppins] text-sm">Desktop</span>
            </div>
            <div className="w-[179px] h-[48px] rounded-lg bg-gray-100 flex items-center gap-2 p-4">
              <CheckBox />
              <DeviceSVG device="mobile" isActive={false} />
              <span className="font-[Poppins] text-sm">Mobile</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-7">
            <p className="font-[Poppins] tracking-tighter font-semibold text-sm">After X Seconds</p>
            <Toggle />
          </div>
          <EditInput />
          <div className="flex items-center justify-between mt-7">
            <p className="font-[Poppins] tracking-tighter font-semibold text-sm">After % Scroll</p>
            <Toggle />
          </div>
          <EditInput />
          <div className="flex items-center justify-between mt-7">
            <p className="font-[Poppins] tracking-tighter font-semibold text-sm">Traffic Source</p>
            <Toggle />
          </div>
          <EditInput />
          <div className="flex items-center justify-between mt-20">
            <p className="font-[Poppins] tracking-tighter font-semibold text-sm">Browser Language</p>
            <Toggle />
          </div>
          <LanguageSelector />
          <SelectedLanguages />
          <div className="flex items-center justify-between mt-20">
            <p className="font-[Poppins] tracking-tighter font-semibold text-sm">Exit Intent Targeting</p>
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetingRules;
