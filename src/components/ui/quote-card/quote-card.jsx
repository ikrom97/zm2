import React from 'react';
import { StyledBlockQuote, CreatedAt, Quote, QuoteDetails, Wrapper } from './styled';
import { AppRoute } from '@/const';
import CommentIcon from '@/components/ui/icons/comment-icon';
import QuoteTags from './quote-tags/quote-tags';
import TextButton from '@/components/ui/text-button/text-button';
import Bookmark from './bookmark/bookmark';
import QuoteShare from './quote-share/quote-share';

function BlockQuote({ quote }) {
  return (
    <StyledBlockQuote>
      <Wrapper>
        <Quote>{quote}</Quote>

        <QuoteTags />
      </Wrapper>

      <QuoteDetails>
        {/* <CreatedAt>21.04.2021</CreatedAt>
        <TextButton href={AppRoute.QuotesSelected}>
          <CommentIcon /> 13 комментариев
        </TextButton>
        <Bookmark /> */}

        <QuoteShare />
      </QuoteDetails>
    </StyledBlockQuote>
  );
}

export default BlockQuote;
