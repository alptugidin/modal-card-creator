import React, { CSSProperties } from 'react';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import { Modal16Strings } from './Modal16Strings';

const Modal16 = ({
  inStory = true, backgroundColor, themeColor, textColor, otherTextColor, borderColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const editedText = useAppSelector((state) => state.modalCreate.editedText);
  const size = useAppSelector((state) => state.appearance.size);

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
        transform: `scale(${size})`,
        transformOrigin: 'top right',
      } as CSSProperties}
    >
      <button type="button" className={style.cancel}>
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className={style.svgDiv}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z" fill="#7D4AEA" />
          <path d="M52.552 75.523V70.3L65.466 65.018V73.435C65.466 77.043 66.796 78.848 70.691 78.848C72.7001 78.7714 74.6855 78.3869 76.578 77.708L78 89.29C74.5863 90.4894 70.9856 91.0685 67.368 91C56.92 91 52.552 84.068 52.552 75.523ZM42 55.293L52.552 50.977V29H65.466V45.7L76.021 41.383V53.752L42 67.669V55.293Z" fill="white" />
        </svg>
      </div>
      <div className={style.textDiv}>
        <p>
          {editedText[0] || Modal16Strings[0]}
          ????
        </p>
        <p>
          {editedText[1] || Modal16Strings[1]}
        </p>
      </div>
      <div className={style.signDiv}>
        <button type="button">{editedText[2] || Modal16Strings[2]}</button>
      </div>
    </div>
  );
};

export default Modal16;
