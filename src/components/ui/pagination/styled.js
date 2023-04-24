import Link from 'next/link';
import styled from 'styled-components';
import PrevIcon from '../icons/prev-icon';

export const StyledPagination = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 8px;
  font-size: 14px;
  line-height: 1;
  margin: 0 auto;
`;

export const PaginationItem = styled.li`
  display: flex;
`;

export const PaginationLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 24px;
  min-width: 24px;
  height: 24px;
  padding-top: 1px;
  padding-left: 1px;
  ${(props) => props?.current ? `
    background-color: #111111; 
    color: white; 
    pointer-events: none;
  ` : ''}
  ${(props) => props?.disabled ? `
    color: #747474; 
    pointer-events: none;
  ` : ''}
`;

export const NextIcon = styled(PrevIcon)`
  transform: scale(-1);
`;
