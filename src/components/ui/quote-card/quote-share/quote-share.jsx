import React from 'react';
import { SocialItem, SocialList, StyledShareIcon, Wrapper } from './styled';
import FacebookIcon from '../../icons/facebook-icon';
import InstagramIcon from '../../icons/instagram-icon';
import TwitterIcon from '../../icons/twitter-icon';
import TelegramIcon from '../../icons/telegram-icon';
import CopyIcon from '../../icons/copy-icon';

function QuoteShare() {
  return (
    <Wrapper>
      <SocialList>
        <SocialItem title="Фейсбук">
          <FacebookIcon width="14" height="14" />
        </SocialItem>
        <SocialItem title="Инстаграм">
          <InstagramIcon width="14" height="14" />
        </SocialItem>
        <SocialItem title="Твиттер">
          <TwitterIcon width="14" height="14" />
        </SocialItem>
        <SocialItem title="Телеграм">
          <TelegramIcon width="14" height="14" />
        </SocialItem>
        <SocialItem title="Скопировать">
          <CopyIcon width="14" height="14" />
        </SocialItem>
      </SocialList>

      <StyledShareIcon />
    </Wrapper>
  );
}

export default QuoteShare;
