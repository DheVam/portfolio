import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faReact,
  faHtml5,
  faCss3,
  faJsSquare
} from "@fortawesome/free-brands-svg-icons";
  
const Skills = () => {
  return (
   
     <Container>
      <TextContainer>My current skills are :  </TextContainer>
      <SkillsContainer>
         <div>
           <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"  rel="noreferrer">
         <FontAwesomeIcon icon={faHtml5} size="5x" color="orange" />
         </a>
         <span>HTML5</span>
         </div>
         <div>
           <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"  rel="noreferrer">
         <FontAwesomeIcon icon={faCss3} size="5x" color="orange" />
         </a>
         <span>CSS3</span>
         </div>
         <div>
         <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"  rel="noreferrer">
         <FontAwesomeIcon icon={faJsSquare} size="5x" color="orange" />
         </a>
         <span>JavaScript</span>
         </div>
         <div>
         <a href="https://reactjs.org/" target="_blank"  rel="noreferrer">
         <FontAwesomeIcon icon={faReact} size="5x" color="orange" />
         </a>
         <span>ReactJS</span>
         </div>
         </SkillsContainer>
     </Container>
    
  );
};


const Container = styled.div`
  margin-top: 50px;
  padding-left:  30px;
  padding-right: 30px;
`

const TextContainer =  styled.div`
  display: flex;
  justify-content: center;
  font-family: robotobold;
  font-size: 28px;
  margin-top: 30px;
  letter-spacing: 0.02em;
  -webkit-font-smoothing: auto;

`

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 80px;
  margin-top: 50px;
  border-style: none;
  background: black;
  padding: 40px;
  border-radius: 16px;
 
  div{
    display: grid;
    grid-gap:12px;
    
  }
  span{
    color:white;
    font-family:robotoregular;
    font-size: 18px;
  }

  @media(max-width:500px){
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 48px);
    grid-gap:40px;
    margin-bottom: 60px;
  }
`
  
export default Skills;