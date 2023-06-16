import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  padding: 12rem 3rem;
`;


const StyledBottomWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);


  & svg {
    position: relative;
    display: block;
    width: calc(139% + 1.3px);
    height: 117px;
    transform: rotateY(180deg);
  }
  & .shape-fill {
    fill: ${({theme, waveColor}) => theme[waveColor] || waveColor};
  }
`;

export const StyledHighWave = styled(StyledBottomWave)`

  & svg {
     width: calc(100% + 1.3px);
    height: 72px;
  }

`;

export const StyledLowWave = styled(StyledBottomWave)`
  & svg {
    width: calc(106% + 1.3px);
    height: 46px;
  }

`;

export const StyledMidWave = styled(StyledBottomWave)`
  transform: rotate(0);
  & svg {
    width: calc(100% + 1.3px);
    height: 59px;
  }  
`;