import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import { darkTheme, lightTheme } from "./utils/Thame";
import {useState} from 'react'

const Container = styled.div`
  display: flex;
`;

const Menu = styled.div`
  flex:7;
  background-color: ${({theme}) => theme.bg};
`;

const Wrapper = styled.div`

`;

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme= {darkMode ? lightTheme  : darkTheme}>

    <Container>
      <Main darkMode= {darkMode} setDarkMode = {setDarkMode} />
      <Menu>
        <Navbar />
        <Wrapper>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>
          <h1>Menu</h1>

        </Wrapper>
      </Menu>
    </Container>
    </ThemeProvider>
  );
}

export default App;
