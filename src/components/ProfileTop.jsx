import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
// import { SCREENS } from "./responsive/SCREENS";
// import BackgroundImage from "../assets/testing_images/Memories2.jpeg";
import { BsFillGearFill } from "react-icons/bs";

const ProfileContainer = styled.main`
  ${tw`
  bg-[#f1f4f8]
  `}
`;

const ProfileWrapper = styled.section`
  ${tw`
  relative flex h-96   w-full  items-center justify-center m-auto
  `}
`;

const CoverPhotoWrapper = styled.section`
  ${tw`
  absolute top-0   bg-cover bg-center bg-no-repeat h-full  w-full lg:w-[940px]
  `}
`;

// const BlackOverlay = styled.section`
//   ${tw`
//   w-full h-full absolute opacity-50 bg-black
//   `}
// `;

const Section = styled.section`
  ${tw`
  relative pb-2 pt-40
  `}
`;

const UserImageContainer = styled.section`
  ${tw`
  w-full px-4  flex items-center justify-center
  `}
`;

const UserImageWrapper = styled.section`
  ${tw`
  relative flex items-center justify-center

  `}
`;
const UserImage = styled.img`
  ${tw`
  shadow-xl rounded-full h-auto  border-none items-center align-middle -m-16 -ml-20 lg:-ml-16 max-w-[150px]

  `}
`;
const FollowContainer = styled.div`
  ${tw`
w-full lg:text-right lg:self-center flex
  `}
`;

const FollowWrapper = styled.div`
  ${tw`
py-6 px-3  mt-32 sm:mt-0 items-center flex
  `}
`;

const FollowButton = styled.button`
  ${tw`
bg-pink-500
active:bg-pink-600
uppercase
text-white
font-bold
hover:shadow-md
shadow
text-xs
px-4
py-2
rounded
outline-none
focus:outline-none
sm:mr-2
mb-1
ease-linear
transition-all
duration-150
  `}
`;

const SettingsWrapper = styled.button`
  ${tw`
items-center
outline-none
focus:outline-none
mr-3
ease-linear
transition-all
duration-150
  `}
`;

const Username = styled.div`
  ${tw`
text-4xl font-semibold leading-normal text-gray-700 mb-2

`}
`;
const LivesAt = styled.div`
  ${tw`
text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase

`}
`;

const WorksAt = styled.div`
  ${tw`
  mb-2 text-gray-600 mt-10
  `}
`;

const UserInfo = styled.div`
  ${tw`
mr-4 p-3 text-center

  `}
`;

const UserInfoText = styled.span`
  ${tw`
text-xl font-bold block uppercase tracking-wide text-gray-600

  `}
`;

const UserInfoDesc = styled.span`
  ${tw`
text-sm text-gray-400

  `}
`;

const UserBio = styled.p`
  ${tw`
  mb-4 text-lg leading-relaxed text-gray-700

  `}
`;

function ProfileTop({ setIsSettingsModalOpen, isSettingsModalOpen }) {
  console.log(isSettingsModalOpen);
  return (
    <ProfileContainer>
      {/* // cover photo */}
      <ProfileWrapper>
        <CoverPhotoWrapper
          style={{
            backgroundImage: `url("https://media.istockphoto.com/id/859936778/photo/granda-with-granddaughter.jpg?s=612x612&w=0&k=20&c=_-IpUhzphlWfw8vSJ5dORz4uk3CqAta3juaP7H-CN6E=")`,
          }}
        >
          {/* <BlackOverlay /> */}
        </CoverPhotoWrapper>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </ProfileWrapper>
      <Section>
        <div className="container mx-auto px-4">
          <div
            className="relative flex flex-col min-w-0 break-words bg-gray-100 md:rounded-bl-lg md:rounded-br-lg
                        bg-gradient-to-b from-gray-100 via-gray-100 to-gray-40 w-full mb-6  rounded-lg -mt-64"
          >
            <div className="px-6">
              <div className="flex flex-wrap items-center  justify-center">
                <UserImageContainer>
                  <UserImageWrapper>
                    {/* // profile photo */}
                    <UserImage
                      src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                      alt="User"
                    />
                  </UserImageWrapper>
                </UserImageContainer>
                <FollowContainer>
                  <FollowWrapper>
                    <SettingsWrapper
                      type="button"
                      onClick={() => setIsSettingsModalOpen(true)}
                    >
                      <BsFillGearFill icon="fa-solid fa-user" size={22} />
                    </SettingsWrapper>
                    <FollowButton type="button">Edit Profile</FollowButton>
                  </FollowWrapper>
                </FollowContainer>
                <div className="w-full   px-4 ">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <UserInfo>
                      <UserInfoText>22</UserInfoText>
                      <UserInfoDesc>Posts</UserInfoDesc>
                    </UserInfo>
                    <UserInfo>
                      <UserInfoText>10</UserInfoText>
                      <UserInfoDesc>Followers</UserInfoDesc>
                    </UserInfo>
                    <UserInfo>
                      <UserInfoText>89</UserInfoText>
                      <UserInfoDesc>Following</UserInfoDesc>
                    </UserInfo>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <Username>Humble Rashie</Username>
                <LivesAt>
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
                  Los Angeles, California
                </LivesAt>
                <WorksAt>
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                  Fullstack Programmer - Mechatronics Engineer
                </WorksAt>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <UserBio>
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </UserBio>
                    <a href="/" className="font-normal text-pink-500">
                      Add Bio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </ProfileContainer>
  );
}

export default ProfileTop;
