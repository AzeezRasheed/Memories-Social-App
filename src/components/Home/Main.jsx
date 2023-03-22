import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../responsive/SCREENS";
import FriendRequest from "./FriendRequest";
import Stories from "./Stories";
import SuggestionAndBasicProfile from "./OnlineFriends/OnlineAndBasicProfile";
import OnlineAndBasicProfile from "./OnlineFriends/OnlineAndBasicProfile";

const Container = styled.main`
  padding: 4px;
  ${tw`
flex 
flex-col
w-full
items-center
max-w-screen-2xl
md:gap-4


`}
  @media (min-width: ${SCREENS.md}) {
    display: grid;
    grid-template-columns: 18rem auto;
  }

  @media (min-width: ${SCREENS.xl}) {
    display: grid;
    grid-template-columns: 18rem auto 22rem;
  }
`;

function Main() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const isMobileMd = useMediaQuery({ maxWidth: SCREENS.md });
  if (isMobile) {
    return (
      <Container>
        <Stories />
      </Container>
    );
  }

  if (isMobileMd) {
    return (
      <Container>
        <FriendRequest />
        <Stories />
      </Container>
    );
  }

  return (
    <Container>
      <FriendRequest />
      <Stories />
      <OnlineAndBasicProfile />
    </Container>
  );
}

export default Main;
