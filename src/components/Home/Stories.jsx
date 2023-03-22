import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Share from "./Share";
import Post from "./Posts/Post";

const Container = styled.div`
  ${tw`
  flex flex-col items-center gap-4 overflow-y-scroll w-full h-full
  `}
`;

function Stories() {
  return (
    <Container>
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Stories;
