import React, { useState } from "react";
import styled from "styled-components";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
  background-color: ${({ theme }) => theme.bhLighter};
`;

const Title = styled.h1``;

const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 16px;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.bhLighter};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  cursor: pointer;
  margin-left: 30px;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  const signwithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => { console.log("error : ", error)});
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Container>
        <Wrapper>
          <Title>Sign in</Title>
          <SubTitle>to continue to YouTube</SubTitle>
          <Input
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Sign in</Button>
          <SubTitle>or</SubTitle>
          <Button onClick={signwithGoogle}>Sign in with Google</Button>
          <SubTitle>or</SubTitle>
          <Input
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Sign up</Button>
          {/* <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          /> */}
        </Wrapper>
        <More>
          English (USA)
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
