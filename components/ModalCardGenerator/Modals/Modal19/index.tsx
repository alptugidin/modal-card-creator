import React, { CSSProperties } from 'react';
import style from './index.module.scss';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import { Modal19Strings } from './Modal19Strings';

const Modal19 = ({
  inStory = true, backgroundColor, themeColor, textColor, otherTextColor, borderColor,
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
      <div className={style.svgDiv}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 55C31.3249 54.996 32.5943 54.468 33.5312 53.5312C34.468 52.5943 34.996 51.3249 35 50H25C25.004 51.3249 25.532 52.5943 26.4688 53.5312C27.4057 54.468 28.6751 54.996 30 55ZM45 40V27.5C45 19.825 40.925 13.4 33.75 11.7V10C33.75 9.00544 33.3549 8.05161 32.6516 7.34835C31.9484 6.64509 30.9946 6.25 30 6.25C29.0054 6.25 28.0516 6.64509 27.3484 7.34835C26.6451 8.05161 26.25 9.00544 26.25 10V11.7C19.1 13.4 15 19.8 15 27.5V40L10 45V47.5H50V45L45 40ZM40 42.5H20V27.5C20 21.3 23.775 16.25 30 16.25C36.225 16.25 40 21.3 40 27.5V42.5Z" fill="#7D4AEA" />
        </svg>

      </div>
      <div className={style.textDiv}>
        <p>{editedText[0] || Modal19Strings[0]}</p>
        <p>{editedText[1] || Modal19Strings[1]}</p>
      </div>
      <div className={style.signDiv}>
        <button type="button">{editedText[2] || Modal19Strings[2]}</button>
        <button type="button">{editedText[3] || Modal19Strings[3]}</button>
        <button type="button">{editedText[4] || Modal19Strings[4]}</button>
      </div>
    </div>
  );
};

export default Modal19;
