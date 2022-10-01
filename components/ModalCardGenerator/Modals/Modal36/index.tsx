import React, { CSSProperties, useState } from 'react';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';

const Modal36 = ({
  inStory = true, backgroundColor, textColor, borderColor, otherTextColor, themeColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const [gender, setGender] = useState('Women');
  return (
    <div className={style.body}>
      <button type="button" className={style.cancel}>
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className={style.imgBg}>
        <img src="/Modal36/img.png" alt="" />
      </div>
      <div className={style.main}>
        <div className={style.textDiv}>
          <p className={style.signText}>Sign up for our newsletter</p>
          <div className={style.svgDiv}>
            <svg width="350" height="48" viewBox="0 0 350 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.22897 2L22.6035 24.3868L4.31265 46H345.687L327.396 24.3868L345.771 2H4.22897ZM0 0H350L330 24.3672L350 48H0L20 24.3672L0 0Z"
                style={{
                  '--svgColor': !inStory ? colors.themeColor : themeColor,
                } as CSSProperties}
              />
            </svg>
            <div className={style.priceDiv}>
              <p>GET 30% OF DISCOUNT</p>
            </div>
          </div>
          <p className={style.secondText}>Be the first to learn about new trends and offers.</p>
          <input type="text" placeholder="Enter your email adress" />

          <div
            className={style.btnDiv}
            style={{
              '--borderColor': !inStory ? colors.borderColor : borderColor,
              '--outlineColor': !inStory ? colors.themeColor : themeColor,
            } as CSSProperties}
          >
            <div className={style.btnDiv1}>
              <button
                type="button"
                data-gender="Women"
                onClick={(e) => setGender(e.currentTarget.dataset.gender as string)}
                className={[style.btnWomen, gender === 'Women' ? style.active : ''].join(' ')}
              />
              <p>Women</p>
            </div>
            <div className={style.btnDiv2}>
              <button
                type="button"
                data-gender="Men"
                onClick={(e) => setGender(e.currentTarget.dataset.gender as string)}
                className={[style.btnWomen, gender === 'Men' ? style.active : ''].join(' ')}
              />
              <p>Men</p>
            </div>
          </div>

          <button
            type="button"
            className={style.subscribe}
            style={{
              '--buttonColor': !inStory ? colors.themeColor : themeColor,
            } as CSSProperties}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal36;
