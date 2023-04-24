import React from 'react';
import BlockQuote from '@/components/ui/quote-card/quote-card';
import dynamic from 'next/dynamic';
import { ScrollToTop, StyledScreen } from './styled';
import Title from '@/components/ui/title/title';

const Comments = dynamic(() => import('@/components/ui/comments/comments'), { ssr: false })

function QuotesSelectedScreen() {
  return (
    <StyledScreen>
      <BlockQuote />
      <Title>Комментарии</Title>
      <Comments />
      <ScrollToTop />
    </StyledScreen>
  );
}

export default QuotesSelectedScreen;
