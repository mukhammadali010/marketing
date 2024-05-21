import React from "react";
import { Container, FooterSection, FooterTitle, FooterItem, SocialMedia, SocialIcon, FooterLink } from "./style";

const Footer = () => {
  return (
    <Container>
      <FooterSection>
        <FooterTitle>Contact Us</FooterTitle>
        <FooterItem>Email: contact@example.com</FooterItem>
        <FooterItem>Phone: +123 456 7890</FooterItem>
        <FooterItem>Address: 123 Fake Street, Faketown, FK 12345</FooterItem>
      </FooterSection>

      <FooterSection>
        <FooterTitle>About Us</FooterTitle>
        <FooterItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mauris quam. Nullam dapibus nunc sit amet dui cursus, nec cursus nulla scelerisque. Integer sit amet felis nec leo pretium mollis.
        </FooterItem>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Quick Links</FooterTitle>
        <FooterItem><FooterLink href="#">Home</FooterLink></FooterItem>
        <FooterItem><FooterLink href="#">Services</FooterLink></FooterItem>
        <FooterItem><FooterLink href="#">Contact</FooterLink></FooterItem>
        <FooterItem><FooterLink href="#">About</FooterLink></FooterItem>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Follow Us</FooterTitle>
        <SocialMedia>
          <SocialIcon href="https://facebook.com" target="_blank">Facebook</SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank">Twitter</SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank">Instagram</SocialIcon>
        </SocialMedia>
      </FooterSection>
    </Container>
  );
};

export default Footer;
