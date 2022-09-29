import React from 'react';
import { setBG } from '../../../../features/setBG';
import { ModalTypeProp } from '../Modal1';

const Modal12 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className="w-[740px] h-[563px] relative">
      <div className="w-[550px] h-[563px] rounded-xl ">
        <img src="/Modal12/img.png" alt="img" />
        <div className="absolute font-[Inter] right-0 top-0 w-[380px] h-[443px] bg-white rounded-xl top-[60px] flex flex-col p-10">
          <div className="absolute right-3 top-3">
            <img src="/cancel.svg" alt="cancel" />
          </div>
          <div className="basis-1/3">
            <p className="text-4xl font-semibold">Sign up</p>
            <p className="text-2xl mt-4">Join new adventure</p>
          </div>
          <div className="basis-1/3">
            <form action="" className="w-full">
              <input
                type="text"
                placeholder="Enter Full name"
                className="pl-5 placeholder-gray-700 placeholder:text-sm border border-b-gray-300 rounded-lg h-12 w-full"
              />
            </form>
            <form action="" className="w-full">
              <input
                type="text"
                placeholder="Ent1er your email"
                className="pl-5 placeholder-gray-700 placeholder:text-sm border border-b-gray-300 rounded-lg h-12 w-full mt-3"
              />
            </form>
          </div>
          <div className="basis-1/3">
            <button type="button" className={`h-12 rounded-lg w-full text-white text-sm mt-5 ${setBG(color)}`}>Sign up</button>
            <div className="flex justify-between text-sm mt-5">
              <p>Forgot password</p>
              <p>Log in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal12;
