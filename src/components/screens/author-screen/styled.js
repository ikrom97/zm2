import styled from 'styled-components';
import { Title } from '../tags-screen/styled';

export const Screen = styled.main`
  padding-top: 40px;
  padding-bottom: 80px;
  width: 100%;
`;

export const ScreenTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #E2B65C;
`;

export const AuthorName = styled.h2`
  margin-top: 0;
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #111111;
`;

export const Author = styled.div`
  float: right;
  max-width: max-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 72px;
  margin-bottom: 24px;
  gap: 24px;
`;

export const AuthorImage = styled.img`
  border-radius: 8px;
`;

export const Quote = styled.q`
  color: #747474;
  text-align: center;
`;

export const Info = styled.dl`
  margin: 0;
`;

export const InfoItem = styled.div`
  display: grid;
  border-top: 1px solid #B2B2B2;
  padding: 16px;
  padding-bottom: 24px;
  gap: 32px;
  
  &:not(:first-child) {
    grid-template-columns: 170px auto;
  }
`;

export const InfoTitle = styled(({ children, ...rest }) => (
  <Title {...rest} as="dt">{children}</Title>
))`
  border-bottom: 0;
  margin: 0;
  padding: 0;
  line-height: 26px;
`;

export const InfoDescription = styled.dd`
  margin: 0;
  color: #747474;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const QuoteLinks = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
