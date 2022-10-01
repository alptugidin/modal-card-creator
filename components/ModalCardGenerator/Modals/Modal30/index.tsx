import React, { CSSProperties } from 'react';
import { color } from '@storybook/theming';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import SVG from './SVG';

const Modal30 = ({
  inStory = true, otherTextColor, backgroundColor, textColor, themeColor, borderColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
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
          <p>Sign up for ournewsletter</p>
          <p>If you’re looking for a new way to promote your business that won’t cost you money.</p>
          <div
            className={style.foot}
            style={{
              '--borderColor': !inStory ? colors.borderColor : borderColor,
              '--bgColor': !inStory ? colors.themeColor : themeColor,
            } as CSSProperties}
          >
            <input type="text" placeholder="Enter your email address" />
            <button type="button">
              Subscribe
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
