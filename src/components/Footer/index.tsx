import React from 'react';
import {
  FooterContainer,
  IconsContainer,
  LeftContainer,
  RightContainer,
} from './styles';

export function Footer() {
  return (
    <FooterContainer>
      <LeftContainer>
        <span>Follow Us</span>
        <IconsContainer>
          <img src="/images/youtube.svg" alt="Youtube" />
          <img src="/images/facebook.svg" alt="Facebook" />
          <img src="/images/twitter.svg" alt="Twitter" />
        </IconsContainer>
      </LeftContainer>
      <RightContainer>
        <span>Contact</span>
        <span>
          2490 Leisure Lane <br /> San Luis Obispo <br /> California
        </span>
      </RightContainer>
    </FooterContainer>
  );
}
