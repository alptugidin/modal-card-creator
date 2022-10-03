import React, { CSSProperties, useEffect } from 'react';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import { Modal27Strings } from './Modal27Strings';

const Modal27 = ({
  inStory = true, borderColor, backgroundColor, textColor, otherTextColor, themeColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const editedText = useAppSelector((state) => state.modalCreate.editedText);
  return (
    <div
      className={style.body}
      style={{
        '--bgc': !inStory ? colors.backgroundColor : backgroundColor,
      } as CSSProperties}
    >
      <div
        className={style.roof}
        style={{
          '--roofColor': !inStory ? colors.themeColor : themeColor,
        } as CSSProperties}
      />
      <div
        className={style.textDiv}
        style={{
          '--textColor': !inStory ? colors.textColor : textColor,
        } as CSSProperties}
      >
        <p>{editedText[0] || Modal27Strings[0]}</p>
        <p>{editedText[1] || Modal27Strings[1]}</p>
      </div>

      <div className={style.inputDiv}>
        <input
          type="text"
          placeholder="Enter your email address"
          style={{
            '--borderColor': !inStory ? colors.borderColor : borderColor,
          } as CSSProperties}
        />
      </div>
      <div className={style.phoneDiv}>
        <select
          className={style.selectX}
          style={{
            '--borderColor': !inStory ? colors.borderColor : borderColor,
          } as CSSProperties}
        >
          <option value="1">+1</option>
          <option value="1">+2</option>
          <option value="1">+3</option>
        </select>
        <input
          type="text"
          className={style.phoneInput}
          placeholder={editedText[2] || Modal27Strings[2]}
          style={{
            '--borderColor': !inStory ? colors.borderColor : borderColor,
          } as CSSProperties}
        />
      </div>
      <div className={style.buttonDiv}>
        <button
          type="button"
          className={style.suBtn}
          style={{
            '--bgColor': !inStory ? colors.themeColor : themeColor,
          } as CSSProperties}
        >
          {editedText[3] || Modal27Strings[3]}
        </button>
      </div>
      <div className={style.footerDiv}>
        <button
          type="button"
          className={style.button}
          style={{
            '--textColor': !inStory ? colors.textColor : textColor,
          } as CSSProperties}
        >
          {editedText[4] || Modal27Strings[4]}
        </button>
        <button
          type="button"
          className={style.button}
          style={{
            '--textColor': !inStory ? colors.textColor : textColor,
          } as CSSProperties}
        >
          {editedText[5] || Modal27Strings[5]}
        </button>
      </div>
    </div>
  );
};

export default Modal27;
