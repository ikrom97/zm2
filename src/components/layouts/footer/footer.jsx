import React from 'react';
import Text from '@/components/ui/text/text';
import Link from 'next/link';
import Logo from '@/components/ui/logo/logo';
import style from './style.module.css';
import Container from '@/components/ui/container/container';

function Footer() {
  return (
    <footer className={style.footer}>
      <Container className={style.footerContainer}>
        <Logo footer />

        <Text>For feedback: <Link href="mailto:info@zafarmirzo.com">info@zafarmirzo.com</Link></Text>
      </Container>
    </footer>
  );
}

export default Footer;
