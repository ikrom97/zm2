import React from 'react';
import { StyledLink } from './styled';

function SocialLink({ icon, ...rest }) {
  return (
    <StyledLink {...rest}>
      {icon}
    </StyledLink>
  );
}

export default SocialLink;
