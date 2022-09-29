import React from 'react';
import style from './index.module.scss';
import { ModalTypeProp } from '../Modal1';
import { colorSet } from '../../../../features/colorSet';

const Modal2 = ({ size, color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className={style[`body-${size}`]}>
      <div className={style.canceldiv}>
        <img src="/cancel.svg" alt="" />
      </div>
      <div id="c1" className={style.c1}>
        <img src="/Modal2/img.png" alt="" />
      </div>
      <div id="c2" className={style.c2}>
        <div id="c3" className={[style.c3, style[`c3-${size}`]].join(' ')}>
          <p id="c4" className={style[`c4-${size}`]}>Install local now</p>
          <p id="c5" className={style[`c5-${size}`]}>We’ve gone native, try it!</p>
        </div>
        <div id="c6" className={style[`c6-${size}`]}>
          <button id="c7" type="button" className={style.c7}>
            Continue
          </button>
          <button id="c8" type="button" className={[style.c8, style[`bg-${colorSet(color).n}`]].join(' ')}>
            Not now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
