import React from 'react';
import classNames from 'classnames';
import style from './style.module.css';

function Container({ children, className, ...rest }) {
  return (
    <div
      {...rest}
      className={classNames(style.container, className)}
    >
      {children}
    </div>
  );
}

export default Container;
