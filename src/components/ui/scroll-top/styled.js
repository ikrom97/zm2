import styled from 'styled-components';
import ToTopIcon from '../icons/to-top-icon';

export const ScrollTopButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #747474;
  max-width: max-content;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
`;

const StyledIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  min-width: 44px;
  height: 44px;
  background-color: white;
  border-radius: 50%;
  color: #2D2A2A;
`;

export const Icon = styled(() => (
  <StyledIcon>
    <ToTopIcon />
  </StyledIcon>
))``;
