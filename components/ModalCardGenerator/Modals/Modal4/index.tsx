import React from 'react';
import SVG from './SVG';
import { ModalTypeProp } from '../Modal1';
import { setBG } from '../../../../features/setBG';

const Modal4 = ({ color, size }:ModalTypeProp) => {
  function fn() {}
  return (
    <div className="bg-white rounded-lg w-[480px] h-[516px] py-10 px-12 flex flex-col relative">
      <div className="absolute right-3 top-3">
        <img src="/cancel.svg" alt="" />
      </div>
      <div className="flex flex-col items-center text-center gap-3 font-[Inter]">
        <SVG color={color} />
        <p className="font-semibold text-3xl">Delete your Profile</p>
        <p className="text-xl">Your profile will be automatically deleted after 1 month.</p>
        <div className="px-16">
          <span className="text-gray-400">
            You won’t be able to access to your profile after
            <span className="text-black"> 30.08.2021</span>
            .
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-12 font-[Inter]">
        <button onClick={() => console.log(setBG(color))} type="button" className={`border border-gray-400 rounded-lg h-12 text-white ${setBG(color)}`}>Delete my profile</button>
        <button type="button" className="border border-gray-400 rounded-lg h-12">Cancel</button>
      </div>
    </div>
  );
};

export default Modal4;
