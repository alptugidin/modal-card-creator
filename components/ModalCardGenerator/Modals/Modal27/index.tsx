import React, { CSSProperties, useEffect } from 'react';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';

const Modal27 = ({
  inStory = true, borderColor, backgroundColor, textColor, otherTextColor, themeColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  return (
    <div
      className={style.body}
      style={{
        '--bgc': !inStory ? colors.backgroundColor : backgroundColor,
      } as CSSProperties}
    >
      <div
        className={style.roof}
        style={{
          '--roofColor': !inStory ? colors.themeColor : themeColor,
        } as CSSProperties}
      />
      <div
        className={style.textDiv}
        style={{
          '--textColor': !inStory ? colors.textColor : textColor,
        } as CSSProperties}
      >
        <p>Get straight to growing your business well</p>
        <p>There’s good news for parents who have child born.</p>
      </div>

      <div className={style.inputDiv}>
        <input
          type="text"
          placeholder="Enter your email address"
          style={{
            '--borderColor': !inStory ? colors.borderColor : borderColor,
          } as CSSProperties}
        />
      </div>
      <div className={style.phoneDiv}>
        <select
          className={style.selectX}
          style={{
            '--borderColor': !inStory ? colors.borderColor : borderColor,
          } as CSSProperties}
        >
          <option value="1">+1</option>
          <option value="1">+2</option>
          <option value="1">+3</option>
        </select>
        <input
          type="text"
          className={style.phoneInput}
          placeholder="Enter your phone"
          style={{
            '--borderColor': !inStory ? colors.borderColor : borderColor,
          } as CSSProperties}
        />
      </div>
      <div className={style.buttonDiv}>
        <button
          type="button"
          className={style.suBtn}
          style={{
            '--bgColor': !inStory ? colors.themeColor : themeColor,
          } as CSSProperties}
        >
          Sign up
        </button>
      </div>
      <div className={style.footerDiv}>
        <button
          type="button"
          className={style.button}
          style={{
            '--textColor': !inStory ? colors.textColor : textColor,
          } as CSSProperties}
        >
          I have an account
        </button>
        <button
          type="button"
          className={style.button}
          style={{
            '--textColor': !inStory ? colors.textColor : textColor,
          } as CSSProperties}
        >
          Forgot password
        </button>
      </div>
    </div>
  );
};

export default Modal27;
