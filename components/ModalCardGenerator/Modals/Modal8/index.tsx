import React, { CSSProperties, useState } from 'react';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { Modal8Strings } from './Modal8Strings';

const Modal8 = ({
  inStory = true, borderColor, backgroundColor, themeColor, textColor, otherTextColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const [toggle, setToggle] = useState<boolean>(true);
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
        <p>{editedText[0] || Modal8Strings[0]}</p>
        <p>{editedText[1] || Modal8Strings[1]}</p>
      </div>
      <div className={style.inputDiv}>
        <input type="text" placeholder={editedText[2] || Modal8Strings[2]} />
      </div>
      <div className={style.btnDiv}>
        <button
          type="button"
          className={style.toggleButton}
          onClick={() => setToggle(!toggle)}
        >
          <div className={toggle ? style.active : ''} />
        </button>
        <p>{editedText[3] || Modal8Strings[3]}</p>
      </div>
      <div className={style.signDiv}>
        <button type="button">{editedText[4] || Modal8Strings[4]}</button>
      </div>
    </div>
  );
};

export default Modal8;
