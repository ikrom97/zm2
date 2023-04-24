import React from 'react'
import SocialLink from '@/components/ui/social-link/social-link';
import FacebookIcon from '@/components/ui/icons/facebook-icon';
import InstagramIcon from '@/components/ui/icons/instagram-icon';
import TwitterIcon from '@/components/ui/icons/twitter-icon';
import TelegramIcon from '@/components/ui/icons/telegram-icon';
import { List, ListItem } from './styled';

function SocialLinks() {
  return null;
  return (
    <List>
      <ListItem>
        <SocialLink
          href="#"
          title="Facebook"
          icon={<FacebookIcon />}
        />
      </ListItem>
      <ListItem>
        <SocialLink
          href="#"
          title="Instagram"
          icon={<InstagramIcon />}
        />
      </ListItem>
      <ListItem>
        <SocialLink
          href="https://twitter.com/zafar_mirzo"
          target="_blank"
          title="Twitter"
          icon={<TwitterIcon />}
        />
      </ListItem>
      <ListItem>
        <SocialLink
          href="#"
          title="Telegram"
          icon={<TelegramIcon />}
        />
      </ListItem>
    </List>
  )
}

export default SocialLinks;
