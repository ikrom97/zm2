import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #111111;
  color: white;
  min-height: 40px;
  padding: 8px 24px;
  font-weight: ${({fw}) => fw ? fw : 500};
  font-size: 16px;
  line-height: 20px;
  border-radius: 8px;
  border: none;
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #E2B65C;
  }
`;
