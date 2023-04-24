/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { StyledLogo } from './styled';
import { AppRoute } from '@/const';
import dayjs from 'dayjs';

function Logo({ footer }) {
  return (
    <StyledLogo href={AppRoute.Home}>
      <img
        src={footer ? '/img/zm-icon.png' : '/img/main-logo.svg'}
        width="auto"
        height="auto"
        alt="На главную страницу"
      />
      {footer && <>
        &copy; Zafar Mirzo <br />
        2017 - {dayjs().format('YYYY')}
      </>}
    </StyledLogo>
  );
}

export default Logo;
