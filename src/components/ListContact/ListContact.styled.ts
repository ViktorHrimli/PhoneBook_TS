import styled from 'styled-components';
import { DeleteForever } from '@mui/icons-material';

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[3]};
`;

export const ItemList = styled.li`
  width: 100%;
  color: white;
`;

export const ItemListParagr = styled.p`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
`;

export const ButtonIcon = styled(DeleteForever)`
  color: white;
  :hover {
    cursor: pointer;
    scale: 1.05;
    color: red;
  }
`;
