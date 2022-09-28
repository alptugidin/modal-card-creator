import React from 'react';
import style from './index.module.scss';

interface ModalTypeProp {
  size: string,
  color: string
}

const Modal1 = ({ size, color }:ModalTypeProp) => {
  const colorSet = (param:string): any => {
    const output = {
      n: 'default',
      h: '#7D4AEA',
    };
    if (param !== null) {
      if (param === 'black') {
        output.n = 'black';
        output.h = '#000';
        return { n: 'black', h: '#000' };
      } if (param === 'darkgrey') {
        output.n = 'darkgrey';
        output.h = '#777777';
      } if (param === 'orange') {
        output.n = 'orange';
        output.h = '#F37C34';
      } if (param === 'default') {
        output.n = 'default';
        output.h = '#7D4AEA';
      }
    }
    return output;
  };
  return (
    <div className={[style[`body-${size}`], style.body].join(' ')}>
      <div className={[style[`canceldiv-${size}`], style.canceldiv].join(' ')}>
        <img src="/cancel.svg" alt="cancel" className={style[`cancel-${size}`]} />
      </div>

      <div>
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z" fill={colorSet(color).h} />
          <path d="M50 46.18L51.8 53.94L45 49.84L38.2 53.94L40 46.2L34 41.02L41.92 40.34L45 33.04L48.08 40.32L56 41L50 46.18ZM45 27.38L59 33.6V43C59 52.04 53.04 60.38 45 62.86C36.96 60.38 31 52.04 31 43V33.6L45 27.38ZM45 23L27 31V43C27 54.1 34.68 64.48 45 67C55.32 64.48 63 54.1 63 43V31L45 23Z" fill="white" />
        </svg>
      </div>

      <p className={[style[`fp-${size}`], style.fp].join(' ')}>Security Code</p>
      <p className={[style[`sp-${size}`], style.sp].join(' ')}>This code expires in 24 hours</p>
      <form action="" className={style.form}>
        <input
          type="text"
          placeholder="Code"
          className={[style[`input-${size}`], style.input].join(' ')}
        />
      </form>
      <div className={style.btndiv}>
        <button
          className={[style[`btn1-${size}`], style.btn2].join(' ')}
          type="button"
          id="btn1"
        >
          Cancel
        </button>
        <button
          className={[style[`btn2-${size}`], style[`btn1-${colorSet(color).n}`]].join(' ')}
          type="button"
          id="btn2"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modal1;
