import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { Modal12Strings } from './Modal12Strings';

const Modal12 = ({
  inStory = true, backgroundColor, textColor, otherTextColor, themeColor, borderColor,
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

      <div className={style.imgDiv}>
        <img src="/Modal12/img.png" alt="" />
      </div>
      <div className={style.mainDiv}>
        <button type="button" className={style.cancel}>
          <img src="/cancel.svg" alt="cancel" />
        </button>
        <div className={style.textDiv}>
          <p>{editedText[0] || Modal12Strings[0]}</p>
          <p>{editedText[1] || Modal12Strings[1]}</p>
        </div>
        <div className={style.inputDiv}>
          <input type="text" placeholder={editedText[2] || Modal12Strings[2]} />
          <input type="text" placeholder={editedText[3] || Modal12Strings[3]} />
        </div>
        <div className={style.signDiv}>
          <button type="button">{editedText[4] || Modal12Strings[4]}</button>
        </div>
        <div className={style.footButtons}>
          <button type="button">{editedText[5] || Modal12Strings[5]}</button>
          <button type="button">{editedText[6] || Modal12Strings[6]}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal12;
