import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';

const Modal34 = ({
  inStory = true, backgroundColor, borderColor, textColor, otherTextColor, themeColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
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
        <p>World Animal Day</p>
        {/* eslint-disable-next-line max-len */}
        <p>Animal Day is an international day of action for animal rights and welfare celebrated annually on October 4.</p>
        <button type="button" className={style.btn}>Learn more</button>
      </div>
    </div>
  );
};

export default Modal34;
