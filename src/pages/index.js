import React from 'react';
import styled from 'styled-components';
import img from './img/background.jpg'

const Home = () => {
    return (
     <HomeWrapper>
       <WelcomeText>Hello World</WelcomeText>
       <SubText>Welcome</SubText>
       <InfoText>Hey all, this is my personal portolio website.Here I have curated all the Information about myself.Feel free to contact me. Contact details below.</InfoText>
     </HomeWrapper>
    );
  };
    
const HomeWrapper = styled.div`
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 85px);
  flex-direction: column;

  &::before {
    content: "";
    background: url(${img});
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
    width: auto;
    background-size:cover;
    background-position: top-center;
    height: calc(100vh - 85px);
   
  }
`
const WelcomeText = styled.div`
  font-family: robotobold;
  font-size: 30px;
  display: inline-block;
  color: white;
  position:relative
`
 const SubText = styled.div`
   font-family: robotoregular;
   font-size: 24px;
   display: inline-block;
   color: white;
`  
const InfoText = styled.div`
   font-family: robotoregular;
   font-size: 22px;
   display: inline-block;
   width: 450px;
   text-align: center;
   padding-top: 15px;
   color: white;
   @media(max-width:500px){
     width: 320px;
   }
`


  export default Home;