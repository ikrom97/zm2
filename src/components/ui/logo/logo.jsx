import React from 'react';
import { AppRoute } from '@/const';
import dayjs from 'dayjs';
import Link from 'next/link';
import classNames from 'classnames';
import style from './style.module.css';

function Logo({ footer, className }) {
  return (
    <Link className={classNames(style.logo, className)} href={AppRoute.Home}>
      <img
        className={style.image}
        src={footer ? '/img/zm-icon.png' : '/img/main-logo.svg'}
        width="auto"
        height="auto"
        alt="На главную страницу"
      />
      {footer && <>
        &copy; Zafar Mirzo <br />
        2017 - {dayjs().format('YYYY')}
      </>}
    </Link>
  );
}

export default Logo;
