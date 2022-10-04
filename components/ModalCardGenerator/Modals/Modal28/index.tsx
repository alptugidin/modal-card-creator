import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import style from './index.module.scss';
import { Modal28Strings } from './Modal28Strings';

const Modal28 = ({
  inStory = true, backgroundColor, themeColor, borderColor, textColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const editedText = useAppSelector((state) => state.modalCreate.editedText);
  const size = useAppSelector((state) => state.appearance.size);

  return (
    <div
      className={style.body}
      style={{
        '--bgColor': !inStory ? colors.backgroundColor : backgroundColor,
        transform: `scale(${size})`,
        transformOrigin: 'top right',
      } as CSSProperties}
    >
      <div className={style.cancelDiv}>
        <img src="/cancel.svg" alt="" />
      </div>
      <div
        className={style.roof}
        style={{
          '--roofColor': !inStory ? colors.themeColor : themeColor,
        } as CSSProperties}
      />
      <div className={style.ppDiv}>
        <img src="/Modal28/img.png" width="60" height="60" alt="" />
        <div
          className={style.infoDiv}
          style={{
            '--textColor': !inStory ? colors.textColor : textColor,
          } as CSSProperties}
        >
          <p>{editedText[0] || Modal28Strings[0]}</p>
          <p>{editedText[1] || Modal28Strings[1]}</p>
        </div>
      </div>
      <div
        className={style.textDiv}
        style={{
          '--textColor': !inStory ? colors.textColor : textColor,
        } as CSSProperties}
      >
        <p>{editedText[2] || Modal28Strings[2]}</p>
        <p>{editedText[3] || Modal28Strings[3]}</p>
      </div>
      <div
        className={style.footer}
        style={{
          '--borderColor': !inStory ? colors.borderColor : borderColor,
          '--bgColor': !inStory ? colors.themeColor : themeColor,
        } as CSSProperties}
      >
        <input type="text" placeholder={editedText[4] || Modal28Strings[4]} />
        <button type="button">
          {editedText[5] || Modal28Strings[5]}
        </button>
      </div>
    </div>
  );
};

export default Modal28;
