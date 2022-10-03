import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import style from './index.module.scss';
import { Modal9Strings } from './Modal9Strings';

const Modal9 = ({
  inStory = true, backgroundColor, themeColor, textColor, otherTextColor, borderColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const editedText = useAppSelector((state) => state.modalCreate.editedText);
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
      } as CSSProperties}
    >
      <div>
        <img src="/Modal9/img.png" alt="" />
      </div>
      <div className={style.textDiv}>
        <p>{editedText[0] || Modal9Strings[0]}</p>
        <p>{editedText[1] || Modal9Strings[1]}</p>
      </div>
      <div className={style.inputDiv}>
        <input type="text" placeholder={editedText[2] || Modal9Strings[2]} />
        <input type="text" placeholder={editedText[3] || Modal9Strings[3]} />
      </div>
      <div className={style.signDiv}>
        <button type="button">{editedText[4] || Modal9Strings[4]}</button>
      </div>
      <div className={style.accountText}>
        <p>
          {editedText[5] || Modal9Strings[5]}
        </p>
      </div>
    </div>
  );
};

export default Modal9;
