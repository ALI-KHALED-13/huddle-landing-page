import {PhoneCall, InstagramLogo, FacebookLogo, TwitterLogo} from "@phosphor-icons/react";
import { StyledFooter, StyledFooterContact, StyledFooterForm, StyledWhiteLogoImg } from "./styled";
import grayLogo from '../../assets/images/gray-logo.png';
import Gmail from '../../assets/images/gmail.png';
import Button from "../Button";

const Footer =()=> {
  return (
    <StyledFooter>
        <StyledFooterForm>
          <h3>newsletter</h3>
          <p>
            To recieve tips on how to grow your community, sign up to our weekly newsletter.
            We’ll never send you spam or pass on your email address
          </p>
          <input
            type="email"
          />
          <Button
            color="#FF52C1"
            hoverColor="#FF8ED7"
            style={{alignSelf: "end", borderRadius: 5}}
          >
            Subscribe
          </Button>
        </StyledFooterForm>

        <div>
          <StyledWhiteLogoImg src={grayLogo} alt="Huddle" />
          <p>
              Are you looking for a reliable service that can exceed your expectations?
              Contact us today and let us know how we can help you. get in touch with us now!
          </p>

          <StyledFooterContact>
            <p>
              <PhoneCall size={24} color="white" weight="fill"/>
                Phone: +1-543-123-4567
            </p>
            <p style={{marginBottom: 60}}>
              <img src={Gmail} alt="email" height={24}/>
                example@huddle.com
            </p>
            <FacebookLogo size={40} color="#faf4f4" weight="fill" />
            <InstagramLogo size={40} color="#faf4f4" />
            <TwitterLogo
              size={40}
              color="#faf4f4"
              weight="fill"
            />

          </StyledFooterContact>
        </div>
      </StyledFooter>
  );
}

export default Footer;