import React from 'react';
import { NextIcon, PaginationItem, PaginationLink, StyledPagination } from './styled';
import PrevIcon from '../icons/prev-icon';

function Pagination() {
  return (
    <StyledPagination>
      <PaginationItem>
        <PaginationLink as="span" current>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink as="span">...</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">11</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">12</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink as="span" disabled>
          <PrevIcon />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          <NextIcon />
        </PaginationLink>
      </PaginationItem>
    </StyledPagination>
  );
}

export default Pagination;
