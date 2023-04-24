import styled from 'styled-components';

export const StyledText = styled.p`
  margin: 0;
  ${({ clr }) => clr ? `color: ${clr}` : ''};
`;
