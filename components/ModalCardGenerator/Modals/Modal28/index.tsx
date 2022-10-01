import React, { CSSProperties } from 'react';
import Image from 'next/image';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import style from './index.module.scss';

const Modal28 = ({
  inStory = true, backgroundColor, themeColor, borderColor, textColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  return (
    <div
      className={style.body}
      style={{
        '--bgColor': !inStory ? colors.backgroundColor : backgroundColor,
      } as CSSProperties}
    >
      <div className={style.cancelDiv}>
        <img src="/cancel.svg" alt="" />
      </div>
      <div
        className={style.roof}
        style={{
          '--roofColor': !inStory ? colors.themeColor : themeColor,
        } as CSSProperties}
      />
      <div className={style.ppDiv}>
        <img src="/Modal28/img.png" width="60" height="60" alt="" />
        <div
          className={style.infoDiv}
          style={{
            '--textColor': !inStory ? colors.textColor : textColor,
          } as CSSProperties}
        >
          <p>Jenny Yelriver</p>
          <p>Creative Director</p>
        </div>
      </div>
      <div
        className={style.textDiv}
        style={{
          '--textColor': !inStory ? colors.textColor : textColor,
        } as CSSProperties}
      >
        <p>Start your 14-day free trial today and shine.</p>
        <p>If you’re looking for a new way to promote your business that won’t cost you money.</p>
      </div>
      <div
        className={style.footer}
        style={{
          '--borderColor': !inStory ? colors.borderColor : borderColor,
          '--bgColor': !inStory ? colors.themeColor : themeColor,
        } as CSSProperties}
      >
        <input type="text" placeholder="Enter your email address" />
        <button type="button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Modal28;
