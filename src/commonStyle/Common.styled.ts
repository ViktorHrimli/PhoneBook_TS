import styled, { createGlobalStyle } from "styled-components";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { theme } from "../Thema";
import { Link } from "react-router-dom";
import {
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border,
} from "styled-system";
type Mt = Array<number | string> | string;

type Boxes = {
  background?: string;
  color?: string;
  space?: number | string;
  layout?: string;
  flexbox?: string;
  grid?: string | number;
  position?: string;
  border?: string | number;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  mt?: Mt;
  width?: string;
  flexDirection?: string;
  gridGap?: Mt;
  px?: Mt;
  borderRadius?: string;
  py?: Mt;
};

export const Box = styled("div")<Boxes>(
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border
);

export const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.white};
    @media screen and (min-width: 480px) {
        background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
       background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://proxy10.online.ua/oboi/r2-d2/004/225/273/view4bbc1675159fc.jpg");
    }
  }
  h1,
  h2,
  h3 {
    padding: 0%;
    margin: 0;
    font-family: ${theme.fonts.heading};
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
    padding: 0;
    color: ${theme.colors.black};
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const Input = styled.input`
  position: relative;
  width: ${(p) => p.theme.space[8] + 30}px;
  padding: ${(p) => p.theme.space[3]}px;
  outline: none;
  border: none;
  background-color: transparent;
  border: ${(p) => p.theme.borders.bold};
  color: white;
  background: transparent;
  border-radius: ${(p) => p.theme.radii.md};
  font-family: ${(p) => p.theme.fonts.heading};
  font-size: ${(p) => p.theme.fontSizes.s};
  transition: border 250ms, box-shadow 250ms;

  :hover,
  :focus {
    box-shadow: 2px 2px 3px #ffd700;
    ::placeholder {
      color: transparent;
    }
  }
`;

export const Links = styled(Link)`
  font-family: ${(p) => p.theme.fonts.monospace};
  font-size: ${(p) => p.theme.fontSizes.sx};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.white};
`;

export const LinksContacts = styled(Links)`
  margin-right: auto;
`;

export const Conteier = styled.div`
  min-width: 95vw;
  height: 97vh;
  padding: ${(p) => p.theme.space[3]}px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://mobimg.b-cdn.net/v3/fetch/01/01f2c43831ed91f9b5e28e0892c1f612.jpeg?h=900&r=0.5");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid black;

  @media screen and (min-width: 480px) {
    min-width: 380px;
    border-radius: 15px;
    border: 1px solid black;
  }
`;

const IconsRecord = styled(FiberManualRecordIcon)`
  position: absolute;
  top: 1%;
  left: 48%;

  width: 20px;
  height: 20px;
  color: #000;
`;

const IconsExpand = styled(ExpandCircleDownIcon)`
  width: 20px;
  height: 20px;
  rotate: 90deg;
  :hover {
    cursor: pointer;
    fill: black;
    scale: 1.05;
  }
`;
const IconsCheckBox = styled(CheckBoxOutlineBlankIcon)`
  width: 20px;
  height: 20px;
  rotate: 90deg;
  :hover {
    cursor: pointer;
    fill: black;
    scale: 1.05;
  }
`;
const IconsStanby = styled(ModeStandbyIcon)`
  width: 20px;
  height: 20px;
  rotate: 90deg;
  :hover {
    cursor: pointer;
    fill: black;
    scale: 1.05;
  }
`;

export const icons = {
  IconsCheckBox,
  IconsExpand,
  IconsRecord,
  IconsStanby,
};
