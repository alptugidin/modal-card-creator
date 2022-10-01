import React, { CSSProperties } from 'react';
import style from './index.module.scss';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';

const Modal32 = ({
  inStory = true, backgroundColor, themeColor, textColor, otherTextColor, borderColor,
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
      <div>
        <img src="/Modal32/img.png" width="268" height="220" alt="" />
      </div>
      <div
        className={style.textDiv}
        style={{
          '--textColor': !inStory ? colors.textColor : textColor,
        } as CSSProperties}
      >
        <p>Opps</p>
        <p>Page not found</p>
      </div>
      <div
        className={style.btnDiv}
        style={{
          '--borderColor': !inStory ? colors.borderColor : borderColor,
        } as CSSProperties}
      >
        <button type="button">Back to home</button>
      </div>
    </div>
  );
};

export default Modal32;
