import React, { CSSProperties, useEffect } from 'react';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import { Modal1Strings } from './Modal1Strings';

const Modal1 = ({
  inStory = true, backgroundColor, borderColor, textColor, otherTextColor, themeColor,
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
      } as CSSProperties}
    >

      <button type="button" className={style.cancel}>
        <img src="/cancel.svg" alt="cancel" />
      </button>

      <div className={style.svgDiv}>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z" fill="#7D4AEA" />
          <path d="M50 46.18L51.8 53.94L45 49.84L38.2 53.94L40 46.2L34 41.02L41.92 40.34L45 33.04L48.08 40.32L56 41L50 46.18ZM45 27.38L59 33.6V43C59 52.04 53.04 60.38 45 62.86C36.96 60.38 31 52.04 31 43V33.6L45 27.38ZM45 23L27 31V43C27 54.1 34.68 64.48 45 67C55.32 64.48 63 54.1 63 43V31L45 23Z" fill="white" />
        </svg>

      </div>

      <div className={style.textDiv}>
        <p>{editedText[0] || Modal1Strings[0]}</p>
        <p>{editedText[1] || Modal1Strings[1]}</p>
      </div>

      <div className={style.inputDiv}>
        <input type="text" placeholder={editedText[2] || Modal1Strings[2]} />
      </div>

      <div className={style.btnDiv}>
        <button type="button">{editedText[3] || Modal1Strings[3]}</button>
        <button type="button">{editedText[4] || Modal1Strings[4]}</button>
      </div>
    </div>
  );
};
export default Modal1;
//                        {editedText[0] || Modal1Strings[0]}
