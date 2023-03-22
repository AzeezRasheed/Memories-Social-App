import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const Component = styled.div`
  ${tw`
flex flex-col w-full items-center bg-white rounded-lg  max-w-4xl
`}
`;

const InnerComponent = styled.div`
  ${tw`
flex flex-col justify-between p-4 gap-2 w-full items-center 
`}
`;

const AvatarComponent = styled.div`
  ${tw`
  bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full
`}
`;

const Avatar = styled.div`
  ${tw`   h-full overflow-hidden rounded-full  block bg-white p-0.5  cursor-pointer `}
`;

const TopRow = styled.div`
  ${tw`
flex flex-row gap-2 w-full items-center
`}
`;

const Input = styled.input`
  ${tw`
  py-2 w-full flex-1  px-2 rounded-lg bg-gray-100  placeholder:font-light
  `}
`;

const BottomContainer = styled.div`
  ${tw`
flex flex-wrap items-center gap-4 lg:gap-10 justify-center  mb-2
`}
`;

const BottomItem = styled.button`
  ${tw`
  flex flex-row gap-0.5 justify-between items-center
  `}
`;

const BottomTitle = styled.p`
  ${tw`
  font-semibold capitalize  
  `}
`;

const PostBottomTitle = styled(BottomTitle)`
  ${tw` 
  text-green-500
  `}
`;

const VideoBottomTitle = styled(BottomTitle)`
  ${tw` 
  text-blue-500
  `}
`;

const LocationBottomTitle = styled(BottomTitle)`
  ${tw` 
  text-pink-400
  `}
`;

const PostBottom = styled.button`
  ${tw`
flex px-6 text-white py-2  items-center rounded-lg bg-orange-400 `}
`;
function Share() {
  return (
    <Component>
      <InnerComponent>
        <TopRow>
          <AvatarComponent>
            <Avatar>
              <img
                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                alt="user profile "
                className=" w-12 h-12  rounded-full "
              />
            </Avatar>
          </AvatarComponent>
          <Input placeholder="What's happening" />
        </TopRow>
        <BottomContainer>
          <BottomItem>
            <HiOutlinePhotograph size={26} className="text-green-500" />
            <PostBottomTitle>Photo</PostBottomTitle>
          </BottomItem>
          <BottomItem>
            <AiOutlinePlayCircle size={26} className="text-blue-500" />
            <VideoBottomTitle>Video</VideoBottomTitle>
          </BottomItem>
          <BottomItem>
            <GrLocation size={26} className="text-red-500" />
            <LocationBottomTitle>Location</LocationBottomTitle>
          </BottomItem>

          <PostBottom>Share</PostBottom>
        </BottomContainer>
      </InnerComponent>
    </Component>
  );
}

export default Share;
