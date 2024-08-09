import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../component/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await axios.get(`/videos/${type}`);
      setVideos(response.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video ={video}/>
      ))}
    </Container>
  );
};

export default Home;
