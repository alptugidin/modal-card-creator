import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { Modal13Strings } from './Modal13Strings';

const Modal13 = ({
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
      <div className={style.svgDiv}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M85.2178 73.712C84.9628 73.4833 84.6654 73.3071 84.3423 73.1933C84.0192 73.0796 83.677 73.0306 83.335 73.0492C82.993 73.0677 82.6579 73.1536 82.349 73.3016C82.0401 73.4496 81.7635 73.6571 81.5348 73.9121C78.8138 76.9239 75.4914 79.3314 71.782 80.9792C68.0726 82.627 64.0588 83.4785 59.9999 83.4785C55.941 83.4785 51.9272 82.627 48.2178 80.9792C44.5084 79.3314 41.1858 76.9239 38.4648 73.9121C38.2383 73.6499 37.9618 73.4355 37.6515 73.2813C37.3412 73.1272 37.0034 73.0365 36.6576 73.0144C36.3118 72.9922 35.9651 73.0391 35.6377 73.1524C35.3103 73.2657 35.0087 73.4431 34.7506 73.6742C34.4925 73.9053 34.283 74.1854 34.1343 74.4984C33.9856 74.8113 33.9007 75.1508 33.8846 75.4969C33.8686 75.843 33.9216 76.1887 34.0407 76.5141C34.1597 76.8395 34.3423 77.138 34.5779 77.3921C37.7882 80.9505 41.7098 83.7952 46.089 85.7424C50.4682 87.6895 55.2073 88.6956 59.9999 88.6956C64.7924 88.6956 69.5316 87.6895 73.9108 85.7424C78.2899 83.7952 82.2115 80.9505 85.4219 77.3921C85.8833 76.8768 86.1214 76.1993 86.0839 75.5086C86.0464 74.8179 85.7363 74.1703 85.2218 73.708" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M60.0001 114.782C49.165 114.782 38.5732 111.569 29.5642 105.549C20.5552 99.5298 13.5336 90.9738 9.38716 80.9636C5.24076 70.9533 4.15585 59.9383 6.26966 49.3114C8.38348 38.6845 13.6011 28.9231 21.2626 21.2616C28.9242 13.6001 38.6855 8.38249 49.3124 6.26868C59.9393 4.15486 70.9543 5.23977 80.9646 9.38617C90.9749 13.5326 99.5308 20.5542 105.55 29.5632C111.57 38.5723 114.783 49.164 114.783 59.999C114.767 74.5235 108.99 88.4486 98.7199 98.7189C88.4496 108.989 74.5246 114.766 60.0001 114.782ZM60.0001 -0.000976562C48.1332 -0.000976562 36.5328 3.51796 26.6658 10.1108C16.7989 16.7037 9.10853 26.0745 4.56727 37.038C0.0260139 48.0016 -1.16221 60.0656 1.1529 71.7045C3.46802 83.3433 9.18247 94.0343 17.5736 102.425C25.9648 110.817 36.6558 116.531 48.2946 118.846C59.9335 121.161 71.9975 119.973 82.9611 115.432C93.9246 110.891 103.295 103.2 109.888 93.3333C116.481 83.4663 120 71.8659 120 59.999C119.982 44.0918 113.654 28.8415 102.406 17.5934C91.1578 6.34543 75.9073 0.0183225 60.0001 6.10352e-05V-0.000976562Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M80.8662 41.739C77.408 41.743 74.0927 43.1186 71.6475 45.564C69.2023 48.0094 67.8269 51.3249 67.8232 54.7831C67.8232 55.475 68.0981 56.1386 68.5874 56.6279C69.0767 57.1172 69.7403 57.3921 70.4323 57.3921C71.1242 57.3921 71.7878 57.1172 72.2771 56.6279C72.7664 56.1386 73.0413 55.475 73.0413 54.7831C73.0413 52.7075 73.8657 50.7169 75.3334 49.2493C76.801 47.7816 78.7916 46.957 80.8672 46.957C82.9428 46.957 84.9333 47.7816 86.401 49.2493C87.8687 50.7169 88.6932 52.7075 88.6932 54.7831C88.7066 55.4661 88.9874 56.1165 89.4751 56.5947C89.9628 57.073 90.6187 57.3409 91.3018 57.3409C91.9849 57.3409 92.6407 57.073 93.1284 56.5947C93.6161 56.1165 93.8969 55.4661 93.9103 54.7831C93.9066 51.3249 92.5311 48.0094 90.0859 45.564C87.6407 43.1186 84.3254 41.743 80.8672 41.739" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M46.9569 54.7821C46.9703 55.4651 47.251 56.1155 47.7388 56.5938C48.2265 57.072 48.8823 57.34 49.5654 57.34C50.2485 57.34 50.9044 57.072 51.3921 56.5938C51.8798 56.1155 52.1606 55.4651 52.174 54.7821C52.1438 51.3425 50.7563 48.054 48.3135 45.6324C45.8706 43.2109 42.5702 41.8523 39.1305 41.8523C35.6908 41.8523 32.3902 43.2109 29.9474 45.6324C27.5045 48.054 26.117 51.3425 26.0869 54.7821C26.1003 55.4651 26.381 56.1155 26.8688 56.5938C27.3565 57.072 28.0123 57.34 28.6954 57.34C29.3785 57.34 30.0344 57.072 30.5221 56.5938C31.0098 56.1155 31.2906 55.4651 31.304 54.7821C31.304 52.7064 32.1286 50.7157 33.5963 49.2479C35.0641 47.7802 37.0548 46.9556 39.1305 46.9556C41.2062 46.9556 43.1968 47.7802 44.6646 49.2479C46.1323 50.7157 46.9569 52.7064 46.9569 54.7821Z" fill="white" />
        </svg>
      </div>
      <div className={style.textDiv}>
        <p>{editedText[0] || Modal13Strings[0]}</p>
        <p>{editedText[1] || Modal13Strings[1]}</p>
      </div>
      <div className={style.bottomDiv}>
        <p>{editedText[2] || Modal13Strings[2]}</p>
      </div>
    </div>
  );
};

export default Modal13;
