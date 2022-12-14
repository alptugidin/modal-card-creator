import React from 'react';

interface ICheckBox {
  tickState:boolean,
  check(): void,
}

const CheckBox = ({ check, tickState }:ICheckBox) => (
  <button
    type="button"
    onClick={() => check()}
    className={`w-[18px] h-[18px] border border-gray-400 rounded ${tickState ? 'bg-purple-500 border-purple-500 ' : 'bg-gray-100  border-gray-400'} `}
  >
    {tickState && <img src="/check.svg" alt="check" className="mx-auto" />}
  </button>
);

export default CheckBox;
