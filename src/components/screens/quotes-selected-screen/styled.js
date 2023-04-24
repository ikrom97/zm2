import ScrollTop from '@/components/ui/scroll-top/scroll-top';
import styled from 'styled-components';

export const StyledScreen = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
`;

export const ScrollToTop = styled(ScrollTop)`
  margin-left: auto;
`;
