import Link from 'next/link';
import styled from 'styled-components';

export const StyledLogo = styled(Link)`
  display: flex;
  max-width: max-content;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: #E2B65C;
  font-size: 16px;
  line-height: 24px;
`;

export const Icon = styled.span`
  width: 52px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #E2B65C;
  border-radius: 4px;
  color: #2D2A2A;
`;
