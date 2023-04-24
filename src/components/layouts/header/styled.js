import Container from '@/components/ui/container/container';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #111111;
  color: white;
  padding: 24px 0;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
