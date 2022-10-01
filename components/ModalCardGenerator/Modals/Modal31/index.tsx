import React, { CSSProperties } from 'react';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';

const Modal31 = ({
  inStory = true, borderColor, themeColor, textColor, otherTextColor, backgroundColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  return (
    <div
      className={style.body}
      style={{
        '--bgColor': !inStory ? colors.backgroundColor : backgroundColor,
      } as CSSProperties}
    >
      <button className={style.cancelDiv}>
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className={style.main}>
        <div>
          <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M101 15.9002L43.9501 73.0002L22.7501 51.8002L29.8001 44.7502L43.9501 58.9002L93.9501 8.90018L101 15.9002ZM89.9501 41.1002C91.7902 49.1821 91.0724 57.6361 87.8962 65.2921C84.72 72.9481 79.2424 79.4274 72.2216 83.8333C65.2009 88.2391 56.9841 90.3536 48.7088 89.884C40.4334 89.4143 32.5086 86.3839 26.0313 81.2121C19.5541 76.0402 14.8447 68.9828 12.555 61.0166C10.2653 53.0505 10.5086 44.5695 13.2511 36.7477C15.9937 28.9259 21.0998 22.15 27.8629 17.3579C34.626 12.5659 42.7114 9.99467 51.0001 10.0002C58.5848 9.99112 66.0125 12.1604 72.4001 16.2502L79.6001 9.05018C71.2323 3.14792 61.24 -0.0139771 51.0001 0.000175827C40.3356 -0.0280606 29.9399 3.34528 21.3238 9.62995C12.7078 15.9146 6.32037 24.7831 3.08984 34.9467C-0.140686 45.1102 -0.0459762 56.0391 3.36021 66.1451C6.76639 76.2511 13.3065 85.0076 22.0302 91.142C30.7539 97.2764 41.2065 100.469 51.8689 100.256C62.5314 100.043 72.8481 96.4353 81.3197 89.9573C89.7914 83.4793 95.9765 74.4685 98.9763 64.2345C101.976 54.0005 101.634 43.0765 98.0001 33.0502L89.9501 41.1002Z" fill={!inStory ? colors.themeColor : themeColor} />
          </svg>
        </div>

        <div
          className={style.textDiv}
          style={{
            '--textColor': !inStory ? colors.textColor : textColor,
          } as CSSProperties}
        >
          <p>
            Good job,
            <strong>Jenny</strong>
          </p>
          <p>Your profile is created!</p>
        </div>
        <div
          className={style.btnDiv}
          style={{
            '--bgColor': !inStory ? colors.themeColor : themeColor,
          } as CSSProperties}
        >
          <button type="button">Go to my profile</button>
          <button type="button">Go to home</button>
        </div>
      </div>
    </div>
  );
};

export default Modal31;
