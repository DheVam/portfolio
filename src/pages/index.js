import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'Right',
          alignItems: 'Right',
          height: '100vh'
        }}
      >
        <h1>Home</h1>
        <TestingDiv>Vamsi</TestingDiv>
      </div>
    );
  };
    

const TestingDiv = styled.div`
  font-family: robotobold;
  font-size: 30px;
`;


  export default Home;