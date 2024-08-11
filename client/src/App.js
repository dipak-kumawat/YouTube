import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import { darkTheme, lightTheme } from "./utils/Thame";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";




const Container = styled.div`
  display: flex;
`;

const Menu = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={ darkMode ? lightTheme :  darkTheme}>
      <Container>
        <BrowserRouter >
          <Main darkMode={ darkMode } setDarkMode={ setDarkMode } />
          <Menu>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/" >
                  <Route index element={ <Home type='random'/> } />
                  <Route path="trends" element={ <Home  type='trend'/> } />
                  <Route path="signin" element={ <SignIn /> } />
                  <Route path="subscriptions" element={ <Home  type='sub'/> } />
                  <Route path="video">
                    <Route path=":id" element={ <Video /> } />
                  </Route>
                </Route >
              </Routes>
            </Wrapper>
          </Menu>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;