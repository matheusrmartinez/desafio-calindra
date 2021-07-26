/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Content, NavContainer, TitleContainer } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src="/images/logo_1_medium.svg" alt="measure-tape" />
        <TitleContainer>
          <span>zutterman</span>
          <span>M e a s u r e T a p e s</span>
        </TitleContainer>
        <NavContainer>
          <a href="">ABOUT US</a>
          <a href="">MODELS</a>
          <a href="">GUARANTEE</a>
        </NavContainer>
      </Content>
    </Container>
  );
}
