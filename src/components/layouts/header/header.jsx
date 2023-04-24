import React from 'react';
import { StyledHeader, HeaderContainer } from './styled';
import Logo from '@/components/ui/logo/logo';
import Navigation from '../navigation/navigation';

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />

        <Navigation />
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
