import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from '@mui/icons-material/Search';



const Container = styled.div`
position:sticky;
top: 0;
background-color:${({theme}) => theme.bhLighter};
height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
width:40%;
position:absolute;
left: 0;
right: 0;
display: flex;
align-items:center; 
justify-content:space-between;
padding:5px;
border: 1px solid #ccc;
border-radius: 3px;
  
margin:auto; 
   
`;
const Input = styled.input`
border:none;
background-color:transparent;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
    <SearchIcon />
        </Search>
        <Button>
        <AccountCircleIcon />
        Sign in
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
