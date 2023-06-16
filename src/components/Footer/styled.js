import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";


export const StyledFooter = styled.footer`
  background-color: black;
  padding: 2rem;
  display: grid;
  gap: 1rem;
  & * {
    color: white;
  }
  & > * {
    display: flex;
    gap: 0.5rem;
  }

  
  & > .contact {
    align-items: center;
  }

  ${mediaQuery("md")}{
    grid-template-columns: 1fr 1fr;
    align-items: baseline;
    & * {
      font-size: 1.8rem;
    }
    
  }

  ${mediaQuery("lg")}{
    & * {font-size: 2.2rem;}
    & > .logo { font-size: 2.5rem; }
  }
`;