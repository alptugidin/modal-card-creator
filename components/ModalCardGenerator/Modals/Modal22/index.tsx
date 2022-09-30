import React from 'react';
import { setBG } from '../../../../features/setBG';
import { ModalTypeProp } from '../Modal1';

const Modal22 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className="w-[480px] h-[702px] bg-white rounded-xl relative flex flex-col font-[Inter]">
      <button type="button" className="absolute top-3 right-3">
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className="basis-1/3">
        <img src="/Modal22/img.png" alt="img" />
      </div>
      <div className="basis-2/3 relative flex flex-col px-10">
        <img src="/Modal22/img_1.png" alt="profile" className="absolute w-[120px] -top-[60px] right-0 left-0 ml-auto mr-auto" />
        <div className="text-center basis-1/2 mt-[60px] justify-start items-center flex flex-col">
          <p className="text-xl font-semibold mt-5">Jenny Yelriver</p>
          <p className="">Creative Director</p>
          <p className="text-3xl font-bold mt-7">
            5 reasons to purchase desktop computers
          </p>
        </div>
        <div className="basis-1/2 px-8">
          <p className="text-center text-xl">Our award winning templates are the most beautiful way to present your ideas online.</p>
          <div className="flex gap-5">
            <button
              type="button"
              className="rounded-lg h-12 text-black border border-gray-300 w-full mt-5 bg-white"
            >
              Maybe later
            </button>
            <button
              type="button"
              className={`rounded-lg h-12 border border-gray-300 w-full mt-5 text-white ${setBG(color)}`}
            >
              Read Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal22;
