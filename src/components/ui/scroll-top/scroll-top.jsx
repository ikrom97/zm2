import React from 'react';
import classNames from 'classnames';
import ToTopIcon from '../icons/to-top-icon';
import style from './style.module.css';

function ScrollTop({ className, ...rest }) {
  return (
    <button
      type="button"
      {...rest}
      className={classNames(style.button, className)}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      To the top 
      <span className={style.icon}>
        <ToTopIcon />
      </span>
    </button>
  );
}

export default ScrollTop;
