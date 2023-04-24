import { StyledTitle } from '@/components/ui/title/styled';
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
`;

export const Section = styled.section`
  background-color: white;
  padding: 16px 48px 16px 24px;
  border-radius: 8px;
`;

export const Title = styled(StyledTitle)`
  padding-bottom: 8px;
  border-bottom: 1px solid #b2b2b2;
  margin-bottom: 16px;
`;

export const ABCList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const ABCListItem = styled.li`
  display: flex;
`;

export const ABCButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  width: 40px;
  height: 40px;
  font-size: 16px;
  background-color: #F4F4F4;
  border: none;
  border-radius: 50%;
  text-transform: uppercase;
  transition: 0.3s;
  cursor: pointer;

  ${({active}) => active && `
    color: white;
    background-color: #111111;
  `}
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px 16px;
`;

export const ListItem = styled.li`
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  ${({disabled}) => disabled && `
    pointer-events: none;
    opacity: 0.2;
  `}

  &:hover {
    color: #E2B65C;
  }
`;
