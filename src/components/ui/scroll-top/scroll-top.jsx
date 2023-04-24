import React from 'react';
import { Icon, ScrollTopButton } from './styled';

function ScrollTop(props) {
  return (
    <ScrollTopButton {...props} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      To the top <Icon />
    </ScrollTopButton>
  );
}

export default ScrollTop;
