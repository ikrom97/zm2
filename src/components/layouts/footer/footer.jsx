import React from 'react';
import Text from '@/components/ui/text/text';
import { StyledFooter, FooterContainer } from './styled';
import Link from 'next/link';
import { AppRoute } from '@/const';
import SocialLinks from '@/components/ui/social-links/social-links';
import MainLogo from '@/components/ui/logo/logo';

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <MainLogo footer />

        <Text>
          For feedback: <Link href="mailto:info@zafarmirzo.com">info@zafarmirzo.com</Link>
        </Text>

        {/* <Link href={AppRoute.PrivacyPolicy}>
          Terms of use <br />
          Processing of personal data
        </Link> */}

        <SocialLinks />
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
