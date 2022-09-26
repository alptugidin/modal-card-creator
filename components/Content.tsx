import React, {
  createRef, LegacyRef, RefObject, useEffect, useRef,
} from 'react';
import ImageUploader from './ImageUploader';

const Content = () => {
  const fn = () => {};

  return (

    <div className="mt-24">
      <div className="flex items-center gap-4">
        <img src="/stepTwo.svg" alt="stepTwo" />
        <span className="font-[Poppins] font-bold text-xl tracking-tight whitespace-pre">
          Content
        </span>
      </div>

      <div className="flex">
        <div className="basis-1/3">
          <div className="mt-7">
            <p className="font-[Inter] font-normal mt-7">Edit your content</p>
          </div>
          <div className="flex flex-col gap-4 mt-3">
            {[...Array.from(Array(4).keys())].map((el) => (
              <form
                key={el.toString()}
                action=""
              >
                <input
                  type="text"
                  onChange={() => {}}
                  className="border outline-none rounded-lg p-1 w-full focus:border-purple-500 focus:outline-2 focus:outline-purple-400/40"
                  value="Test field"
                />
              </form>
            ))}
          </div>
          <ImageUploader type="Image" />
        </div>
      </div>
    </div>
  );
};

export default Content;
