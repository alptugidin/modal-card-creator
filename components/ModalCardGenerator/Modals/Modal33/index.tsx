import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';

const Modal33 = ({
  inStory = true, backgroundColor, textColor, borderColor, themeColor, otherTextColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  return (
    <div
      className={style.body}
      style={{
        '--bgColor': !inStory ? colors.backgroundColor : backgroundColor,
      } as CSSProperties}
    >
      <button type="button" className={style.cancel}>
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className={style.divLeft}>
        <div>
          <img
            src="/Modal33/img.png"
            alt="img
          "
          />
        </div>
      </div>
      <div className={style.divRight}>
        <div
          className={style.textDiv}
          style={{
            '--textColor': !inStory ? colors.textColor : textColor,
          } as CSSProperties}
        >
          <p>BE THE FIRST TO KNOW</p>
          <p>Sign up for email list and get our newest collection.</p>
        </div>
        <div
          className={style.foot}
          style={{
            '--borderColor': !inStory ? colors.borderColor : borderColor,
            '--bgColor': !inStory ? colors.themeColor : themeColor,
          } as CSSProperties}
        >
          <input type="text" placeholder="Enter your email address" />
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Modal33;
