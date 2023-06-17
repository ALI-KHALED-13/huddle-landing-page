import Button from "../Button";
import {
  HighWavedSection,
  LowWavedSection,
  MidWavedSection
} from "../WavedSection";

import { 
  StyledHorizontalContainer,
  StyledLandingPage,
  StyledParagraph,
  StyledSectionHeader,
  StyledVerticalContainer
} from "./styled";
import communityImg from '../../assets/images/community.svg'
import growTogether from '../../assets/images/grow_together.png'
import { useEffect, useRef } from "react";


const Landing =()=> {
  const landingPageRef = useRef(null);

  useEffect(()=> {
    const observer = new IntersectionObserver((entries)=> {
      entries.forEach(entry=> {
        if (entry.isIntersecting && entry.target.className.indexOf("slide") == -1){
          entry.target.classList.add("slide")
        }
      })
    }, {rootMargin: "0% 0% -20% 0%"})

    if (landingPageRef.current){
      const imageElms = landingPageRef.current.querySelectorAll("img");
      imageElms.forEach((img)=> observer.observe(img))
    }
    return () => observer.disconnect();
  }, [landingPageRef.current])

  return (
    <StyledLandingPage ref={landingPageRef}>   
      <HighWavedSection waveColor="lightGray">
        <StyledVerticalContainer>
          <StyledSectionHeader> Build The Community Your Fans Will Love </StyledSectionHeader>
          <StyledParagraph>
            Huddle re-imagines the way we build communities.
            You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion. 
          </StyledParagraph>
          <Button
            color="lightViolet"
            hoverColor="violet"
            as="a"
            to="#"
          >
            Get Started For Free
          </Button>
          <img src={communityImg} alt="community" width="90%" height="auto"/>
        </StyledVerticalContainer>
        
      </HighWavedSection>

      <MidWavedSection waveColor="lightGray">
        <StyledHorizontalContainer>
          <div>
            <StyledSectionHeader >Grow Together</StyledSectionHeader>
            <StyledParagraph>
              Generate meaningful discussions with your audience and build a strong, loyal community.
              Think of the insightful conversations you miss out on with traditional feedback forms. 
            </StyledParagraph>
          </div>
          <img src={growTogether} alt="Growth" loading="lazy" width="90%" height="auto" className="even"/>
        </StyledHorizontalContainer>
      </MidWavedSection>
      
      <LowWavedSection waveColor="white" >
        <StyledHorizontalContainer>
          <div>
            <StyledSectionHeader >Grow Together</StyledSectionHeader>
            <StyledParagraph>
              Generate meaningful discussions with your audience and build a strong, loyal community.
              Think of the insightful conversations you miss out on with traditional feedback forms. 
            </StyledParagraph>
          </div>
          <img src={growTogether} alt="Growth" loading="lazy" width="90%" height="auto" className="even"/>
        </StyledHorizontalContainer>
      </LowWavedSection>

      

      <HighWavedSection waveColor="lightGray" >
        <StyledHorizontalContainer>
          <div>
            <StyledSectionHeader >Grow Together</StyledSectionHeader>
            <StyledParagraph>
              Generate meaningful discussions with your audience and build a strong, loyal community.
              Think of the insightful conversations you miss out on with traditional feedback forms. 
            </StyledParagraph>
          </div>
          <img src={growTogether} alt="Growth" loading="lazy" width="90%" height="auto" className="even"/>
        </StyledHorizontalContainer>
      </HighWavedSection>

      <LowWavedSection waveColor="#00252E" >
        <StyledHorizontalContainer>
          <div>
            <StyledSectionHeader >Grow Together</StyledSectionHeader>
            <StyledParagraph>
              Generate meaningful discussions with your audience and build a strong, loyal community.
              Think of the insightful conversations you miss out on with traditional feedback forms. 
            </StyledParagraph>
          </div>
          <img src={growTogether} alt="Growth" loading="lazy" width="90%" height="auto" className="even"/>
        </StyledHorizontalContainer>
      </LowWavedSection>

    </StyledLandingPage>
  );
}


export default Landing;