import React from 'react';
import { StyledContainer } from './styled';

function Container({ children, ...rest }) {
  return (
    <StyledContainer {...rest}>
      {children}
    </StyledContainer>
  );
}

export default Container;
