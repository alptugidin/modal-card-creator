import React, { CSSProperties, useState } from 'react';
import style from './index.module.scss';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';

const Modal26 = ({
  inStory = true, backgroundColor, otherTextColor, textColor, borderColor, themeColor,
}:ModalProps) => {
  const fn = () => {};
  const colors = useAppSelector((state) => state.appearance.style);
  const [toggle, setToggle] = useState(3);
  const handleOnClick = (e:number, i:number) => {
    const place = e + i;
    setToggle(place);
  };
  return (
    <div
      className={style.body}
      style={{ '--c': !inStory ? colors.backgroundColor : backgroundColor } as CSSProperties}
    >
      <div className={style.cancelDiv}>
        <img src="/cancel.svg" alt="cancel" />
      </div>
      <div className={style.b1}>
        <img src="/Modal26/img.png" alt="" />
      </div>
      <div className={style.b2}>
        <div className={style.svgDiv}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z" fill={!inStory ? colors.themeColor : themeColor} />
            <path d="M52.552 75.523V70.3L65.466 65.018V73.435C65.466 77.043 66.796 78.848 70.691 78.848C72.7001 78.7714 74.6855 78.3869 76.578 77.708L78 89.29C74.5863 90.4894 70.9856 91.0685 67.368 91C56.92 91 52.552 84.068 52.552 75.523ZM42 55.293L52.552 50.977V29H65.466V45.7L76.021 41.383V53.752L42 67.669V55.293Z" fill="white" />
          </svg>
        </div>
        <p
          className={style.text1}
          style={{ '--c': !inStory ? colors.textColor : textColor } as CSSProperties}
        >
          OVERVIEW
        </p>
        <p
          className={style.text2}
          style={{ '--c': !inStory ? colors.textColor : textColor } as CSSProperties}
        >
          Welcome Onboarding
        </p>
        <p
          className={style.text3}
          style={{ '--c': !inStory ? colors.textColor : textColor } as CSSProperties}
        >
          Our award winning templates are the most beautiful way to present your ideas online.
        </p>
      </div>

      <div className={style.roundedDivParent}>
        {Array(5).fill(1).map((e, i) => (
          <button
            type="button"
            onClick={() => handleOnClick(e, i)}
            key={e + i}
            data-place={e + i}
            className={[style.roundedDiv, (e + i === toggle && style.active)].join(' ')}
            style={{
              '--c': !inStory ? colors.borderColor : borderColor,
              '--active': !inStory ? colors.themeColor : themeColor,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className={style.btnDiv}>
        <button
          type="button"
          style={{
            '--bgc': !inStory ? colors.backgroundColor : backgroundColor,
            '--bc': !inStory ? colors.borderColor : borderColor,
          }as CSSProperties}
        >
          Maybe Later
        </button>
        <button
          type="button"
          style={{
            '--tc': !inStory ? colors.themeColor : themeColor,
          } as CSSProperties}
        >
          Connect now
        </button>
      </div>
    </div>
  );
};

export default Modal26;
