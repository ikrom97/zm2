import React from 'react';
import Logo from '@/components/ui/logo/logo';
import Navigation from '../navigation/navigation';
import Container from '@/components/ui/container/container';
import style from './style.module.css';

function Header() {
  return (
    <header className={style.header}>
      <Container className={style.container}>
        <Logo />

        <Navigation />
      </Container>
    </header>
  );
}

export default Header;
