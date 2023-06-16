import { createGlobalStyle } from 'styled-components';

import openSansRegular from './assets/fonts/OpenSans-Regular.ttf';
import openSansSemiBold from './assets/fonts/OpenSans-semiBold.ttf';
import openSansBold from './assets/fonts/OpenSans-Bold.ttf';
import poppinsBold from './assets/fonts/Poppins-Bold.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Sans Regular';
    src: url(${openSansRegular}) format('truetype');
    font-weight: normal; 
    font-style: normal; 
  }

  @font-face {
    font-family: 'Sans Semi-Bold';
    src: url(${openSansSemiBold}) format('truetype');
    font-weight: 600; 
    font-style: normal; 
  }

  @font-face {
    font-family: 'Sans Bold';
    src: url(${openSansBold}) format('truetype');
    font-weight: bold; 
    font-style: normal; 
  }
  @font-face {
    font-family: 'Poppins Bold';
    src: url(${poppinsBold}) format('truetype');
    font-weight: bold; 
    font-style: normal; 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sans Regular', sans-serif;
    font-size: 1.6rem;
    scrollbar-width: thin;
    scrollbar-color: gray white;
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  *::-webkit-scrollbar-track {
    background: white;
    border-radius: 1rem;
  }

  *::-webkit-scrollbar-thumb {
    background-color: gray;
    border: 1px solid white;
    border-radius: 1rem;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    background-color: white;
    color-scheme: light dark;
  }

  #root {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default GlobalStyles;