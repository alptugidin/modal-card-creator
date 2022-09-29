import React from 'react';
import { setBG } from '../../../../features/setBG';
import { ModalTypeProp } from '../Modal1';

const Modal10 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className="w-[740px] h-[443px] bg-white rounded-xl flex relative font-[Inter]">
      <div>
        <img src="/cancel.svg" alt="camcel" className="absolute right-3 top-3" />
      </div>
      <div className="basis-1/2 flex flex-col p-10">
        <div className="basis-1/3">
          <p className="text-3xl font-semibold">Sign up</p>
          <p className="text-2xl mt-3 text-gray-700">Join new adventure</p>
        </div>
        <div className="basis-1/3">
          <form action="" className="w-full">
            <input
              type="text"
              placeholder="Enter Full name"
              className="pl-5 placeholder-gray-700 placeholder:text-sm border border-b-gray-300 rounded-lg h-12 w-full"
            />
          </form>
          <form action="" className="w-full mt-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="pl-5 placeholder-gray-700 placeholder:text-sm border border-b-gray-300 rounded-lg h-12 w-full"
            />
          </form>
        </div>
        <div className="basis-1/3">
          <div>
            <button type="button" className={`h-12 rounded-lg w-full text-white text-sm mt-5 ${setBG(color)}`}>Sign up</button>
          </div>
          <div className="flex justify-between mt-5">
            <button type="button" className="text-sm">Forgot password</button>
            <button type="button" className="text-sm">Log in</button>
          </div>
        </div>
      </div>
      <div className="basis-1/2 h-[443px]">
        <img src="/Modal10/img.png" alt="img" className="w-[370px] h-[443px]" />
      </div>
    </div>
  );
};

export default Modal10;
