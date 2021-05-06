import React from 'react';
import styled from 'styled-components';

const Footer = () =>{
    return (
      <FooterBg>
          <FooterText></FooterText>
          <FooterImage></FooterImage>
      </FooterBg>
    );
};




const FooterBg = styled.div`
  background: #63D471;
  height: 85px;
  width:100%;
  position:absolute;
  bottom:0;
`
const FooterText = styled.text`

`
const FooterImage = styled.image`

`


export default Footer;