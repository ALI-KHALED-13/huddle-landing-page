import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";


export const StyledLandingPage = styled.main`
  background-color: white;
  min-height: 90vh;
  & > section:nth-child(even){
    background-color: #F6FBFF;
  }
  & > section:nth-child(odd){
    background-color: white;
  }
`;

export const StyledSectionHeader = styled.h1`
  text-align: center;
  text-transform: capitalize;
  font-family: "Poppins Bold";
  font-size: 2.4rem;
`;

export const StyledVerticalContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 3rem;
  max-width: 140rem;
  margin: 0 auto;
  min-height: 70vh;
  padding: 1rem;
  & p {
    max-width: 60rem;
    text-align: center;
  }
`;


export const StyledHorizontalContainer = styled(StyledVerticalContainer)`
  gap: 8rem;
  overflow: hidden;
  min-height: unset;
  background-color: inherit;
  & > div { // section text content
    background-color: inherit;
    z-index: 3; // so the illustration comes from behind it
  }
  & img {
    width: 80%;
    transform: translateY(-95%);
    transition: transform 0.8s ease-out;
  }

  & img.slide {
    transform: translateY(0%);
  }

  ${mediaQuery("md")}{
    flex-direction: row;
    justify-content: center;
    & img {
      width: 55%;
      transform: translate(95%, 0);
      transition: transform 1s ease-out;
    }
    & img.even {
      order: -1;
      transform: translate(-95%, 0);
    }
    & img.slide {
      transform: translate(0, 0);
    }
  }
`;

export const StyledStatsContainer = styled.article`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 9rem;
  & > div {
    width: 50%;
    margin: 0 auto;
  }
  & > div > h3 {
    font-size: 5.5rem;
    font-family: 'Sans Bold';
  }
  & > div > p {
    color: #808E9A;
  }
`;

export const StyledParagraph = styled.p`
  margin: 1rem 0;
  ${mediaQuery("md")}{
    font-size: 1.9rem;
  }
  ${mediaQuery("lg")}{
    font-size: 2.2rem;
  }
`;

