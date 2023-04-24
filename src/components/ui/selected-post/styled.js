import styled from 'styled-components';
import Title from '../title/title';

export const PostWrap = styled.dialog`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  border: none;
  padding: 0;
  margin: 0;
`;

export const Post = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  padding: 24px;
  padding-top: 24px;
  width: 976px;
`;

export const PostImage = styled.img`
  display: flex;
  margin-bottom: 16px;
  width: 100%;
  height: auto;
`;

export const PostTitle = styled(Title)`
  margin-bottom: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  color: #747474;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
