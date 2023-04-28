import React from 'react';
import BlockQuote from '@/components/ui/quote-card/quote-card';
import ScrollTop from '@/components/ui/scroll-top/scroll-top';
import { quotes } from '@/mocks/quotes';
import style from './style.module.css';

function HomeScreen() {
  return (
    <main className={style.main}>
      {quotes.map((item, key) => (
        <BlockQuote key={key} quote={item} />
      ))}

      <footer className={style.footer}>
        <ScrollTop />
      </footer>
    </main>
  );
}

export default HomeScreen;
