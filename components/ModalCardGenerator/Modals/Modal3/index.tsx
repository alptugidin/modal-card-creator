import React, { ChangeEvent, CSSProperties, useState } from 'react';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';

const Modal3 = ({
  inStory = true, textColor, themeColor, backgroundColor, otherTextColor, borderColor,
} :ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const [toggle, setToggle] = useState<string | null>('');
  const items = [
    { p: 'Starter', d: '1 free (then $15 per meember / month)' },
    { p: 'Pro', d: '$19 per member/month' },
    { p: 'Business', d: '$29 per member/month' },
  ];
  const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const plan = (e.target as HTMLButtonElement).getAttribute('data-plan');
    setToggle(plan);
  };
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
      <div className={style.textDiv}>
        <p>PLANS</p>
        <p>Choose best for you</p>
        <p>Only pay for the capacity that you use.</p>
      </div>

      <div className={style.optionDiv}>
        {items.map((item) => (
          <div className={style.option} key={item.p}>
            <button
              type="button"
              data-plan={item.p}
              onClick={handleOnClick}
              className={style.optionRound}
            >
              {toggle === item.p && <div className={style.activeDiv} />}
            </button>
            <div className={style.optionTextDiv}>
              <p>{item.p}</p>
              <p>{item.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={style.btnDiv}>
        <button type="button">Cancel</button>
        <button type="button">Continue</button>
      </div>
    </div>
  );
};

export default Modal3;
