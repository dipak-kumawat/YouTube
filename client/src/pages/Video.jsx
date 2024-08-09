import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import dog from "../img/dog2.jpeg";
import Comments from "../component/Comments";
import Card from '../component/Card'




const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-weight: 400;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: ${({ theme }) => theme.text}; */
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  align-items: center;
`;
const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Content = styled.div`
  flex: 5;
`;
const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
display: flex;
gap:16px;
height:50px;
padding-bottom:3px;
`;
const Subscribe = styled.button`
 padding: 10px 20px;
 height: max-content;
 color:white;
 background-color:#cc1a00;
 font-weight:500;
 border:none;
 cursor:pointer;
 border-radius:3px;

`;
const ChannelDetails = styled.div`
display:flex;
flex-direction:column;

`;
const ChannelName = styled.span`
color: ${({ theme }) => theme.text};

font-weight: 500;
`;
const ChannelCounter = styled.span`
font-size: 12px;
margin-top: 5px;
margin-bottom: 20px;
color: ${({ theme }) => theme.textSoft};
`;
const Desription = styled.p`
font-style: 14px; 
`;
const Image = styled.img`
width:50px;
height:50;
border-radius:50%;
margin-left:7px;
margin-bottom:3px;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/TrPvQvbp3Cg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; ancrypted-media; gyroscope; picture-in-pitchure"
            allowFullScreen
          />
        </VideoWrapper>
        <Title>Video Title</Title>
        <Details>
          <Info>Video Description</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon />
              Like
            </Button>
            <Button>
              <ThumbDownIcon />
              Dislike
            </Button>
            <Button>
              <ShareIcon />
              Share
            </Button>
            <Button>
              <LibraryAddIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={dog} />
            <ChannelDetails>
              <ChannelName>Dipak Kumawat</ChannelName>
              <ChannelCounter>200k Suscriber</ChannelCounter>
              <Desription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                
              </Desription>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
      </Recommendation>
    </Container>
  );
};

export default Video;
