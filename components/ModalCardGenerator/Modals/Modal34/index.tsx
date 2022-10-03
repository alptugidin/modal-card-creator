import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { Modal34Strings } from './Modal34Strings';

const Modal34 = ({
  inStory = true, backgroundColor, borderColor, textColor, otherTextColor, themeColor,
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
      <div className={style.imageBg}>
        <img src="/Modal34/img.png" alt="img" className="object-cover" />
      </div>
      <div
        className={style.leftDiv}
        style={{
          '--textColor': !inStory ? colors.textColor : textColor,
        } as CSSProperties}
      >
        <p>{editedText[0] || Modal34Strings[0]}</p>
        {/* eslint-disable-next-line max-len */}
        <p>{editedText[1] || Modal34Strings[1]}</p>
        <button type="button" className={style.btn}>{editedText[2] || Modal34Strings[2]}</button>
      </div>
    </div>
  );
};

export default Modal34;
