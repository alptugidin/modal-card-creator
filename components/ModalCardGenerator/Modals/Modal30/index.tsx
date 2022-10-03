import React, { CSSProperties } from 'react';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import SVG from './SVG';
import { Modal30Strings } from './Modal30Strings';
import { Modal1Strings } from '../Modal1/Modal1Strings';

const Modal30 = ({
  inStory = true, otherTextColor, backgroundColor, textColor, themeColor, borderColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const editedText = useAppSelector((state) => state.modalCreate.editedText);

  return (
    <div className={style.body}>
      <div
        className={style.body1}
        style={{
          '--bgColor': !inStory ? colors.backgroundColor : backgroundColor,
        } as CSSProperties}
      >
        <div className={style.cancelDiv}>
          <img src="/cancel.svg" alt="cancel" />
        </div>
        <div
          className={style.body1body}
          style={{
            '--textColor': !inStory ? colors.textColor : textColor,
          } as CSSProperties}
        >
          <p>{editedText[0] || Modal30Strings[0]}</p>
          <p>{editedText[1] || Modal30Strings[1]}</p>
          <div
            className={style.foot}
            style={{
              '--borderColor': !inStory ? colors.borderColor : borderColor,
              '--bgColor': !inStory ? colors.themeColor : themeColor,
            } as CSSProperties}
          >
            <input type="text" placeholder={editedText[2] || Modal30Strings[2]} />
            <button type="button">
              {editedText[3] || Modal30Strings[3]}
            </button>
          </div>
        </div>
      </div>
      <div className={style.body2}>
        <img src="/Modal30/img.png" alt="" />
        <SVG color={!inStory ? colors.themeColor as string : themeColor as string} />
      </div>
    </div>
  );
};

export default Modal30;
