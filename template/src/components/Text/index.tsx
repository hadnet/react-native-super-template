import styled from 'styled-components/native';

export const Title = styled.Text<{color?: string; highlight?: boolean}>`
  font-size: 24px;
  color: ${({color, theme}) => color || theme.colors.white};
  font-weight: ${({highlight}) => (highlight ? 700 : 600)};
`;
