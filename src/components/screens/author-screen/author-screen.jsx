import React from 'react';
import Button from '@/components/ui/button/button';
import { AppPage, AppRoute } from '@/const';
import style from './style.module.css';
import Text from '@/components/ui/text/text';

function AuthorScreen() {
  return (
    <main className={style.screen}>
      <div className={style.author}>
        <img
          className={style.authorImage}
          src="/img/author.jpg"
          width={420}
          height={420}
          alt="Зафар Мирзо"
        />
        <q className={style.quote}>The goal is high when love is vast</q>
      </div>

      <h1 className={style.screenTitle}>Author's site</h1>
      <h2 className={style.authorName}>Zafar Mirzo</h2>

      <div className={style.info}>
        <div className={style.infoItem}>
          Social entrepreneur & Chairman. I also engage in philosophical creativity.
        </div>

        <div className={style.infoItem}>
          May 1, 1972
        </div>

        <div className={style.infoItem}>
          <Text>From my own philosophical creativity</Text>
          <div className={style.button}>
            <Button href={AppRoute.Quotes}>{AppPage.Home}</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthorScreen;
