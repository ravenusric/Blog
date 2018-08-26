import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.section`
  padding: 10px 0;
  color: #000;
  background-color: #eee;
  font-size: 11px;
  font-weight: 500;
  text-align: center;

  a {
    color: #000;
    font-weight: 700;
  }
`;

const Footer = () => (
  <FooterWrapper>
    Pura
    <a
      href="https://github.com/ravenusric"
      target="_blank"
      rel="noreferrer noopener"
    >
      Vida
    </a>
  </FooterWrapper>
);

export default Footer;
