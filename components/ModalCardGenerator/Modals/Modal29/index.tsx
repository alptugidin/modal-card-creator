import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import style from './index.module.scss';

const Modal29 = ({
  inStory = true, textColor, otherTextColor, backgroundColor, borderColor, themeColor,
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
        <img src="/cancel.svg" alt="cancel" />
      </div>
      <div className={style.leftDiv}>
        <img src="/Modal29/img.png" alt="img" />
      </div>
      <div
        className={style.rightDiv}
        style={{
          '--textColor': !inStory ? colors.textColor : textColor,
        } as CSSProperties}
      >
        <p>LOVE NATURE?</p>
        <p>Mauris feugiat egestas at llus tur pis massa, gravidez rum sit ameta.</p>
        <div
          className={style.foot}
          style={{
            '--borderColor': !inStory ? colors.borderColor : borderColor,
            '--btnColor': !inStory ? colors.themeColor : themeColor,

          } as CSSProperties}
        >
          <input
            type="text"
            placeholder="Enter your email address"

          />
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Modal29;
