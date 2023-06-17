import logo from '../../assets/images/logo_transparent.svg';
import { StyledHeader, StyledTryButton } from './styled';


const Header =()=> {

  return (
    <StyledHeader>

      <img src={logo} />

      <StyledTryButton 
        as="a"
        to="/"
        variant='secondary'
        color="#FF52C1"
      >
        Try for free
      </StyledTryButton >
    </StyledHeader>
  );
}


export default Header;