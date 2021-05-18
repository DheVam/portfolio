import React from 'react';
import styled from 'styled-components';

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
  display:flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 85px);
  flex-direction: column;
`
const WelcomeText = styled.div`
  font-family: robotobold;
  font-size: 30px;
  display: inline-block;
`
 const SubText = styled.div`
   font-family: robotoregular;
   font-size: 24px;
   display: inline-block;
`  
const InfoText = styled.div`
   font-family: robotoregular:
   font-size: 32px;
   display: inline-block;
   width: 450px;
   text-align: center;
   padding-top: 15px;
   @media(max-width:500px){
     width: 320px;
   }
`


  export default Home;