import React, { CSSProperties } from 'react';
import Image from 'next/image';
import style from './index.module.scss';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import { Modal2Strings } from './Modal2Strings';

const Modal2 = ({
  inStory = true, textColor, otherTextColor, backgroundColor, themeColor, borderColor,
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
      } as CSSProperties}
    >
      <button type="button" className={style.cancel}>
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className={style.topDiv}>
        <img src="/Modal2/img.png" alt="" />
      </div>
      <div className={style.bottomDiv}>
        <div className={style.textDiv}>
          <p>{editedText[0] || Modal2Strings[0]}</p>
          <p>{editedText[1] || Modal2Strings[1]}</p>
        </div>
        <div className={style.btnDiv}>
          <button type="button">{editedText[2] || Modal2Strings[2]}</button>
          <button type="button">{editedText[3] || Modal2Strings[3]}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
