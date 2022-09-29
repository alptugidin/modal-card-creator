import React from 'react';
import SVG from './SVG';
import { ModalTypeProp } from '../Modal1';
import { setBG } from '../../../../features/setBG';

const Modal6 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className="w-[480px] h-[446px] bg-white rounded-lg flex flex-col p-10 relative">
      <div>
        <img src="/cancel.svg" alt="cancel" className="absolute right-3 top-3" />
      </div>
      <div className="flex flex-col font-[Inter] text-center items-center gap-4">
        <SVG color={color} />
        <p className="text-3xl font-semibold">Join our mail list</p>
        <p className="text-xl">Save up to 30% of your next order</p>
      </div>
      <div className="flex gap-4 justify-center flex-col mt-10">
        <div className="">
          <form action="" className="w-full">
            <input type="text" className="h-12 border border-gray-300 rounded-lg w-full" />
          </form>
        </div>
        <div className="flex justify-center gap-4 font-[Inter] mt-5">
          <button type="button" className="basis-1/2 h-12 border-gray-300 border rounded-lg">Later</button>
          <button type="button" className={`basis-1/2 h-12 border-gray-300 border rounded-lg text-white ${setBG(color)}`}>Join now</button>
        </div>
      </div>
    </div>
  );
};

export default Modal6;
