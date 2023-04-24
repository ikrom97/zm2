import styled from 'styled-components';
import Button from '../../button/button';

export const Form = styled.form`
  padding: 24px 0;
  background: white;
  position: sticky;
  top: 88px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1;
`;

export const Replication = styled.div`
  font-size: 14px;
  color: #747474;
  display: flex;
  justify-content: space-between;
`;

export const TextField = styled.div`
  position: relative;
  min-height: 35px;
  border-bottom: 1px solid #747474;
  padding: 4px;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: #e2b65c;
  }

  &:empty::before {
    content: "Введите комментарий";
    opacity: 0.4;
    position: absolute;
    left: 4px;
    bottom: 4px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

export const ResetButton = styled(Button)`
  color: #747474;
  background-color: transparent;

  &:hover {
    background-color: transparent;
    color: #111111;
  }
`;
