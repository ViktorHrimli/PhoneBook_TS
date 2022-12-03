import styled from "styled-components";

export const Text = styled.p`
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: ${(p) => p.theme.fontSizes.m};
  color: white;
  margin-top: 345px;
`;

export const TitleText = styled.q`
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: ${(p) => p.theme.fontSizes.sx};
  color: white;
`;

export const ConteinerNavBack = styled.div`
  position: absolute;
  bottom: 35px;
  left: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  transform: translate(-50%, 50%);
  grid-gap: 100px;
  /* margin-top: 170px;
  @media screen and (min-width: 370px) {
    
  }
  @media screen and (min-width: 768px) {
    margin-top: 170px;
  } */
`;
