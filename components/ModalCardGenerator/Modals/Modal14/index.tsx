import React from 'react';

const Modal14 = () => {
  const fn = () => {};
  return (
    <div className="w-[740px] h-[340px] relative bg-white rounded-xl py-10 px-10 flex flex-col font-[Inter]">
      <div className="absolute right-3 top-3">
        <img src="/cancel.svg" alt="cancel" />
      </div>
      <div className="basis-1/2 flex">
        <div className="w-1/6">
          <img src="/Modal14/img.png" alt="img" />
        </div>
        <div className="flex flex-col justify-center gap-2 mb-4 px-8">
          <p className="text-3xl font-semibold">Jenny Yelriver</p>
          <p className="text-lg text-gray-400">@jennyyelriver</p>
        </div>
      </div>
      <div className="basis-1/2 pl-36">
        <p className="text-lg">
          Duis eget elit erat. Aliam euismod, mauris quis tristique
          feugiat, elit diam tincidunt erat, nec fringilla odio orci dapibu
          magna. Vestibulum ultrices sem nec ex efficitur aliquam.
        </p>
        <p className="text-gray-400 mt-10">10 SEP 2021 - 16:33 PM</p>

      </div>
    </div>
  );
};

export default Modal14;
