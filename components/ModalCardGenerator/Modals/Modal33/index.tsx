import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { Modal33Strings } from './Modal33Strings';

const Modal33 = ({
  inStory = true, backgroundColor, textColor, borderColor, themeColor, otherTextColor,
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
      <div className={style.divLeft}>
        <div>
          <img
            src="/Modal33/img.png"
            alt="img
          "
          />
        </div>
      </div>
      <div className={style.divRight}>
        <div
          className={style.textDiv}
          style={{
            '--textColor': !inStory ? colors.textColor : textColor,
          } as CSSProperties}
        >
          <p>{editedText[0] || Modal33Strings[0]}</p>
          <p>{editedText[1] || Modal33Strings[1]}</p>
        </div>
        <div
          className={style.foot}
          style={{
            '--borderColor': !inStory ? colors.borderColor : borderColor,
            '--bgColor': !inStory ? colors.themeColor : themeColor,
          } as CSSProperties}
        >
          <input type="text" placeholder={editedText[2] || Modal33Strings[2]} />
          <button type="button">{editedText[3] || Modal33Strings[3]}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal33;
