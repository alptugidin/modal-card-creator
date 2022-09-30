import React from 'react';
import { ModalTypeProp } from '../Modal1';
import { setBorder } from '../../../../features/setBG';

const Modal19 = ({ color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className="w-[480px] h-[482px] rounded-xl bg-white relative flex flex-col py-10 px-16 font-[Inter]">
      <button type="button" className="absolute right-3 top-3">
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className="basis-1/2 flex flex-col items-center gap-5">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 55C31.3249 54.996 32.5943 54.468 33.5312 53.5312C34.468 52.5943 34.996 51.3249 35 50H25C25.004 51.3249 25.532 52.5943 26.4688 53.5312C27.4057 54.468 28.6751 54.996 30 55ZM45 40V27.5C45 19.825 40.925 13.4 33.75 11.7V10C33.75 9.00544 33.3549 8.05161 32.6516 7.34835C31.9484 6.64509 30.9946 6.25 30 6.25C29.0054 6.25 28.0516 6.64509 27.3484 7.34835C26.6451 8.05161 26.25 9.00544 26.25 10V11.7C19.1 13.4 15 19.8 15 27.5V40L10 45V47.5H50V45L45 40ZM40 42.5H20V27.5C20 21.3 23.775 16.25 30 16.25C36.225 16.25 40 21.3 40 27.5V42.5Z" fill={color} />
        </svg>
        <p className="text-4xl text-center font-semibold">Reminders</p>
        <div className="px-14">
          <p className="text-lg text-center">How often would you like to be reminded to write?</p>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col mt-10 gap-5">
        <button type="button" className={`bg-white h-12 border rounded-lg ${setBorder(color)}`}>Daily</button>
        <button type="button" className={`bg-white h-12 border rounded-lg ${setBorder(color)}`}>Weekly</button>
        <button type="button">No reminders</button>
      </div>
    </div>
  );
};

export default Modal19;
