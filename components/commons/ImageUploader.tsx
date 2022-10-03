import React, { useEffect, useState } from 'react';
import FormData from 'form-data';
import axios from 'axios';

export interface ImageUploaderProps {
  type:string
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

const ImageUploader = ({ type }:ImageUploaderProps) => {
  const [loading, setLoading] = useState(false);
  const [src, setSrc] = useState();
  const handleImageInput = (e?:HTMLInputEvent) => {
    setLoading(true);
    // @ts-ignore
    const files: any = e.target.files[0];
    if (files) {
      const formData = new FormData();
      formData.append('media', files);
      formData.append('key', process.env.NEXT_PUBLIC_API_KEY);
      axios.post('https://thumbsnap.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((res) => {
          setSrc(res.data.data.thumb);
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          setLoading(false);
        });
    }
  };
  // @ts-ignore
  return (
    <div>
      <p className="font-[Inter] font-medium mt-7">
        Upload
        {' '}
        {type}
      </p>
      <div
        className="w-[378px] h-[178px] border-dashed border-2 border-gray-300 rounded-xl mt-3 flex flex-col gap-3 justify-center items-center"
      >
        <div className={`${loading ? 'animate-pulse' : ''}`}>
          {src ? (
            <img id="drop" src={src} alt="drop" width="80" height="80" />
          ) : (
            <img id="drop" src="/drop.png" alt="drop" width="80" height="80" />
          )}
        </div>
        <div className="flex gap-2 ">
          <img src="/cloud.svg" alt="" />
          <span className="whitespace-pre font-[Inter]">
            Drop your image here or
            {' '}
            <label htmlFor="upload" className="cursor-pointer">
              <input type="file" id="upload" onChange={handleImageInput} />
              <span className="base-color-text underline">upload</span>
            </label>

          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
