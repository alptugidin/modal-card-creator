import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { changePosition, changeSize } from '../../features/appearanceSlice';
import ImageUploader from '../commons/ImageUploader';

const Appearance = () => {
  const dispatch = useAppDispatch();
  const size = useAppSelector((state) => state.appearance.size);
  const position = useAppSelector((state) => state.appearance.position);
  const [color, setColor] = useState<number>(-1);

  const positionRadius = (place:number):string => {
    let output:string = '';
    if (place === 0) {
      output = 'rounded-tl-md';
    } if (place === 2) {
      output = 'rounded-tr-md';
    } if (place === 6) {
      output = 'rounded-bl-md';
    } if (place === 8) {
      output = 'rounded-br-md';
    }
    return output;
  };

  const handleChangeSize = (e:React.MouseEvent) => {
    const _size = (e.target as HTMLButtonElement).textContent;
    if (_size !== null) {
      dispatch(changeSize(_size));
    }
  };

  const handleChangePosition = (e:React.MouseEvent) => {
    const { pos } = (e.currentTarget as HTMLButtonElement).dataset;
    if (pos !== undefined) {
      dispatch(changePosition(parseInt(pos, 10)));
    }
  };

  const colorPicker = (e:React.MouseEvent) => {
    const { pos } = (e.currentTarget as HTMLButtonElement).dataset;
    if (pos !== undefined) {
      setColor(Number(pos));
    }
  };

  return (
    <div className="mt-24">
      <div className="flex items-center gap-4">
        <img src="/stepTwo.svg" alt="stepTwo" />
        <span className="font-[Poppins] font-bold text-xl tracking-tight whitespace-pre">
          Appearance
          <span className="font-medium"> (Size, colors, logo)</span>
        </span>
      </div>

      <div className="flex">
        <div className="basis-1/3">
          <div>
            <p className="font-[Inter] font-medium mt-7">Size</p>
            <div className="w-fit">
              <div className="flex bg-[#F5F5F5] rounded-xl p-1 mt-3">
                {['Small', 'Medium', 'Large'].map((el) => (
                  <button
                    key={el}
                    type="button"
                    onClick={handleChangeSize}
                    className={`${el === size ? 'bg-white' : 'text-gray-500'} text-xs rounded-lg leading-[42px] px-5 h-[42px] text-center font-[Inter] font-semibold`}
                  >
                    {el}
                  </button>
                ))}
              </div>
            </div>
            <p className="font-[Inter] font-medium mt-7">Poisiton</p>
            {/*
            0   1   2
            3   4   5
            6   7   8
            */}
            <div className="w-[82px] h-[55px] flex flex-wrap justify-between items-center gap-1 mt-3">
              {[...Array.from(Array(9).keys())].map((pos) => (
                <button
                  type="button"
                  key={pos.toString()}
                  data-pos={pos}
                  onClick={handleChangePosition}
                  className={`w-[24px] h-[15px] border border-gray-300 ${positionRadius(pos)} ${pos === position && 'base-color-bg'}`}
                />
              ))}
            </div>

            <p className="font-[Inter] font-medium mt-7">Colors</p>
            <div className="flex gap-2 mt-3">
              {[...Array.from(Array(5).keys())].map((i) => (
                <button
                  type="button"
                  data-pos={i}
                  onClick={colorPicker}
                  key={i.toString()}
                  className={`w-[42px] h-[42px] rounded-lg ${color === i ? 'border-purple-400 border-2' : 'border'
                      + ' border-gray-400'} theme-${i + 1}`}
                />
              ))}
            </div>
            <ImageUploader type="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
