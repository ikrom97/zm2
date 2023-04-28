import React from 'react';
import QuoteTags from './quote-tags/quote-tags';
import QuoteShare from './quote-share/quote-share';
import Text from '../text/text';
import classNames from 'classnames';
import style from './style.module.css';

function BlockQuote({ quote, className }) {
  return (
    <blockquote className={classNames(style.blockquote, className)}>
      <div className={style.wrapper}>
        <Text>{quote}</Text>

        <QuoteTags />
      </div>

      <footer className={style.details}>
        <QuoteShare />
      </footer>
    </blockquote>
  );
}

export default BlockQuote;
