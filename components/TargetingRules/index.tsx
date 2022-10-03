import React from 'react';
import Toggle from '../commons/Toggle';
import CheckBox from '../commons/CheckBox';
import DeviceSVG from './DeviceSVG';
import EditInput from '../commons/EditInput';
import LanguageSelector from './LanguageSelector';
import SelectedLanguages from './SelectedLanguages';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setDesktopDevice, setMobileDevice } from '../../features/targetingSlice';

const TargetingRules = () => {
  const visitorDevice = useAppSelector((state) => state.targeting.visitorDevice);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-24">
      <div className="flex items-center gap-4">
        <img src="/stepFour.svg" alt="" />
        <p className="font-[Poppins] font-bold text-xl tracking-tight whitespace-pre">Targeting Rules</p>
      </div>
      <div className="flex">
        <div className="mt-7 w-full pr-5">
          <div className="flex items-center justify-between">
            <p className="font-[Poppins] tracking-tighter font-semibold text-sm">Visitor Device</p>
            <Toggle />
          </div>
          <div className="flex mt-5 justify-between gap-5">
            <div className="w-full h-[48px] rounded-lg bg-gray-100 flex items-center gap-2 p-4">
              <CheckBox
                tickState={visitorDevice.desktop}
                check={() => dispatch(setDesktopDevice())}
              />
              <DeviceSVG device="desktop" isActive={visitorDevice.desktop} />
              <span className="font-[Poppins] cursor-default text-sm">Desktop</span>
            </div>
            <div className="w-full h-[48px] rounded-lg bg-gray-100 flex items-center gap-2 p-4">
              <CheckBox
                tickState={visitorDevice.mobile}
                check={() => dispatch(setMobileDevice())}
              />
              <DeviceSVG device="mobile" isActive={visitorDevice.mobile} />
              <span className="font-[Poppins] cursor-default text-sm">Mobile</span>
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
          <div className="relative">
            <LanguageSelector />
            {/* <SelectedLanguages /> */}
          </div>
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
