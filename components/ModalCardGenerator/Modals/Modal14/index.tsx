import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import style from './index.module.scss';
import { Modal14Strings } from './Modal14Strings';

const Modal14 = ({
  inStory = true, backgroundColor, textColor, otherTextColor, themeColor, borderColor,
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
      <button type="button" className={style.cancel}>
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className={style.ppDiv}>
        <img src="/Modal14/img.png" alt="" />
      </div>
      <div className={style.mainDiv}>
        <div className={style.infoDiv}>
          <p>{editedText[0] || Modal14Strings[0]}</p>
          <p>{editedText[1] || Modal14Strings[1]}</p>
        </div>
        <div className={style.textDiv}>
          <p>
            {editedText[2] || Modal14Strings[2]}
          </p>
          <p>{editedText[3] || Modal14Strings[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal14;
