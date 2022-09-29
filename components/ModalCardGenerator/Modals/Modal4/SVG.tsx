import React from 'react';
import { useAppSelector } from '../../../../redux/store';

export interface SVGColor {
  color:string
}
const SVG = ({ color }:SVGColor) => {
  const activeColor = useAppSelector((state) => state.appearance.activeColor);
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z" fill={color} />
      <path d="M53 39V59H37V39H53ZM50 27H40L38 29H31V33H59V29H52L50 27ZM57 35H33V59C33.0032 60.0599 33.4256 61.0755 34.1751 61.8249C34.9245 62.5744 35.9401 62.9968 37 63H53C54.0599 62.9968 55.0755 62.5744 55.8249 61.8249C56.5744 61.0755 56.9968 60.0599 57 59V35Z" fill="white" />
    </svg>

  );
};

export default SVG;
