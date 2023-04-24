import React from 'react';
import { StyledTitle } from './styled';

function Title({children, ...rest}) {
  return (
    <StyledTitle {...rest}>
      {children}
    </StyledTitle>
  );
}

export default Title;
