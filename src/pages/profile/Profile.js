import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import FriendsComponent from "../../components/FriendsComponent";
// import FriendRequest from "../../components/Home/FriendRequest";
// import OnlineAndBasicProfile from "../../components/Home/OnlineFriends/OnlineAndBasicProfile";
// import Share from "../../components/Home/Share";
// import Stories from "../../components/Home/Stories";
import Navbar from "../../components/navbar/Navbar";
import ProfileTop from "../../components/ProfileTop";
import { SCREENS } from "../../components/responsive/SCREENS";
import TimelinePost from "../../components/TimelinePost";

const Container = styled.div`
  ${tw`
flex flex-col gap-4 items-center
`}
`;

const ProfileBottomContainer = styled.main`
  padding: 4px;
  ${tw`
flex 
flex-col
w-full
items-center
max-w-6xl
gap-4


`}
  @media (min-width: ${SCREENS.md}) {
    display: grid;
    grid-template-columns: 18rem auto;
  }

  @media (min-width: ${SCREENS.xl}) {
    display: grid;
    grid-template-columns: 22rem auto;
  }
`;

function Profile({ isSettingsModalOpen, setIsSettingsModalOpen }) {
  const isLargeScreen = useMediaQuery({ minWidth: SCREENS.lg });
  const isTablet = useMediaQuery({ minWidth: SCREENS.md });

  if (isLargeScreen || isTablet) {
    return (
      <>
        <Navbar />
        <Container>
          <ProfileTop
            setIsSettingsModalOpen={setIsSettingsModalOpen}
            isSettingsModalOpen={isSettingsModalOpen}
          />
          <ProfileBottomContainer>
            <FriendsComponent />
            <TimelinePost />
          </ProfileBottomContainer>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        <ProfileTop
          setIsSettingsModalOpen={setIsSettingsModalOpen}
          isSettingsModalOpen={isSettingsModalOpen}
        />
        <ProfileBottomContainer>
          <TimelinePost />
        </ProfileBottomContainer>
      </Container>
    </>
  );
}

export default Profile;
