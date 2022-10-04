import React, { CSSProperties } from 'react';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { Modal5Strings } from './Modal5Strings';

const Modal5 = ({
  inStory = true, backgroundColor, borderColor, textColor, otherTextColor, themeColor,
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
      <div className={style.textDiv}>
        <p>{editedText[0] || Modal5Strings[0]}</p>
        <p>{editedText[1] || Modal5Strings[1]}</p>
      </div>
      <div className={style.buttonDiv}>
        <button type="button">{editedText[2] || Modal5Strings[2]}</button>
      </div>
    </div>
  );
};

export default Modal5;
