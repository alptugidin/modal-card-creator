import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import style from './index.module.scss';
import { Modal29Strings } from './Modal29Strings';

const Modal29 = ({
  inStory = true, textColor, otherTextColor, backgroundColor, borderColor, themeColor,
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
      <div className={style.cancelDiv}>
        <img src="/cancel.svg" alt="cancel" />
      </div>
      <div className={style.leftDiv}>
        <img src="/Modal29/img.png" alt="img" />
      </div>
      <div
        className={style.rightDiv}
        style={{
          '--textColor': !inStory ? colors.textColor : textColor,
        } as CSSProperties}
      >
        <p>{editedText[0] || Modal29Strings[0]}</p>
        <p>{editedText[1] || Modal29Strings[1]}</p>
        <div
          className={style.foot}
          style={{
            '--borderColor': !inStory ? colors.borderColor : borderColor,
            '--btnColor': !inStory ? colors.themeColor : themeColor,

          } as CSSProperties}
        >
          <input
            type="text"
            placeholder={editedText[2] || Modal29Strings[2]}

          />
          <button type="button">{editedText[3] || Modal29Strings[3]}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal29;
