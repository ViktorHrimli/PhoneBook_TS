import styled from "styled-components";
import { Form } from "formik";
import { Conteier } from "../../commonStyle/Common.styled";

export const FormContact = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Eror = styled.p`
  font-family: ${(p) => p.theme.fonts.monospace};
  font-size: ${(p) => p.theme.fontSizes.m};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.muted};
`;

export const ConteierRegister = styled(Conteier)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://mobimg.b-cdn.net/v3/fetch/78/78e819e4bfdbb7015733d1bda7ddd502.jpeg?h=900&r=0.5");
`;
