import React, { useState } from 'react';

const Modal15 = () => {
  const fn = () => {};
  const emojis = [<p>😶</p>, <p>☹</p>, <p>&#128524;</p>, <p>🤗</p>, <p>😄</p>];
  const [select, setSelect] = useState(2);
  return (
    <div className="w-[400px] h-[226px] bg-white rounded-xl relative flex flex-col py-10 px-5">
      <div className="absolute right-3 top-3">
        <img src="/cancel.svg" alt="cancel" />
      </div>
      <div className="basis-1/2 font-[Inter] text-3xl font-semibold text-center flex items-center justify-center">
        <p>Let’s feedback</p>
      </div>
      <div className="basis-1/2 flex justify-evenly items-center">
        {emojis.map((emoji, i) => (
          <button
            type="button"
            onClick={() => setSelect(i)}
            key={i.toString()}
          >
            <div className={`text-[36px] w-[59px] h-[59px] rounded-full border  text-center ${select === i ? 'border-purple-500 outline outline-purple-100  outline-4' : 'border-gray-400'}`}>
              {emoji}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Modal15;
