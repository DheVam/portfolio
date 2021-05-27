import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () =>{
    return (
      <FooterBg>
     
        <IconContainer>
       
        <a href="https://www.twitter.com/vamshidheeraj" target="_blank"  rel="noreferrer" >
  <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
</a>
<a href="https://www.instagram.com/varravamshi" target="_blank"  rel="noreferrer">
  <FontAwesomeIcon icon={faInstagram} size="2x" color="white"/>
</a>
          </IconContainer>
          <FooterImage></FooterImage>
      </FooterBg>
    );
};




const FooterBg = styled.div`
  display: flex;
  justify-content: center;
  background: #3b3838;
  height: 85px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  @media(max-width:425px){
    height: 48px;
  }
`

const FooterImage = styled.image`

`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  grid-gap: 20px;
  padding: 25px;
  margin: 0 auto;
  @media(max-width:425px){
    padding:10px;
  }
`


export default Footer;