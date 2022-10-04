import React, { CSSProperties, useState } from 'react';
import style from './index.module.scss';
import { useAppSelector } from '../../../../redux/store';
import { ModalProps } from '../modalPropTypes';
import { Modal15Strings } from './Modal15Strings';

const Modal15 = ({
  inStory = true, backgroundColor, textColor, otherTextColor, themeColor, borderColor,
}:ModalProps) => {
  const colors = useAppSelector((state) => state.appearance.style);
  const editedText = useAppSelector((state) => state.modalCreate.editedText);
  const emojis = [<p>😶</p>, <p>&#128542;</p>, <p>&#128524;</p>, <p>🤗</p>, <p>😄</p>];
  const size = useAppSelector((state) => state.appearance.size);

  const [toggle, setToggle] = useState<string | null>('');
  const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const place = (e.currentTarget as HTMLButtonElement).getAttribute('data-place');
    setToggle(place);
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
        <p>{editedText[0] || Modal15Strings[0]}</p>
      </div>
      <div className={style.emojiDiv}>
        {emojis.map((emoji, i) => (
          <button
            type="button"
            key={i.toString()}
            data-place={i}
            onClick={handleOnClick}
            className={style.emojiButton}
          >
            <div className={[style.roundedDiv, i.toString() === toggle ? style.active : ''].join(' ')}>
              {emoji}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Modal15;
