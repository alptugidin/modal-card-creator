import React, { ChangeEvent, CSSProperties, useState } from 'react';
import style from './index.module.scss';
import { ModalProps } from '../modalPropTypes';
import { useAppSelector } from '../../../../redux/store';
import { Modal3Strings } from './Modal3Strings';
import { Modal1Strings } from '../Modal1/Modal1Strings';

const Modal3 = ({
  inStory = true, textColor, themeColor, backgroundColor, otherTextColor, borderColor,
} :ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const size = useAppSelector((state) => state.appearance.size);

  const editedText = useAppSelector((state) => state.modalCreate.editedText);

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
        transform: `scale(${size})`,
        transformOrigin: 'top right',
      } as CSSProperties}
    >
      <button type="button" className={style.cancel}>
        <img src="/cancel.svg" alt="cancel" />
      </button>
      <div className={style.textDiv}>
        <p>{editedText[0] || Modal3Strings[0]}</p>
        <p>{editedText[1] || Modal3Strings[1]}</p>
        <p>{editedText[2] || Modal3Strings[2]}</p>
      </div>

      <div className={style.optionDiv}>
        <div className={style.option}>
          <button
            type="button"
            data-plan={editedText[3] || Modal1Strings[3]}
            onClick={handleOnClick}
            className={style.optionRound}
          >
            {toggle === (editedText[3] || Modal1Strings[3]) && <div className={style.activeDiv} />}
          </button>
          <div className={style.optionTextDiv}>
            <p>{editedText[3] || Modal1Strings[3]}</p>
            <p>{editedText[4] || Modal1Strings[4]}</p>
          </div>
        </div>
        <div className={style.option}>
          <button
            type="button"
            data-plan={editedText[5] || Modal1Strings[5]}
            onClick={handleOnClick}
            className={style.optionRound}
          >
            {toggle === (editedText[5] || Modal1Strings[5]) && <div className={style.activeDiv} />}
          </button>
          <div className={style.optionTextDiv}>
            <p>{editedText[5] || Modal1Strings[5]}</p>
            <p>{editedText[6] || Modal1Strings[6]}</p>
          </div>
        </div>
        <div className={style.option}>
          <button
            type="button"
            data-plan={editedText[7] || Modal1Strings[7]}
            onClick={handleOnClick}
            className={style.optionRound}
          >
            {toggle === (editedText[7] || Modal1Strings[7]) && <div className={style.activeDiv} />}
          </button>
          <div className={style.optionTextDiv}>
            <p>{editedText[7] || Modal1Strings[7]}</p>
            <p>{editedText[8] || Modal1Strings[8]}</p>
          </div>
        </div>
      </div>

      <div className={style.btnDiv}>
        <button type="button">{editedText[9] || Modal1Strings[9]}</button>
        <button type="button">{editedText[10] || Modal1Strings[10]}</button>
      </div>
    </div>
  );
};

export default Modal3;
