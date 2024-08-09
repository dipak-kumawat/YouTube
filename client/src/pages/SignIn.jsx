import React from "react";
import styled from "styled-components";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border:1px solid ${({ theme }) => theme.soft};
  padding:20px 50px;
  gap:10px;
  background-color: ${({ theme }) => theme.bhLighter};
`;

const Title = styled.h1``

const SubTitle = styled.h2`
font-weight:20px;
font-size:300;
`

const Input = styled.input`
border:1 px solid ${({ theme }) => theme.bhLighter} ;
border-radius:3px;
padding:10px;
background-color:transparent;
width:100%;
color: ${({ theme }) => theme.text};

`

const Button = styled.button`
border-radius:3px;
border:none;
padding:10px 20px;
font-weight: 500;
cursor: pointer;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft};

`

const More = styled.button`
display:flex;
margin-top:10px;
border:none;
background-color:transparent;
font-size:13px;
color: ${({ theme }) => theme.textSoft};

`

const Links = styled.div`
margin-left:50px;
`
const Link = styled.span`
cursor: pointer;
margin-left:30px;
`

const SignIn = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to YouTube</SubTitle>
        <Input placeholder="username"/>
        <Input type="password" placeholder="password"/>
        <Button>Sign in</Button>
        <SubTitle>or</SubTitle>
        <Title>Sign Up</Title>
        <SubTitle>to continue to YouTube</SubTitle>
        <Input placeholder="username"/>
        <Input placeholder="email"/>
        <Input type="password" placeholder="password"/>
        <Button>Sign up</Button>
        <SubTitle>or</SubTitle>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
      </Wrapper>
      <More>
        English(USA)   
        <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
        </Links>

      </More>
    </Container>
    </GoogleOAuthProvider>
  );
};

export default SignIn;
