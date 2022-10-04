import React, { useState } from 'react';

interface IToggle {
  toggleState:boolean,
  setToggle():void,
}
const Toggle = ({ toggleState, setToggle }:IToggle) => {
  const fn = () => {};
  return (
    <button
      type="button"
      onClick={() => setToggle()}
      className={`w-[33px] h-[18px] rounded-full p-[3px] transition-all ${!toggleState ? 'bg-gray-500' : 'base-color-bg'}`}
    >
      <div className={`w-[12px] h-[12px] rounded-full bg-white transition-all ${toggleState && 'ml-[15px]'}`} />
    </button>
  );
};

export default Toggle;
