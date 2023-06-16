import styled from 'styled-components';
import { getColor } from '../../utils/getColor';
import { setStyledParagraph2 } from '../Typo';
import { mediaQuery } from '../../utils/mediaQuery';


export const StyledButton = styled.button`
  ${setStyledParagraph2()}
  font-family: 'Jost Semi Bold', sans-serif;
  font-size: 1.4rem;
  padding: 1.25rem 1.6rem 1.15rem;
  border: none;
  border-radius: 1rem;
  border-style: solid;
  border-width: 2px;
  padding: 1rem 1.6rem;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:disabled:hover {
    background-color: ${({color, theme}) => getColor(theme, color)};
  }
`;

export const StyledPrimaryButton = styled(StyledButton)`
  border-color: ${({color, theme}) => getColor(theme, color)};
  background-color: ${({color, theme}) => getColor(theme, color)};
  color: ${({theme}) => theme.lightGray};
  &:hover {
    background-color: ${({$hoverColor, theme}) => getColor(theme, $hoverColor || "")};
    border-color: ${({$hoverColor, theme}) => getColor(theme, $hoverColor || "")};
  }
`;


export  const StyledSecondaryButton = styled(StyledButton)`
  background-color: transparent;
  color: ${({color, theme}) => getColor(theme, color)};
  border-color: ${({color, theme}) => getColor(theme, color)};
  transition: background-color 0.2s linear;

  &:hover {
    background-color:  ${({color, theme}) => getColor(theme, color)};
    color: white;
  }
  
  &:disabled:hover {
    background-color: transparent;
    color: ${({color, theme}) => getColor(theme, color)};
  }
  
  ${mediaQuery('md')} {
    padding: 1.25rem 2.4rem 1.15rem;
    font-size: 1.6rem;
  }
`;
