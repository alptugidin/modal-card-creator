import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import style from './index.module.scss';

const Modal35 = ({
  inStory = true, backgroundColor, textColor, otherTextColor, themeColor, borderColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  return (
    <div
      className={style.body}
      style={{
        '--bgColor': !inStory ? colors.backgroundColor : backgroundColor,
        '--textColor': !inStory ? colors.textColor : textColor,
      } as CSSProperties}
    >
      <button type="button" className={style.cancel}>
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className={style.textDiv}>
        <p>Share this page</p>
        <p>If you liked this page you can share it on your social media.</p>
      </div>
      <div className={style.btnDiv}>
        <button type="button" className={style.fb}>
          <img src="/Modal35/img.png" width="32" height="32" alt="facebook" />
          <p>Facebook</p>
        </button>
        <button type="button" className={style.pt}>
          <img src="/Modal35/img_1.png" width="32" height="32" alt="pinterest" />
          <p>Pinterest</p>
        </button>
        <button type="button" className={style.tw}>
          <img src="/Modal35/img_2.png" width="32" height="32" alt="twitter" />
          <p>Twitter</p>
        </button>

      </div>
    </div>
  );
};

export default Modal35;
