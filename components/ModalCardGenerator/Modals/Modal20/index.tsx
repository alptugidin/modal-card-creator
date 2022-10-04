import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { Modal20Strings } from './Modal20Strings';

const Modal20 = ({
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
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.9 15L31.9 20H45V35H36.6L35.6 30H17.5V15H30.9ZM35 10H12.5V52.5H17.5V35H31.5L32.5 40H50V15H36L35 10Z" fill="#7D4AEA" />
        </svg>
      </div>
      <div className={style.textDiv}>
        <p>{editedText[0] || Modal20Strings[0]}</p>
        <p>{editedText[1] || Modal20Strings[1]}</p>
      </div>
      <button type="button">
        <div className={style.roundedButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#7D4AEA" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Modal20;
