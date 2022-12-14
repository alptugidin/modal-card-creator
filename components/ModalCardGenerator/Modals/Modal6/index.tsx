import React, { CSSProperties } from 'react';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import style from './index.module.scss';
import { Modal6Strings } from './Modal6Strings';

const Modal6 = ({
  inStory = true, backgroundColor, borderColor, textColor, otherTextColor, themeColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
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
      <div className={style.topDiv}>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M57.0519 61.0569C59.356 61.0569 61.2239 59.0906 61.2239 56.6649C61.2239 54.2393 59.356 52.2729 57.0519 52.2729C54.7478 52.2729 52.8799 54.2393 52.8799 56.6649C52.8799 59.0906 54.7478 61.0569 57.0519 61.0569Z" fill="#7D4AEA" />
          <path d="M37.1965 33.375C37.2301 32.8025 37.1457 32.2293 36.9486 31.6908C36.7515 31.1523 36.4459 30.66 36.0507 30.2444C35.6555 29.8289 35.1792 29.499 34.6512 29.2751C34.1233 29.0512 33.555 28.9382 32.9815 28.943C32.4087 28.9398 31.8413 29.0539 31.3143 29.2784C30.7873 29.5028 30.3119 29.8329 29.9173 30.2481C29.5228 30.6634 29.2175 31.1551 29.0202 31.6929C28.823 32.2306 28.738 32.8031 28.7705 33.375C28.7355 33.9496 28.8184 34.5252 29.0141 35.0666C29.2099 35.6079 29.5144 36.1034 29.9089 36.5226C30.3034 36.9418 30.7795 37.2759 31.3079 37.5041C31.8363 37.7324 32.4059 37.8501 32.9815 37.85C33.5578 37.8517 34.1283 37.7351 34.6577 37.5074C35.187 37.2797 35.664 36.9458 36.0592 36.5263C36.4543 36.1068 36.7591 35.6107 36.9547 35.0686C37.1504 34.5266 37.2327 33.9502 37.1965 33.375Z" fill="#7D4AEA" />
          <path d="M80.984 32.76C79.627 28.388 83.937 20.948 81.402 17.308C78.847 13.632 70.74 15.638 67.227 12.962C63.75 10.313 63.082 1.60701 58.904 0.18801C54.874 -1.18199 49.463 5.40401 44.996 5.40401C40.529 5.40401 35.122 -1.18199 31.091 0.18801C26.914 1.60801 26.246 10.313 22.769 12.962C19.256 15.637 11.149 13.63 8.594 17.308C6.062 20.948 10.372 28.388 9.016 32.76C7.707 36.98 0 40.324 0 45C0 49.676 7.707 53.021 9.016 57.241C10.372 61.615 6.062 69.053 8.593 72.693C11.149 76.369 19.256 74.363 22.768 77.039C26.246 79.688 26.913 88.394 31.091 89.813C35.122 91.183 40.532 84.596 45 84.596C49.468 84.596 54.878 91.183 58.908 89.813C63.086 88.393 63.753 79.688 67.231 77.039C70.744 74.363 78.849 76.369 81.406 72.693C83.937 69.052 79.627 61.614 80.984 57.241C82.293 53.021 90 49.677 90 45C90 40.323 82.293 36.98 80.984 32.76ZM23.852 33.375C23.852 27.851 27.635 23.928 32.982 23.928C38.347 23.928 42.082 27.851 42.082 33.375C42.082 38.942 38.294 42.865 32.982 42.865C27.635 42.864 23.852 38.941 23.852 33.375ZM35.829 65.502H29.929L53.529 24.502H59.429L35.829 65.502ZM57.052 66.072C51.752 66.072 47.96 62.192 47.96 56.666C47.96 51.14 51.748 47.266 57.052 47.266C62.356 47.266 66.152 51.146 66.152 56.666C66.152 62.186 62.36 66.071 57.052 66.071V66.072Z" fill="#7D4AEA" />
        </svg>

        <div className={style.textDiv}>
          <p>{editedText[0] || Modal6Strings[0]}</p>
          <p>{editedText[1] || Modal6Strings[1]}</p>
        </div>
      </div>
      <div className={style.bottomDiv}>
        <div className={style.inputDiv}>
          <input type="text" placeholder={editedText[2] || Modal6Strings[2]} />
        </div>
        <div className={style.btnDiv}>
          <button type="button">{editedText[3] || Modal6Strings[3]}</button>
          <button type="button">{editedText[4] || Modal6Strings[4]}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal6;
