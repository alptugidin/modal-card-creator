import React from 'react';
import Toggle from '../commons/Toggle';
import CheckBox from '../commons/CheckBox';
import DeviceSVG from './DeviceSVG';
import EditInput from '../commons/EditInput';
import LanguageSelector from './LanguageSelector';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  isActiveLanguages,
  isActiveScroll,
  isActiveSeconds,
  isActiveSource,
  isVisitorDevice,
  setActiveSecondsValue,
  setDesktopDevice, setExitIntent,
  setMobileDevice,
  setScrollValue, setSource,
} from '../../features/targetingSlice';

const TargetingRules = () => {
  const { targeting } = useAppSelector((state) => state.targeting);
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
            <p id="visitor-device" className={`font-[Poppins] tracking-tighter font-semibold text-sm transition-all ${!targeting.visitorDevice.all ? 'opacity-30' : ''}`}>Visitor Device</p>
            <Toggle
              toggleState={targeting.visitorDevice.all}
              setToggle={() => dispatch(isVisitorDevice())}
            />
          </div>
          <div className={`flex mt-5 justify-between gap-5 transition-all ${!targeting.visitorDevice.all ? 'opacity-30 pointer-events-none' : ''}`}>
            <div className="w-full h-[48px] rounded-lg bg-gray-100 flex items-center gap-2 p-4">
              <CheckBox
                tickState={targeting.visitorDevice.desktop}
                check={() => dispatch(setDesktopDevice())}
              />
              <DeviceSVG device="desktop" isActive={targeting.visitorDevice.desktop} />
              <span className="font-[Poppins] cursor-default text-sm">Desktop</span>
            </div>
            <div className="w-full h-[48px] rounded-lg bg-gray-100 flex items-center gap-2 p-4">
              <CheckBox
                tickState={targeting.visitorDevice.mobile}
                check={() => dispatch(setMobileDevice())}
              />
              <DeviceSVG device="mobile" isActive={targeting.visitorDevice.mobile} />
              <span className="font-[Poppins] cursor-default text-sm">Mobile</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-7 ">
            <p id="seconds" className={`font-[Poppins] tracking-tighter font-semibold text-sm transition-all ${!targeting.seconds.isActive ? 'opacity-30' : ''}`}>After X Seconds</p>
            <Toggle
              toggleState={targeting.seconds.isActive}
              setToggle={() => dispatch(isActiveSeconds())}
            />
          </div>
          <div className={`transition-all ${!targeting.seconds.isActive ? 'opacity-30 pointer-events-none' : ''}`}>
            <div id="seconds-input">
              <EditInput
                type="number"
                edit={(value:string) => dispatch(setActiveSecondsValue(value))}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-7">
            <p id="scroll" className={`font-[Poppins] tracking-tighter font-semibold text-sm transition-all ${!targeting.scroll.isActive ? 'opacity-30' : ''}`}>After % Scroll</p>
            <Toggle
              toggleState={targeting.scroll.isActive}
              setToggle={() => dispatch(isActiveScroll())}
            />
          </div>
          <div className={`transition-all ${!targeting.scroll.isActive ? 'opacity-30 pointer-events-none' : ''}`}>
            <div id="scroll-input">
              <EditInput
                type="number"
                edit={(value:string) => dispatch(setScrollValue(value))}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-7">
            <p id="traffic-source" className={`font-[Poppins] tracking-tighter font-semibold text-sm transition-all ${!targeting.source.isActive ? 'opacity-30' : ''}`}>Traffic Source</p>
            <Toggle
              toggleState={targeting.source.isActive}
              setToggle={() => dispatch(isActiveSource())}
            />
          </div>
          <div className={`transition-all ${!targeting.source.isActive ? 'opacity-30 pointer-events-none' : ''}`}>
            <div id="source-input">
              <EditInput
                edit={(value:string) => dispatch(setSource(value))}
                placeholder="Enter your traffinc source domain"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-20">
            <p id="browser-language" className={`font-[Poppins] tracking-tighter font-semibold text-sm transition-all ${!targeting.languages.isActive ? 'opacity-30' : ''}`}>Browser Language</p>
            <Toggle
              toggleState={targeting.languages.isActive}
              setToggle={() => dispatch(isActiveLanguages())}
            />
          </div>
          <div className={`relative transition-all ${!targeting.languages.isActive ? 'opacity-30 pointer-events-none' : ''}`}>
            <LanguageSelector />
            {/* <SelectedLanguages /> */}
          </div>
          <div className="flex items-center justify-between mt-20">
            <p id="exit-intent" className={`font-[Poppins] tracking-tighter font-semibold text-sm transition-all ${!targeting.exitIntent ? 'opacity-30' : ''}`}>Exit Intent Targeting</p>
            <Toggle
              toggleState={targeting.exitIntent}
              setToggle={() => dispatch(setExitIntent())}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetingRules;
