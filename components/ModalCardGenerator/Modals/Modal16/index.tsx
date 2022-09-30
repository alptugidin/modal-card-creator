import React from 'react';
import SVG from './SVG';
import { ModalTypeProp } from '../Modal1';
import { setBG } from '../../../../features/setBG';

const Modal16 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className="w-[480px] h-[471px] rounded-xl bg-white relative p-10 flex flex-col font-[Inter]">
      <img src="/cancel.svg" alt="cancel" className="absolute right-3 top-3" />
      <div className="basis-1/2 flex flex-col items-center">
        <SVG color={color} />
        <p className="text-5xl font-semibold mt-10">Hey there🥳</p>
      </div>
      <div className="basis-1/2 flex flex-col justify-center">
        <div className="px-14">

          <p className="text-lg">We’re launching our product and we would be happy to have you.</p>
        </div>
        <button
          type="button"
          className={`h-12 rounded-lg w-full text-white text-sm mt-5 ${setBG(color)}`}
        >
          Sign up now
        </button>
      </div>
    </div>
  );
};

export default Modal16;
