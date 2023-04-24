import Title from '@/components/ui/title/title';
import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  position: sticky;
  top: 112px;
  width: 264px;
  min-width: 264px;
  height: calc(100vh - 136px);
  background-color: white;
  border-radius: 8px;
`;

export const Header = styled.header`
  padding: 16px;
  border-bottom: 1px solid #B2B2B2;
`;

export const HeaderTitle = styled(Title)`
  margin-bottom: 16px;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px;
  padding-right: 5px;
  margin-right: 5px;
  height: calc(100% - 173px);
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #E2B65C;
    border-radius: 4px;
  }
`;
