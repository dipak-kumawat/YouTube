import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { VideoCallOutlined } from "@mui/icons-material";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bhLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: auto;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  &:focus {
    outline: none;
  }
  color: ${({ theme }) => theme.text};
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

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchIcon style={{ color: `${({ theme }) => theme.text}` }} />
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlined />
            <Avatar src={currentUser.img} />
            {currentUser.name}
          </User>
        ) : (
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleIcon />
              Sign in
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
