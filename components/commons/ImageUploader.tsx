import React from 'react';

export interface ImageUploaderProps {
  type:string
}

const ImageUploader = ({ type }:ImageUploaderProps) => {
  const fn = () => {};
  return (
    <div>
      <p className="font-[Inter] font-medium mt-7">
        Upload
        {' '}
        {type}
      </p>
      <div className="w-[378px] h-[178px] border-dashed border-2 border-gray-300 rounded-xl mt-3 flex flex-col gap-3 justify-center items-center">
        <div>
          <img src="/drop.png" alt="drop" width="80" height="80" />
        </div>
        <div className="flex gap-2">
          <img src="/cloud.svg" alt="" />
          <span className="whitespace-pre font-[Inter]">
            Drop your image here or
            {' '}
            <span className="base-color-text underline">upload</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
