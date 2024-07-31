import React from "react";
import styled from "styled-components";
import spider from "../img/spider.jpg";
import Comment from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avataar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

`;
const Input = styled.div`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avataar src={spider} />
        <Input placeholde ='Add a comments..... ' />
      </NewComment>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
