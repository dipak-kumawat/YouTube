import React from "react";
import "./menu.css";
// import styled from "styled-components";
import styled from "styled-components";
import Youtube from "../img/YouTube.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { LightMode } from "@mui/icons-material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Container = styled.div`
  font-family: sans-serif;
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 14px;
  top: 0;
  position: sticky;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7%.5px 0px;
`;

const Hr = styled.hr`
  margin: 15px 0px border 0.5px solid #373737;
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={Youtube} />
          YouTube
        </Logo>
        <Item>
          {" "}
          <HomeIcon />
          Home
        </Item>
        <Item>
          {" "}
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon /> Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryIcon /> Library
        </Item>
        <Item>
          {" "}
          <HistoryIcon />
          History
        </Item>
        <Item>
          <WatchLaterIcon />
          Watch later
        </Item>
        <Hr />
        <Login>
          Sing in to like videos, comment, and subscribe.
          <Button>
            <AccountCircleIcon />
            Sign in
          </Button>
        </Login>
        <Item>
          {" "}
          <WhatshotIcon />
          Trending
        </Item>
        <Item>
          <MusicNoteIcon />
          Music
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <HelpOutlineIcon />
          Help
        </Item>
        <Item>
          <SettingsIcon />
          Settings
        </Item>
        <Item>
          <LightMode />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Main;
