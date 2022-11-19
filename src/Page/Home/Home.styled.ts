import styled from 'styled-components';

export const Text = styled.p`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.m};
  color: white;
  margin-top: 345px;
`;

export const TitleText = styled.q`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: ${p => p.theme.fontSizes.sx};
  color: white;
`;
