import React from 'react';
import { setBG } from '../../../../features/setBG';
import Modal1Stories from '../../../../stories/Modal1.stories';
import { ModalTypeProp } from '../Modal1';

const Modal13 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className={`w-[480px] h-[466px] rounded-xl relative flex flex-col px-20 py-10 items-center relative ${setBG(color)}`}>
      <div>
        <img src="/cancel.svg" alt="cancel" className="absolute top-3 right-3" />
      </div>
      <div className="basis-1/2">
        <img src="/Modal13/img.png" width="120" height="120" alt="img" />
      </div>
      <div className="basis-1/2 font-[Inter] text-center">
        <p className="font-semibold text-3xl text-white">Welcome to talk</p>
        <p className="mt-5 text-white">Send friends photos, videos, locations, songs, voice messages,and more.</p>
      </div>
      <div className="absolute bottom-0 w-full bg-black rounded-b-lg h-16 bg-opacity-20 flex items-center justify-center">
        <p className="text-white text-2xl">Lets get started</p>
      </div>
    </div>
  );
};

export default Modal13;
