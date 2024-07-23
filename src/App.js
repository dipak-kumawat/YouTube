import styled from "styled-components";
import "./App.css";
import Main from "./component/Main";
import Navbar from "./component/Navbar";

const Container = styled.div`
  display: flex;
`;

const Menu = styled.div`
  flex:7;
  background-color: #181818;
`;

const Wrapper = styled.div`

`;

function App() {
  return (
    <Container>
      <Main />
      <Menu>
        <Navbar />
        <Wrapper>Video cards</Wrapper>
      </Menu>
    </Container>
  );
}

export default App;
