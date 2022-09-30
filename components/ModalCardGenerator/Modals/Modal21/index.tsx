import React from 'react';
import { ModalTypeProp } from '../Modal1';
import { setBG } from '../../../../features/setBG';

const Modal21 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className="w-[480px] h-[672px] bg-white rounded-xl relative flex flex-col p-10 font-[Inter]">
      <button type="button" className="absolute right-3 top-3">
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className="basis-1/3 flex flex-col justify-center items-center gap-5">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5L10 12.5V27.725C10 40.35 18.525 52.125 30 55C41.475 52.125 50 40.35 50 27.725V12.5L30 5ZM45 27.725C45 37.725 38.625 46.975 30 49.8C21.375 46.975 15 37.75 15 27.725V15.975L30 10.35L45 15.975V27.725Z" fill={color} />
          <path d="M22.5245 35.8249C23.5755 37.1095 24.8957 38.1477 26.392 38.866C27.8882 39.5843 29.524 39.9652 31.1836 39.9819C32.8433 39.9986 34.4863 39.6506 35.9967 38.9626C37.5071 38.2745 38.848 37.2631 39.9245 35.9999C40.0549 35.8495 40.1432 35.6672 40.1805 35.4716C40.2177 35.276 40.2025 35.0741 40.1365 34.8862C40.0705 34.6984 39.9561 34.5314 39.8047 34.402C39.6533 34.2727 39.4704 34.1858 39.2745 34.1499C37.6241 33.8765 36.0548 33.2408 34.6795 32.2884C33.3041 31.3361 32.1568 30.0909 31.3202 28.6422C30.4835 27.1936 29.9782 25.5776 29.8406 23.9103C29.7031 22.2431 29.9366 20.5661 30.5245 18.9999C30.5931 18.812 30.6106 18.6092 30.5753 18.4123C30.54 18.2153 30.4532 18.0313 30.3236 17.8788C30.194 17.7264 30.0264 17.611 29.8377 17.5445C29.649 17.4779 29.4461 17.4625 29.2495 17.4999C27.314 17.8607 25.5056 18.7186 24.0019 19.9895C22.4982 21.2603 21.3508 22.9005 20.6725 24.7488C19.9942 26.5971 19.8083 28.59 20.133 30.5319C20.4577 32.4738 21.2818 34.2978 22.5245 35.8249Z" fill={color} />
        </svg>
        <p className="text-4xl font-bold">Dark Mode</p>
        <p className="text-2xl text-center">
          Just letting you know
          <br />
          {' '}
          that we have dark mode.
        </p>
      </div>
      <div className="basis-1/3 flex flex-col justify-center">
        <div>

          <div className="flex items-center gap-5">
            <img src="/Modal21/img.png" height="36" width="36" alt="img" />
            <p className="text-2xl font-semibold">Eye relief</p>
          </div>
          <div>
            <p className="text-lg ml-14">With dark mode you won’t be giving your eyes shock in the morning.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5">
          <img src="/Modal21/img_1.png" height="36" width="36" alt="img" />
          <p className="text-2xl font-semibold">Environment</p>
        </div>
        <div>
          <p className="text-lg ml-14">
            Change the mode depending in
            <br />
            {' '}
            which place you’re at the moment.
          </p>
        </div>
      </div>
      <div className="basis-1/3">
        <button
          type="button"
          className={`rounded-lg h-12 text-white  w-full mt-5 ${setBG(color)}`}
        >
          Turn on dark mode
        </button>
        <button
          type="button"
          className="rounded-lg h-12 text-black border border-gray-300 font-semibold w-full mt-5 bg-white"
        >
          Keep using light mode
        </button>
      </div>
    </div>
  );
};

export default Modal21;
