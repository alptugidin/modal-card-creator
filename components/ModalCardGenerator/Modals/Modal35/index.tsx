import React, { CSSProperties } from 'react';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import style from './index.module.scss';
import { Modal35Strings } from './Modal35Strings';

const Modal35 = ({
  inStory = true, backgroundColor, textColor, otherTextColor, themeColor, borderColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const editedText = useAppSelector((state) => state.modalCreate.editedText);

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
        <p>{editedText[0] || Modal35Strings[0]}</p>
        <p>{editedText[1] || Modal35Strings[1]}</p>
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
