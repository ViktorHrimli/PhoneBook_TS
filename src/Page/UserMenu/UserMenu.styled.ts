import styled from "styled-components";
import { Conteier } from "../../commonStyle/Common.styled";

export const ConteierContacts = styled(Conteier)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://mobimg.b-cdn.net/v3/fetch/e0/e007a64de6c3849b47548220b2367d3f.jpeg?h=900&r=0.5");
`;

export const NameText = styled.p`
  font-family: ${(p) => p.theme.fonts.monospace};
  font-size: ${(p) => p.theme.fontSizes.sx};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.background};
`;
