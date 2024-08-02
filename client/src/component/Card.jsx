import React from "react";
import styled from "styled-components";
import thumbnail from "../img/thumbnail.jpeg";
import dog from "../img/dog2.jpeg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width:  ${(props) => (props.type !== "sm" && "360px")};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  gap: 10px;
  display: ${(props) => props.type === "sm" && "flex"};
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "200px")};
  background-color: #999;
  flex:1;
`;

const Details = styled.div`
  display: flex;
  margin-top:  ${(props) => props.type !== 'sm' && '16px'};
  gap: 12px;
  flex:1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container type={type}>
        <Image type={type} src={thumbnail} />
        <Details type={type}>
          <ChannelImage type={type} src={dog} />
          <Texts>
            <Title>Video Title</Title>
            <ChannelName>Channel Name</ChannelName>
            <Info>Video Info 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
