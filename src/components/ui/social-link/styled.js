import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  width: 40px;
  min-height: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 8px;
  color: #111111;
  background-color: white;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #E2B65C;
    color: white;
  }
`;
