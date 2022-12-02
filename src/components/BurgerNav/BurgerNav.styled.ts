import styled, { keyframes } from "styled-components";

const show = keyframes`
from {
    transform: translateY(-200px);
} to {
    transform: translateY(0px)
}
`;

export const ConteinerBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 200px;
  padding: 5;
  border-radius: 5px;
  background-color: white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  animation: ${show} 500ms;
`;

export const ConteinerIcon = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const BurgerList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 25px;
`;

export const BurgerItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: scale 300ms;

  :hover {
    border-radius: 15%;
    scale: 1.2;
  }
`;

export const IconText = styled.p`
  font-size: 10px;
  line-height: 14px;
`;
