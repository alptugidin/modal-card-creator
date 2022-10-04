import React, { CSSProperties } from 'react';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { Modal10Strings } from './Modal10Strings';

const Modal10 = ({
  inStory = true, textColor, backgroundColor, otherTextColor, themeColor, borderColor,
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
      <div className={style.leftDiv}>
        <div className={style.textDiv}>
          <p>{editedText[0] || Modal10Strings[0]}</p>
          <p>{editedText[1] || Modal10Strings[1]}</p>
        </div>
        <div className={style.inputDiv}>
          <input type="text" placeholder={editedText[2] || Modal10Strings[2]} />
          <input type="text" placeholder={editedText[3] || Modal10Strings[3]} />
        </div>
        <div className={style.signDiv}>
          <button type="button">{editedText[4] || Modal10Strings[4]}</button>
        </div>
        <div className={style.footButtons}>
          <button type="button">{editedText[5] || Modal10Strings[5]}</button>
          <button type="button">{editedText[6] || Modal10Strings[6]}</button>
        </div>
      </div>
      <div className={style.rightDiv}>
        <img src="/Modal10/img.png" alt="img" />
      </div>
    </div>
  );
};

export default Modal10;
