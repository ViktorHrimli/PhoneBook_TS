import styled from "styled-components";
import { Conteier } from "../../commonStyle/Common.styled";
import { Form } from "formik";

type Props = {
  display: string;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
};

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Eror = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(p) => p.theme.fonts.monospace};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.muted};
`;

export const ConteierLogin = styled(Conteier)<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://mobimg.b-cdn.net/v3/fetch/78/78e819e4bfdbb7015733d1bda7ddd502.jpeg?h=900&r=0.5");
`;
