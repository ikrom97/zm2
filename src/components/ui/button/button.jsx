import React from 'react';
import Link from 'next/link';
import style from './style.module.css';
import classNames from 'classnames';

function Button({ children, href, className, ...rest }) {
  return href ? (
    <Link
      href={href}
      {...rest}
      className={classNames(style.button, className)}
    >
      {children}
    </Link>
  ) : (
    <button
      type="button"
      {...rest}
      className={classNames(style.button, className)}
    >
      {children}
    </button>
  );
}

export default Button;
