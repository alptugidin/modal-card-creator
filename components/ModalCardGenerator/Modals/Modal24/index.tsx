import React, { CSSProperties } from 'react';
import { ModalProps } from '../modalPropTypes';
import style from './index.module.scss';
import { useAppSelector } from '../../../../redux/store';
import { Modal24Strings } from './Modal24Strings';

const Modal24 = ({
  textColor, themeColor, borderColor, otherTextColor, backgroundColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const editedText = useAppSelector((state) => state.modalCreate.editedText);
  const size = useAppSelector((state) => state.appearance.size);

  return (
    <div
      className={[style.modal, style.bg].join(' ')}
      style={{
        '--custom-color': colors.backgroundColor,
        transform: `scale(${size})`,
        transformOrigin: 'top right',
      } as CSSProperties}
    >
      <div className={style.head}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill={colors.themeColor} />
          <path d="M26.276 37.762V35.15L32.733 32.509V36.717C32.733 38.517 33.398 39.423 35.346 39.423C36.3504 39.3847 37.3429 39.1924 38.289 38.853L39 44.645C37.2932 45.2447 35.4928 45.5343 33.684 45.5C28.46 45.5 26.276 42.034 26.276 37.762ZM21 27.647L26.276 25.489V14.5H32.733V22.848L38.01 20.689V26.876L21 33.835V27.647Z" fill="white" />
        </svg>
        <p className={style.text1} style={{ '--c': colors.themeColor } as CSSProperties}>{editedText[0] || Modal24Strings[0]}</p>
      </div>
      <div className={style.body}>
        <p className={style.text2} style={{ '--c': colors.textColor } as CSSProperties}>
          {editedText[1] || Modal24Strings[1]}
        </p>
        <p className={style.text3} style={{ '--c': colors.textColor } as CSSProperties}>
          {editedText[2] || Modal24Strings[2]}
        </p>
      </div>
      <div className={style.foot}>
        <button
          type="button"
          style={{ '--c': colors.themeColor } as CSSProperties}
        >
          {editedText[3] || Modal24Strings[3]}
        </button>
        <button type="button">{editedText[4] || Modal24Strings[4]}</button>
      </div>
    </div>
  );
};

export default Modal24;
