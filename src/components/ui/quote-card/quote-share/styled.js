import styled from 'styled-components';
import ShareIcon from '../../icons/share-icon';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  margin-left: auto;
`;

export const SocialList = styled.div`
  display: flex;
  gap: 8px;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;

  ${Wrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export const SocialItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  min-width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  background-color: #E2B65C;
  color: white;
  padding: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #111111;
  }
`;

export const StyledShareIcon = styled(ShareIcon)`
  transition: 0.3s;
  
  ${Wrapper}:hover & {
    color: #111111;
  }
`;
