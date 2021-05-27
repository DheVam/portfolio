import React,{ useState} from 'react';
import styled from 'styled-components';

const ContactForm = () => {
   
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Container>
    <WelcomeText>Contact Me</WelcomeText>
    <EmailContainer>
    <Form onSubmit={handleSubmit}>
      <NameDiv>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" required />
      </NameDiv>
      <EmailDiv>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" required />
      </EmailDiv>
      <MessageDiv>
        <Label htmlFor="message">Message:</Label>
        <Text id="message" required />
      </MessageDiv>
      <SubmitButtom type="submit">{status}</SubmitButtom>
    </Form>
    </EmailContainer>
    <SocialMediaContainer>

    </SocialMediaContainer>
    </Container>
  );
};

const Form = styled.form`
  margin-top:30px;
   

`
const Label = styled.label`
margin-right: 10px;
`

const Input = styled.input`
width:300px;
@media(max-width:350px){
  width: 240px;
}
`
const SubmitButtom =  styled.button`
margin-left:10%;
`

const Text = styled.textarea`

`
const NameDiv = styled.div`
display: grid;
grid-gap: 10px;
margin-bottom: 10px;

`
const EmailDiv =  styled.div`
display: grid;
grid-gap: 10px;
margin-bottom: 10px;


`
const MessageDiv =  styled.div`
display: grid;
grid-gap: 10px;
margin-bottom: 10px;
`

const WelcomeText = styled.div`
  font-family: robotobold;
  font-size: 30px;
  
  margin-top: 10%;
  
  `
const Container = styled.div`
width: fit-content;
display: flex;
flex-direction: column;
margin-top: 30px;
margin-right:30px;
margin-left:30px;

`
const EmailContainer = styled.div`

`

const SocialMediaContainer = styled.div`

`





export default ContactForm;