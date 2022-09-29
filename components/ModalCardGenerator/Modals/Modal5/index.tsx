import React from 'react';
import { ModalTypeProp } from '../Modal1';
import { setBG } from '../../../../features/setBG';

const Modal5 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className="w-[480px] h-[283px] bg-white rounded-lg flex flex-col font-inter p-10 justify-center gap-7 text-center relative">
      <div className="absolute right-3 top-3">
        <img src="/cancel.svg" alt="cancel" />
      </div>
      <div>
        <p className="text-4xl font-semibold">The file is on it's way</p>
      </div>
      <div>
        <p className="text-2xl">You’ll get an notified when the receiver has opened the email.</p>
      </div>
      <div>
        <button
          type="button"
          className={`border border-gray-400 h-12 rounded-lg w-full text-white text-lg ${setBG(color)}`}
        >
          Go to dashboard
        </button>
      </div>
    </div>
  );
};

export default Modal5;
