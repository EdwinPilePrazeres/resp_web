import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIconWrap,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/resp_web/signin">How it works</FooterLink>
              <FooterLink to="/resp_web/signin">Testimonials</FooterLink>
              <FooterLink to="/resp_web/signin">Careers</FooterLink>
              <FooterLink to="/resp_web/signin">Investors</FooterLink>
              <FooterLink to="/resp_web/signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            {/*  */}
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/resp_web/signin">Instagram</FooterLink>
              <FooterLink to="/resp_web/signin">Facebook</FooterLink>
              <FooterLink to="/resp_web/signin">Youtube</FooterLink>
              <FooterLink to="/resp_web/signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          {/*  */}
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/resp_web/signin">Submit Video</FooterLink>
              <FooterLink to="/resp_web/signin">Ambassadors</FooterLink>
              <FooterLink to="/resp_web/signin">Agency</FooterLink>
              <FooterLink to="/resp_web/signin">Influencer</FooterLink>
            </FooterLinkItems>
            {/*  */}
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/resp_web/signin">Contact</FooterLink>
              <FooterLink to="/resp_web/signin">Support</FooterLink>
              <FooterLink to="/resp_web/signin">Destinations</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/resp_web" onClick={toggleHome}>
              EPP
            </SocialLogo>
            <WebsiteRights>
              EPP © {new Date().getFullYear()} All Rights reserved.
            </WebsiteRights>
            <SocialIconWrap>
              <SocialIcons>
                <SocialIconLink
                  href="//www.google.com/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
              </SocialIcons>
              <SocialIcons>
                <SocialIconLink
                  href="//https://www.google.com/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
              <SocialIcons>
                <SocialIconLink
                  href="//https://www.google.com/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
              <SocialIcons>
                <SocialIconLink
                  href="//https://www.google.com/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialIconWrap>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
