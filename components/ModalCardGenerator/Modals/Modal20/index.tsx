import React from 'react';
import { ModalTypeProp } from '../Modal1';
import { setBorder } from '../../../../features/setBG';

const Modal20 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className="w-[480px] h-[360px] bg-white rounded-xl relative flex flex-col text-[Inter] justify-evenly items-center p-10">
      <button type="button" className="absolute top-3 right-3">
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.9 15L31.9 20H45V35H36.6L35.6 30H17.5V15H30.9ZM35 10H12.5V52.5H17.5V35H31.5L32.5 40H50V15H36L35 10Z" fill={color} />
      </svg>
      <p className="text-3xl font-bold">Don't miss out</p>
      <p className="text-xl">Allow notifications get free ebook.</p>
      <button type="button" className={`w-[60px] h-[60px] rounded-full border flex justify-center items-center ${setBorder(color)}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill={color} />
        </svg>
      </button>
    </div>
  );
};

export default Modal20;
