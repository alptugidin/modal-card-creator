import React, { CSSProperties } from 'react';
import style from './index.module.scss';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import { Modal32Strings } from './Modal32Strings';

const Modal32 = ({
  inStory = true, backgroundColor, themeColor, textColor, otherTextColor, borderColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const editedText = useAppSelector((state) => state.modalCreate.editedText);
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
        <p>{editedText[0] || Modal32Strings[0]}</p>
        <p>{editedText[1] || Modal32Strings[1]}</p>
      </div>
      <div
        className={style.btnDiv}
        style={{
          '--borderColor': !inStory ? colors.borderColor : borderColor,
        } as CSSProperties}
      >
        <button type="button">{editedText[2] || Modal32Strings[2]}</button>
      </div>
    </div>
  );
};

export default Modal32;
