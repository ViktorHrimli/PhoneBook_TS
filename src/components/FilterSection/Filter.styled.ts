import styled from "@emotion/styled";
import { theme } from "../../Thema";

const Input = styled.input`
  position: relative;
  width: ${theme.space[8] + 30}px;
  padding: ${theme.space[3]}px;
  outline: none;
  border: none;
  background-color: transparent;
  border: ${theme.borders.bold};
  color: white;
  background: transparent;
  border-radius: ${theme.radii.md};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.s};
  transition: border 250ms, box-shadow 250ms;

  :hover,
  :focus {
    box-shadow: 2px 2px 3px #ffd700;
    ::placeholder {
      color: transparent;
    }
  }
`;

export { Input };
