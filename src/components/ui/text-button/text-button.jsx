import React from 'react';
import { StyledButton } from './styled';
import Link from 'next/link';

function TextButton({ children, href, ...rest }) {
  return href ? (
    <StyledButton as={Link} href={href} {...rest}>
      {children}
    </StyledButton>
  ) : (
    <StyledButton type="button" {...rest}>
      {children}
    </StyledButton>
  );
}

export default TextButton;
