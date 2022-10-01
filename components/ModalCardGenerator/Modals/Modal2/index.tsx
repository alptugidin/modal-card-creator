import React, { CSSProperties } from 'react';
import Image from 'next/image';
import style from './index.module.scss';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';

const Modal2 = ({
  inStory = true, textColor, otherTextColor, backgroundColor, themeColor, borderColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  return (
    <div
      className={style.body}
      style={{
        '--bgColor': !inStory ? colors.backgroundColor : backgroundColor,
        '--svgColor': !inStory ? colors.themeColor : themeColor,
        '--textColor': !inStory ? colors.textColor : textColor,
        '--borderColor': !inStory ? colors.borderColor : borderColor,
        '--themeColor': !inStory ? colors.themeColor : themeColor,
      } as CSSProperties}
    >
      <button type="button" className={style.cancel}>
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className={style.topDiv}>
        <img src="/Modal2/img.png" alt="" />
      </div>
      <div className={style.bottomDiv}>
        <div className={style.textDiv}>
          <p>Install local now</p>
          <p>We’ve gone native, try it!</p>
        </div>
        <div className={style.btnDiv}>
          <button type="button">Continue</button>
          <button type="button">Not now</button>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
