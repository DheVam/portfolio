import React from 'react';
import styled from 'styled-components';
  
const Blogs = () => {
  return (
   
      <Container>
          <BlogContent>
            This page will be updated shortly ....
          </BlogContent>
      </Container>
   
  );
};

const Container = styled.div`
  margin-top: 50px;
  padding-left:  30px;
  padding-right: 30px;
  justify-content: center;
  align-items: center;
`

const BlogContent = styled.div`
  display: inline-block;
  font-family: robotoregular;
  font-size: 24px;
  letter-spacing: normal;
`
  
export default Blogs;