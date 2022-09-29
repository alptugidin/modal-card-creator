import React from 'react';
import { ModalTypeProp } from '../Modal1';
import { setBG } from '../../../../features/setBG';

const Modal8 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className={`w-[740px] h-[400px] rounded-lg flex flex-col font-[Inter] relative p-12 ${setBG(color)}`}>
      <div>
        <img src="/cancel.svg" alt="cancel" className="absolute right-3 top-3" />
      </div>
      <div className="text-white text-center basis-1/2">
        <p className="text-4xl font-semibold">Subscribe to our newsletter</p>
        <p className="text-2xl mt-5">Receive the flash news in  your inbox.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-1/2">
          <form action="" className="w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-white rounded-lg h-12 w-full pl-5"
            />
          </form>
          <div className="flex items-center gap-4 mt-5">
            <div className="w-[23px] h-[23px] rounded-full border border-white">
              {/*  */}
            </div>
            <p className="text-white font-sans text-sm font-thin">By subscribe this form I agree to Privacy Policy.</p>
          </div>
          <div className="w-1/2 float-right mt-5">
            <button type="button" className="bg-white rounded-lg h-12 w-full">Sign up now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal8;
