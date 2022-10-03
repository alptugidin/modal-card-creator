import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { Modal25Strings } from './Modal25Strings';
import { ModalProps } from '../modalPropTypes';

const Modal25 = ({
  inStory = false, backgroundColor, textColor, otherTextColor, themeColor, borderColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const editedText = useAppSelector((state) => state.modalCreate.editedText);

  return (
    <div className={style.body} style={{ '--c': colors.backgroundColor } as CSSProperties}>
      <button type="button" className={style.cancel}>
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className={style.b1}>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z" fill={colors.themeColor} />
          <path d="M39.414 56.642V52.725L49.1 48.763V55.075C49.1 57.781 50.1 59.135 53.019 59.135C54.5257 59.0775 56.0147 58.7892 57.434 58.28L58.5 66.967C55.9398 67.8667 53.2392 68.3012 50.526 68.25C42.69 68.25 39.414 63.05 39.414 56.642ZM31.5 41.47L39.414 38.233V21.75H49.1V34.272L57.016 31.034V40.314L31.5 50.75V41.47Z" fill="white" />
        </svg>
      </div>
      <div className={style.b2}>
        <p className={style.text1} style={{ '--c': colors.textColor } as CSSProperties}>
          {editedText[0] || Modal25Strings[0]}
        </p>
        <p className={style.text2} style={{ '--c': colors.otherTextColor } as CSSProperties}>{editedText[1] || Modal25Strings[1]}</p>
      </div>
    </div>
  );
};

export default Modal25;
