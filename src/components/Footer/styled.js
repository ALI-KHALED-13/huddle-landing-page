import styled, { css } from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";


export const StyledFooter = styled.footer`
  background-color: #00252E;
  padding: 6rem 2.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;
  & > * {
    color: white;
  }
  ${mediaQuery("md")}{
    flex-direction: row-reverse;
  }
  ${mediaQuery("lg")}{
    & > div {
      max-width: 37%;
    }
  }
`;

export const StyledFooterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > h3 {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
  }
  & > p {
    font-weight: 500;
    line-height: 1.8;
    margin-bottom: 1.6rem;
  }

  ${mediaQuery("lg")}{
    max-width: 37%;
  }

`;

export const StyledEmailInput = styled.input`
  width: 100%;
  border-radius: 0.6rem;
  padding: 1.2rem 1.6rem;
  &:focus {
    outline: none;
  }
  ${({emailSent})=> emailSent && css`border: 1px solid rgb(255 67 153);`}
`;

export const StyledWhiteLogoImg = styled.img`
  height: 6.5rem;
  ${mediaQuery("md")}{
    height: 8.5rem;
  }
`;

export const StyledFooterContact = styled.address`
  margin: 2rem 0; 
  font-style: normal;
  & > p {
    width: 100%;
    display: flex;
    gap: 1.6rem;
    align-items: center;
    padding-bottom: 1.6rem;
  }
  & > p > a {
    color: inherit;
  }

  & > svg {
    margin-right: 2.4rem;
    cursor: pointer;
  }

`;