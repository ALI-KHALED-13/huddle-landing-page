
import styled from 'styled-components';
import { mediaQuery } from '../../utils/mediaQuery';


export const StyledButton = styled.button`
  font-size: 1.4rem;
  padding: 1.25rem 1.6rem 1.15rem;
  border: none;
  border-radius: 0.5rem;
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
    background-color: ${({color}) => color};
  }
`;

export const StyledPrimaryButton = styled(StyledButton)`
  border-color: ${({color, theme}) => color};
  background-color: ${({color, theme}) => color};
  color: ${({theme}) => theme.lightGray};
  &:hover {
    background-color: ${({$hoverColor, theme}) => $hoverColor};
    border-color: ${({$hoverColor, theme}) => $hoverColor};
  }
`;


export  const StyledSecondaryButton = styled(StyledButton)`
  background-color: transparent;
  color: ${({color}) => color};
  border-color: ${({color }) =>  color};
  transition: background-color 0.2s linear;

  &:hover {
    background-color:  ${({color}) =>  color};
    color: white;
  }
  
  &:disabled:hover {
    background-color: transparent;
    color: ${({color}) => color};
  }
  
  ${mediaQuery('md')} {
    padding: 1.25rem 2.4rem 1.15rem;
    font-size: 1.6rem;
  }
`;
