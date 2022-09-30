import React, { useState } from 'react';
import { ModalTypeProp } from '../Modal1';
import { setBG } from '../../../../features/setBG';

const Modal23 = ({ color }:ModalTypeProp) => {
  const [select, setSelect] = useState(2);
  const fn = () => {};
  const emojis = [
    [<p>&#129395;</p>, 'Cool'],
    [<p>&#128522;</p>, 'Not Bad'],
    [<p>&#128523;</p>, 'Average'],
    [<p>&#129303;</p>, 'Good'],
    [<p>&#128577;</p>, 'Bad'],
  ];
  return (
    <div className="w-[480px] h-[425px]">
      <div className="w-full h-[365px] bg-white rounded-xl mt-[60px] flex flex-col relative font-[Inter]">
        <button type="button" className="absolute right-3 top-3">
          <img src="/cancel.svg" alt="cancel" />
        </button>
        <div className="absolute left-0 right-0 ml-auto mr-auto w-fit -top-[60px]">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z" fill={color} />
            <path d="M52.552 75.523V70.3L65.466 65.018V73.435C65.466 77.043 66.796 78.848 70.691 78.848C72.7001 78.7714 74.6855 78.3869 76.578 77.708L78 89.29C74.5863 90.4894 70.9856 91.0685 67.368 91C56.92 91 52.552 84.068 52.552 75.523ZM42 55.293L52.552 50.977V29H65.466V45.7L76.021 41.383V53.752L42 67.669V55.293Z" fill="white" />
          </svg>
        </div>

        <div className={`basis-3/5 bg-opacity-10 rounded-t-xl pt-[60px] flex flex-col items-center justify-center gap-5 ${setBG(color)}`}>
          <p className="text-2xl font-semibold">Do you like our design?</p>
          <p className="text-xl">Help us to improve it</p>
        </div>
        <div className="basis-2/5 flex justify-evenly items-center">
          {emojis.map((emoji, i) => (
            <button
              type="button"
              onClick={() => setSelect(i)}
              key={i.toString()}
            >
              <div className={`text-[36px] w-[59px] h-[59px] rounded-full border  text-center ${select === i ? 'border-purple-500 outline outline-purple-600 outline-4' : 'border-gray-400'}`}>
                {emoji[0]}
              </div>
              <p className={`text-black mt-2 ${select !== i ? 'text-opacity-40' : ''}`}>{emoji[1]}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal23;
