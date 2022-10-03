import React, { CSSProperties } from 'react';
import style from './index.module.scss';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import { Modal7Strings } from './Modal7Strings';

const Modal7 = ({
  inStory = true, textColor, backgroundColor, otherTextColor, borderColor, themeColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const editedText = useAppSelector((state) => state.modalCreate.editedText);
  return (
    <div
      className={style.body}
      style={{
        '--bgColor': !inStory ? colors.backgroundColor : backgroundColor,
        '--svgColor': !inStory ? colors.themeColor : themeColor,
        '--textColor': !inStory ? colors.textColor : textColor,
        '--borderColor': !inStory ? colors.borderColor : borderColor,
        '--themeColor': !inStory ? colors.themeColor : themeColor,
        '--otherTextColor': !inStory ? colors.otherTextColor : otherTextColor,
      } as CSSProperties}
    >
      <button type="button" className={style.cancel}>
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className={style.textDiv}>
        <p>{editedText[0] || Modal7Strings[0]}</p>
        <p>{editedText[1] || Modal7Strings[1]}</p>
      </div>
      <div className={style.btnDiv}>
        <button type="button">{editedText[2] || Modal7Strings[2]}</button>
        <button type="button">{editedText[3] || Modal7Strings[3]}</button>
      </div>
    </div>
  );
};

export default Modal7;
