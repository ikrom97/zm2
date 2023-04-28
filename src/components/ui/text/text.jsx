import React from 'react';
import style from './style.module.css';
import classNames from 'classnames';

function Text({ children, className, ...rest }) {
  return (
    <p
      {...rest}
      className={classNames(style.text, className)}
    >
      {children}
    </p>
  );
}

export default Text;
