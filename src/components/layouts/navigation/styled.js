import Link from 'next/link';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 8px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 8px;
`;

export const ListItem = styled.li`
  display: flex;
`;

export const PageLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #111111;
  color: white;
  min-height: 40px;
  padding: 8px 24px;
  font-weight: 400;
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

  &.active {
    pointer-events: none;
    background-color: #E2B65C;
  }
`;
