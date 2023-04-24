import styled from 'styled-components';
import Text from '../../text/text';
import TextButton from '../../text-button/text-button';

export const StyledComment = styled.figure`
  margin: 0;
  margin-bottom: 8px;
`;

export const Author = styled.figcaption`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  color: #747474;
  margin-right: 8px;
`;

export const DateTime = styled.time`
  font-size: 14px;
  color: #747474;
`;

export const Comment = styled(Text)`
  max-width: 720px;
  color: #1d1d1d;
`;

export const Reply = styled(TextButton)`
  color: #B2B2B2;
  padding: 4px 0;

  &:hover {
    color: #747474;
  }
`;

export const StyledReplies = styled(StyledComment)`
  margin-left: 64px;
  margin-bottom: 24px;
`;

export const LoadReplies = styled(TextButton)`
  color: #b2b2b2;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    width: 80px;
    height: 2px;
    background-color: #b2b2b2;
    opacity: 0.5;
  }
`;

export const UserName = styled.span`
  color: #E2B65C;
`;
