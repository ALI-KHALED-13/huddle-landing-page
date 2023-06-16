import { Envelope } from "@phosphor-icons/react";
import { StyledFooter } from "./styled";


const Footer =()=> {
  return (
    <StyledFooter>
        <h3 className="logo">
          <img src={logo} alt="logo" width="35" height="auto" loading="lazy"/>
          Feedback Hub
        </h3>
        <div className="contact">
          <Envelope color="white" size={20} /> feedbackhub13@gmail.com
          {/*social media accounts here and the footer will look nice*/}
        </div>
        <div className="as">
          <a href="*">About</a>
          <a href="*">Register</a>
          <a href="*">Login</a>
          <a href="*">Products</a>
        </div>
        <p className="copyright">
          All Rights Reserved || 2023
        </p>
      </StyledFooter>
  );
}

export default Footer;