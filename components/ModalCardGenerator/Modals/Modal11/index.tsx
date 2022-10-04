import React, { CSSProperties } from 'react';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { Modal11Strings } from './Modal11Strings';

const Modal11 = ({
  inStory = true, textColor, backgroundColor, otherTextColor, borderColor, themeColor,
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
      <div>
        <div className={style.imgDiv}>
          <img src="/Modal11/img.png" alt="" width="160" height="173" />
        </div>
      </div>
      <div className={style.textDiv}>
        <p>{editedText[0] || Modal11Strings[0]}</p>
        <p>{editedText[1] || Modal11Strings[1]}</p>
      </div>
      <div className={style.inputDiv}>
        <input type="text" placeholder={editedText[2] || Modal11Strings[2]} />
      </div>
      <div className={style.signDiv}>
        <button type="button">{editedText[3] || Modal11Strings[3]}</button>
      </div>
      <div className={style.accountText}>
        <p>
          {editedText[4] || Modal11Strings[4]}
        </p>
      </div>
    </div>
  );
};

export default Modal11;
