import React from 'react';
import styled from 'styled-components';
  
const About = () => {
  return (
  <Container>
    <HeaderText> Hey all,</HeaderText>
    <InfoText>
    This is Dheeraj Vamshi, an aspiring front end web developer looking for some cool projects. 
    Iam a student currently in pursue of my bachelor’s degree in computer science and engineering. 
    Computers and technology were always my most favorite interests, and that later pulled me towards 
    software development. I consider web development especially UI development is one of the most 
    skillful sector in software development and thereby I have chosen it. Being creative and logical 
    are one of the most important needs of Web Development which pulled me towards it.  
    </InfoText>
  </Container>
  );
};

const Container = styled.div`
margin-left: 30px;
margin-right: 30px;
margin-top: 30px;
margin-bottom: 85px;
overflow-y: auto;

`

const HeaderText = styled.div`
font-size: 32px;
font-family: robotobold; 
`

const InfoText = styled.div`
font-family: robotoregular;
font-size: 20px;
margin-top: 30px;
letter-spacing: 0.02em;
-webkit-font-smoothing: auto;
`
  
export default About;