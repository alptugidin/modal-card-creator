import React from 'react';
import { ModalTypeProp } from '../Modal1';
import { setBG } from '../../../../features/setBG';

const Modal7 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className={`w-[480px] h-[288px] rounded-lg relative flex flex-col font-[Inter] p-14 text-center text-white ${setBG(color)}`}>
      <div>
        <img src="/cancel.svg" alt="cancel" className="absolute right-3 top-3" />
      </div>
      <div>
        <p className="text-3xl font-semibold">Hi, Stranger</p>
      </div>
      <div className="pt-6">
        <p className="text-xl">Sign up now, and get a 30% discount</p>
      </div>
      <div className="flex justify-center gap-4 mt-10">
        <button type="button" className="basis-1/2 rounded-lg h-12 border border-white text-white">Login</button>
        <button type="button" className="basis-1/2 rounded-lg h-12 bg-white text-black">Sign up now</button>
      </div>
    </div>
  );
};

export default Modal7;
