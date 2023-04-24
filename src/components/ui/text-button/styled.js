import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  line-height: 26px;
  gap: 8px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  transition: 0.3s;
  ${(props) => props?.clr && `color: ${props?.clr};`}

  &:hover {
    color: #111111;
  }
`;
