import React, { CSSProperties } from 'react';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { Modal21Strings } from './Modal21Strings';

const Modal21 = ({
  inStory = true, themeColor, backgroundColor, borderColor, textColor, otherTextColor,
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
      <div className={style.svgDiv}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5L10 12.5V27.725C10 40.35 18.525 52.125 30 55C41.475 52.125 50 40.35 50 27.725V12.5L30 5ZM45 27.725C45 37.725 38.625 46.975 30 49.8C21.375 46.975 15 37.75 15 27.725V15.975L30 10.35L45 15.975V27.725Z" fill="#7D4AEA" />
          <path d="M22.5245 35.8249C23.5755 37.1095 24.8957 38.1477 26.392 38.866C27.8882 39.5843 29.524 39.9652 31.1836 39.9819C32.8433 39.9986 34.4863 39.6506 35.9967 38.9626C37.5071 38.2745 38.848 37.2631 39.9245 35.9999C40.0549 35.8495 40.1432 35.6672 40.1805 35.4716C40.2177 35.276 40.2025 35.0741 40.1365 34.8862C40.0705 34.6984 39.9561 34.5314 39.8047 34.402C39.6533 34.2727 39.4704 34.1858 39.2745 34.1499C37.6241 33.8765 36.0548 33.2408 34.6795 32.2884C33.3041 31.3361 32.1568 30.0909 31.3202 28.6422C30.4835 27.1936 29.9782 25.5776 29.8406 23.9103C29.7031 22.2431 29.9366 20.5661 30.5245 18.9999C30.5931 18.812 30.6106 18.6092 30.5753 18.4123C30.54 18.2153 30.4532 18.0313 30.3236 17.8788C30.194 17.7264 30.0264 17.611 29.8377 17.5445C29.649 17.4779 29.4461 17.4625 29.2495 17.4999C27.314 17.8607 25.5056 18.7186 24.0019 19.9895C22.4982 21.2603 21.3508 22.9005 20.6725 24.7488C19.9942 26.5971 19.8083 28.59 20.133 30.5319C20.4577 32.4738 21.2818 34.2978 22.5245 35.8249Z" fill="#7D4AEA" />
        </svg>
      </div>
      <div className={style.textDiv}>
        <p>{editedText[0] || Modal21Strings[0]}</p>
        <p>{editedText[1] || Modal21Strings[1]}</p>
      </div>
      <div className={style.textDiv2}>
        <div className={style.firstTextDiv}>
          <img src="/Modal21/img.png" alt="" />
          <p>{editedText[2] || Modal21Strings[2]}</p>
        </div>
        <div className={style.sum}>
          <p>{editedText[3] || Modal21Strings[3]}</p>
        </div>
      </div>
      <div className={style.textDiv2}>
        <div className={style.firstTextDiv}>
          <img src="/Modal21/img_1.png" alt="" />
          <p>{editedText[4] || Modal21Strings[4]}</p>
        </div>
        <div className={style.sum}>
          <p>{editedText[5] || Modal21Strings[5]}</p>
        </div>
      </div>
      <div className={style.btnDiv}>
        <button type="button">{editedText[6] || Modal21Strings[6]}</button>
        <button type="button">{editedText[7] || Modal21Strings[7]}</button>
      </div>
    </div>
  );
};

export default Modal21;
