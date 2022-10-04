import React, { CSSProperties } from 'react';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import { Modal4Strings } from './Modal4Strings';
import style from './index.module.scss';

const Modal4 = ({
  inStory = true, themeColor, textColor, otherTextColor, borderColor, backgroundColor,
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
      <div className={style.head}>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z" fill="" />
          <path d="M53 39V59H37V39H53ZM50 27H40L38 29H31V33H59V29H52L50 27ZM57 35H33V59C33.0032 60.0599 33.4256 61.0755 34.1751 61.8249C34.9245 62.5744 35.9401 62.9968 37 63H53C54.0599 62.9968 55.0755 62.5744 55.8249 61.8249C56.5744 61.0755 56.9968 60.0599 57 59V35Z" fill="white" />
        </svg>

        <div className={style.textDiv}>
          <p>{editedText[0] || Modal4Strings[0]}</p>
          <p>{editedText[1] || Modal4Strings[1]}</p>
        </div>

      </div>
      <div className={style.foot}>
        <div className={style.footTextDiv}>
          <p>{editedText[2] || Modal4Strings[2]}</p>
        </div>
        <div className={style.btnDiv}>
          <button type="button">{editedText[3] || Modal4Strings[3]}</button>
          <button type="button">{editedText[4] || Modal4Strings[4]}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal4;
