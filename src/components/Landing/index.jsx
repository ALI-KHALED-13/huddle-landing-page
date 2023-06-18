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
  StyledStatsContainer,
  StyledVerticalContainer
} from "./styled";
import communityImg from '../../assets/images/community.svg';
import flowingConvo from '../../assets/images/flowing.svg';
import growTogether from '../../assets/images/grow_together.png';
import usersSVg from '../../assets/images/users.svg';
import { useEffect, useRef } from "react";
import { ChatDots, UsersThree } from "@phosphor-icons/react";


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
      <HighWavedSection waveColor="#F6FBFF">
        <StyledVerticalContainer>
          <StyledSectionHeader> Build The Community Your Fans Will Love </StyledSectionHeader>
          <StyledParagraph>
            Huddle re-imagines the way we build communities.
            You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion. 
          </StyledParagraph>
          <Button
            color="#FF52C1"
            hoverColor="#FF8ED7"
            as="a"
            to="#"
          >
            Get Started For Free
          </Button>
          <StyledStatsContainer>
            <img src={communityImg} alt="community" width="95%" height="auto"/>
            <div>
              <UsersThree color="#e652d0" size={36} weight="thin"/>
              <h3>1.4k+</h3>
              <p>Communities Formed</p>
            </div>
            <div>
              <ChatDots color="#e652d0" size={36} weight="thin"/>
              <h3>2.7m+</h3>
              <p>Messages Sent</p>
            </div>
          </StyledStatsContainer>
        </StyledVerticalContainer>
        
      </HighWavedSection>

      <MidWavedSection waveColor="white">
        <StyledHorizontalContainer>
          <div>
            <StyledSectionHeader >Grow Together </StyledSectionHeader>
            <StyledParagraph>
              Generate meaningful discussions with your audience and build a strong, loyal community.
              Think of the insightful conversations you miss out on with traditional feedback forms. 
            </StyledParagraph>
          </div>
          <img src={growTogether} alt="Growth" loading="lazy" width="90%" height="auto" className="even"/>
        </StyledHorizontalContainer>
      </MidWavedSection>
      
      <LowWavedSection waveColor="#F6FBFF" >
        <StyledHorizontalContainer>
          <div>
            <StyledSectionHeader >Flowing Conversations</StyledSectionHeader>
            <StyledParagraph>
              You wouldn't paginate a conversation in real life, so why do it online?
              Our threads have just-in-time loading for a more natural flow.
            </StyledParagraph>
          </div>
          <img src={flowingConvo} alt="flowing convo" loading="lazy" width="90%" height="auto" className="even"/>
        </StyledHorizontalContainer>
      </LowWavedSection>

      

      <HighWavedSection waveColor="white" >
        <StyledHorizontalContainer>
          <div>
            <StyledSectionHeader >Your Users</StyledSectionHeader>
            <StyledParagraph>
              It takes no time at all to integrate Huddle with your app's authentication solution.
              This means, once signed in to your app, your users can start chatting immediately.
            </StyledParagraph>
          </div>
          <img src={usersSVg} alt="Growth" loading="lazy" width="90%" height="auto" className="even"/>
        </StyledHorizontalContainer>
      </HighWavedSection>

      <LowWavedSection waveColor="#00252E" >
        <StyledHorizontalContainer>
          <StyledSectionHeader>Ready to build your community?</StyledSectionHeader>
          <Button
            color="#FF52C1"
            hoverColor="#FF8ED7"
            as="a"
            to="#"
          >
            Get Started For Free
          </Button>
        </StyledHorizontalContainer>
      </LowWavedSection>

    </StyledLandingPage>
  );
}


export default Landing;