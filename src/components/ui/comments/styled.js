import styled from 'styled-components';

export const CommentsWrapper = styled.div`
  padding: 0 24px;
  padding-bottom: 16px;
  background-color: white;
  border-radius: 8px;
`;

export const LoadMore = styled.button.attrs({
  type: 'button',
  title: 'Загрузить еще',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid #b2b2b2;
  margin: 24px auto;
  color: #b2b2b2;
  background-color: transparent;
  border-radius: 50%;
  transform: rotate(45deg);
  cursor: pointer;
`;
