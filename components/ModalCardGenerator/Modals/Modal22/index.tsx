import React, { CSSProperties } from 'react';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { Modal22Strings } from './Modal22Strings';

const Modal22 = ({
  inStory = true, themeColor, textColor, backgroundColor, otherTextColor, borderColor,
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
      <div className={style.imgDiv}>
        <img src="/Modal22/img.png" alt="bg" />
        <img src="/Modal22/img_1.png" alt="pp" className={style.pp} />
      </div>
      <div className={style.textDiv}>
        <p>{editedText[0] || Modal22Strings[0]}</p>
        <p>{editedText[1] || Modal22Strings[1]}</p>
        <p>{editedText[2] || Modal22Strings[2]}</p>
        <p>{editedText[3] || Modal22Strings[3]}</p>
      </div>
      <div className={style.btnDiv}>
        <button type="button">{editedText[4] || Modal22Strings[4]}</button>
        <button type="button">{editedText[5] || Modal22Strings[5]}</button>
      </div>
    </div>
  );
};

export default Modal22;
