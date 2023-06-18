
import styled from 'styled-components';
import { mediaQuery } from '../../utils/mediaQuery';


export const StyledButton = styled.button`
  font-size: 1.4rem;
  border: none;
  border-radius: 2.5rem;
  border-style: solid;
  border-width: 2px;
  padding: 1rem 4rem;
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
  ${mediaQuery('md')} {
    font-size: 1.6rem;
  }
`;

export const StyledPrimaryButton = styled(StyledButton)`
  border-color: ${({color}) => color};
  background-color: ${({color}) => color};
  color: white;
  font-weight: 700;
  box-shadow: 0px 6px 13px rgba(0, 37, 46, 0.223053);
  &:hover {
    background-color: ${({$hoverColor}) => $hoverColor};
    border-color: ${({$hoverColor}) => $hoverColor};
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
  
`;
