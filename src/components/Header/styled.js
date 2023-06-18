import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";
import { StyledSecondaryButton } from "../Button/styled";



export const StyledHeader = styled.header`
  max-width: 160rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  & > img {height: 2.5rem;}

  ${mediaQuery("md")}{
    padding: 8rem;
    & > img {height: 4rem;}
  }
`;


export const StyledTryButton = styled(StyledSecondaryButton)`
  font-size: 1.2rem;
  padding: 0.3rem 2rem;
  border-radius: 2rem;
  line-height: 2.2;
  ${mediaQuery("md")}{
    font-size: 1.5rem;
    padding: 0.9rem 3rem;
    border-radius: 2rem;
  }
`;