import React from 'react';
import style from './index.module.scss';
import { ModalTypeProp } from '../Modal1';
import CheckBox from '../../../commons/CheckBox';
import RoundBox from './RoundBox';

const Modal3 = ({ size, color }:ModalTypeProp) => {
  const fn = () => {};
  return (
    <div className={style[`body-${size}`]}>
      <div className={style.c1}>
        <p className={[style[`c2-${size}`], style[`text-${color}`]].join(' ')}>PLANS</p>
        <p className={style[`c3-${size}`]}>Choose best for you</p>
        <p className={style[`c4-${size}`]}>Only pay for the capacity that you use.</p>
      </div>
      <div className={style.c5}>
        <div className={style[`c6-${size}`]}>
          <RoundBox color="default" />
          <p>Starter</p>
        </div>
        <div className={style[`c7-${size}`]}>
          <RoundBox color="default" />
          <p>Pro</p>
        </div>
        <div className={style[`c8-${size}`]}>
          <RoundBox color="default" />
          <p>Bussines</p>
        </div>
      </div>
    </div>
  );
};

export default Modal3;
