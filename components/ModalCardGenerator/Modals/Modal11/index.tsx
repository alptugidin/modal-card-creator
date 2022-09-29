import React from 'react';
import { setBG } from '../../../../features/setBG';
import { ModalTypeProp } from '../Modal1';

const Modal11 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className="w-[480px] h-[584px] bg-white rounded-xl relative flex flex-col font-[Inter] px-12 py-10">
      <div>
        <img src="/cancel.svg" alt="camcel" className="absolute right-3 top-3" />
      </div>
      <div className="basis-1/3 justify-center items-center">
        <img src="/Modal11/img.png" alt="img" width="160" height="72" className="mx-auto" />
      </div>
      <div className="basis-1/3">
        <p className="text-3xl font-semibold text-center">Check your email</p>
        <p className="text-xl text-center">Once you deletet your account, you’ll lose all data associatted with it.</p>
      </div>
      <div className="basis-1/3">
        <form action="" className="w-full">
          <input
            type="text"
            placeholder="Enter your email"
            className="pl-5 placeholder-gray-600 placeholder:text-md border border-b-gray-300 rounded-lg h-12 w-full"
          />
        </form>
        <div>
          <button type="button" className={`h-12 rounded-lg w-full text-white text-sm mt-5 ${setBG(color)}`}>Sign up</button>
        </div>
        <span className="text-sm text-left mt-5">
          Already
          {' '}
          <span className="underline">have an account?</span>
        </span>
      </div>
    </div>
  );
};

export default Modal11;
