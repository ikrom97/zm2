import React from 'react';
import FacebookIcon from '../../icons/facebook-icon';
import InstagramIcon from '../../icons/instagram-icon';
import TwitterIcon from '../../icons/twitter-icon';
import TelegramIcon from '../../icons/telegram-icon';
import CopyIcon from '../../icons/copy-icon';
import style from './style.module.css';
import ShareIcon from '../../icons/share-icon';

function QuoteShare() {
  return (
    <div className={style.wrapper}>
      <div className={style.socialList}>
        <button className={style.socialItem} title="Фейсбук">
          <FacebookIcon width="14" height="14" />
        </button>
        <button className={style.socialItem} title="Инстаграм">
          <InstagramIcon width="14" height="14" />
        </button>
        <button className={style.socialItem} title="Твиттер">
          <TwitterIcon width="14" height="14" />
        </button>
        <button className={style.socialItem} title="Телеграм">
          <TelegramIcon width="14" height="14" />
        </button>
        <button className={style.socialItem} title="Скопировать">
          <CopyIcon width="14" height="14" />
        </button>
      </div>

      <ShareIcon className={style.icon} />
    </div>
  );
}

export default QuoteShare;
