import Text from '@/components/ui/text/text';
import styled from 'styled-components';

export const StyledBlockQuote = styled.blockquote`
  margin: 0;
  background-color: white;
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 24px;
`;

export const Quote = styled.p`
  margin: 0;
`;

export const QuoteDetails = styled.footer`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #B2B2B2;
  font-size: 14px;
  line-height: 26px;
  padding: 8px 24px;
  border-top: 1px solid #B2B2B2;
`;

export const CreatedAt = styled(Text)``;
