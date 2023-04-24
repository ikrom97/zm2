import React from 'react';
import Text from '@/components/ui/text/text';
import Button from '@/components/ui/button/button';
import SocialLinks from '@/components/ui/social-links/social-links';
import {
  Author,
  AuthorImage,
  AuthorName,
  Info,
  InfoDescription,
  InfoItem,
  InfoTitle,
  Quote,
  QuoteLinks,
  Screen,
  ScreenTitle
} from './styled';
import { AppPage, AppRoute } from '@/const';

function AuthorScreen() {
  return (
    <Screen>
      <Author>
        <AuthorImage
          src="/img/author.jpg"
          width={420}
          height={420}
          alt="Зафар Мирзо"
          priority
        />
        <Quote>The goal is high when love is vast</Quote>
      </Author>

      <ScreenTitle>{`Author's site`}</ScreenTitle>
      <AuthorName>Zafar Mirzo</AuthorName>

      <Info>
        <InfoItem>
          {/* <InfoTitle></InfoTitle> */}
          <InfoDescription>
            <Text>Social entrepreneur & Chairman. I also engage in philosophical creativity.</Text>
          </InfoDescription>
        </InfoItem>

        <InfoItem>
          {/* <InfoTitle>Date of Birth</InfoTitle> */}
          <InfoDescription>May 1, 1972</InfoDescription>
        </InfoItem>

        <InfoItem>
          {/* <InfoTitle>Quotes</InfoTitle> */}
          <InfoDescription>
            <Text>From my own philosophical creativity</Text>
            <QuoteLinks>
              <Button href={AppRoute.Quotes}>{AppPage.Quotes}</Button>
              {/* <Button>Quotes of famous people</Button>
              <Button>Proza.ru</Button>
              <Button>Million statuses</Button>
              <Button>Quotes.info</Button>
              <Button>Pearls of Thought</Button> */}
            </QuoteLinks>
          </InfoDescription>
        </InfoItem>

        {/* <InfoItem>
          <InfoTitle>Social media</InfoTitle>
          <InfoDescription>
            <SocialLinks />
          </InfoDescription>
        </InfoItem> */}
      </Info>
    </Screen>
  );
}

export default AuthorScreen;
