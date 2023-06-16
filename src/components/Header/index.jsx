import logo from '../../assets/images/logo_transparent.svg';
import Button from '../Button';


const Header =()=> {

  return (
    <header style={{display: "flex", justifyContent:"space-between"}}>

      <img src={logo} />

      <Button 
        as="a"
        to="/"
        variant='secondary'
        color="#FF52C1"
      >
        Try for free
      </Button>
    </header>
  );
}


export default Header;