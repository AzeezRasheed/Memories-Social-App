import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Post from "./Home/Posts/Post";
import Share from "./Home/Share";

const Container = styled.div`
  ${tw`
  flex flex-col items-center gap-4 overflow-y-scroll w-full h-full
  `}
`;
function TimelinePost() {
  return (
    <Container>
      <Share />
      <Post />
    </Container>
  );
}

export default TimelinePost;
