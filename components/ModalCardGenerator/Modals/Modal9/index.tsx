import React from 'react';
import { setBG } from '../../../../features/setBG';
import { ModalTypeProp } from '../Modal1';

const Modal9 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className="w-[480px] h-[752px] rounded-lg bg-white relative flex flex-col">
      <div>
        <img src="/cancel.svg" alt="cancel" className="absolute right-3 top-3" />
      </div>
      <div className="basis-1/2">
        <img src="/Modal9/img.png" alt="img" />
      </div>
      <div className="flex flex-col h-1/2 py-5 px-16 font-[Inter] text-center">
        <div className="basis-1/3">
          <p className="text-3xl font-semibold">Hello stranger</p>
          <p className="text-lg mt-3">Sign up now and get 30% discount</p>
        </div>
        <div className="basis-1/3">
          <form action="" className="w-full">
            <input
              type="text"
              placeholder="Enter full name"
              className="font-normal pl-6 rounded-lg bg-white h-12 w-full border border-gray-300 text-sm"
            />
          </form>
          <form action="" className="w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="font-normal pl-6 text-sm rounded-lg bg-white h-12 w-full border border-gray-300 mt-3"
            />
          </form>
        </div>
        <div className="basis-1/3">
          <button
            type="button"
            className={`rounded-lg h-12 text-white text-sm w-full mt-5 ${setBG(color)}`}
          >
            Sign up
          </button>
          <span className="text-xs mt-5 float-left">
            Already
            {' '}
            <span className="underline">have an account?</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal9;
