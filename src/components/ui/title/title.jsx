import React from 'react';
import classNames from 'classnames';
import style from './style.module.css';

function Title({ children, className, ...rest }) {
  return (
    <h2 className={classNames(style.title, className)} {...rest}>
      {children}
    </h2>
  );
}

export default Title;
