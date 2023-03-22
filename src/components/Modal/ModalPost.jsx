import React, { useState } from "react";
import Modal from "./Modal";
import tw from "twin.macro";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import Memories3 from "../../assets/testing_images/Memories3.jpeg";
import { FaRegCommentDots } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive/SCREENS";

const ModalWrapper = styled.div`
  ${tw`
 flex
 flex-row
 w-full
 h-full
`}
`;

const Left = styled.div`
  ${tw`
w-3/5
h-full
items-center
`}
`;

const Right = styled.div`
  ${tw`
w-2/5
relative
pt-16

`}
`;

const RightTop = styled.div`
  ${tw`
absolute
top-0
w-full
p-3
flex
flex-row
border-b

`}
`;

const UserContainer = styled.div`
  ${tw`
flex flex-row gap-2 w-full  justify-between items-center 
`}
`;

const UserImage = styled.div`
  ${tw`
p-0.5 rounded-full
`}
`;

const Username = styled.span`
  ${tw`
 text-black font-bold text-sm w-full mr-2

`}
`;

const ThreeDotsContainer = styled.button`
  ${tw`
 text-black items-center cursor-pointer 
`}
`;

const Comments = styled.div`
  ${tw`
overflow-scroll
h-full
pb-48


  `}
`;

const PostContainer = styled.div`
  ${tw`
flex items-center justify-center bg-white w-full py-2 h-full rounded-lg
`}
`;

const Title = styled.div`
  ${tw`
text-black font-normal w-full 
`}
`;

const CommentWrapper = styled.div`
  ${tw`
flex
flex-row
p-3
  `}
`;

const UserCommentImage = styled.div`
  ${tw`

  `}
`;

const UserNameAndCommentWrapper = styled.div`
  ${tw`
grow
relative
  `}
`;

const CommentUsername = styled.span`
  ${tw`
font-medium
mr-2
`}
`;

const Comment = styled.span`
  ${tw`
px-4
text-sm
`}
`;

const RightBottom = styled.div`
  ${tw`
absolute
bottom-0
w-full
border-t
bg-white
`}
`;

const IconsContainer = styled.div`
  ${tw`
p-3
flex
flex-col
gap-2
text-2xl
w-full
`}
`;

const IconsWrapper = styled.div`
  ${tw`
flex-1
flex
flex-row
gap-2
`}
`;

const LikesContainer = styled.button`
  ${tw`
  flex  hover:text-slate-500
`}
`;

const CommentContainer = styled.button`
  ${tw`
  flex  hover:text-slate-500
`}
`;

const AmountOfLikesContainer = styled.div`
  ${tw`
text-black font-medium items-start  text-sm
`}
`;

const Date = styled.div`
  ${tw`
text-gray-500 uppercase text-xs tracking-wide 
`}
`;

const CommentInputContainer = styled.div`
  ${tw`
flex flex-row border-t gap-2 w-full py-2  items-center
`}
`;

const Emoji = styled.div`
  ${tw`

`}
`;
const Input = styled.input`
  ${tw`
w-full
rounded-full
bg-gray-100
px-2
py-2
outline-none
bg-white
placeholder:font-light

`}
`;

const PostButton = styled.button`
  ${tw`
flex  items-center text-blue-600 font-bold text-lg
`}
`;

function ModalPost(props) {
  const { isOpen, setIsOpen } = props;

  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiData, event) => {
    setInputStr((prevInput) => prevInput + event.emoji);
    setShowPicker(false);
  };

  const handlePostMessage = () => {
    console.log(inputStr);
    setInputStr("");
  };

  const isLargeScreen = useMediaQuery({ minWidth: SCREENS.lg });

  if (isLargeScreen) {
    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} size="lg">
        <ModalWrapper>
          <Left>
            <div className="flex flex-col w-full h-auto py-4 gap-2">
              <Title>
                <p className="gap-2 w-full h-full text-black text-semibold text-lg md:px-6 px-4  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  doloribus, optio est nihil blanditiis ducimus deserunt facere,
                  perspiciatis ipsum voluptatibus facilis porro numquam dolores
                  debitis ut quidem voluptates alias beatae!
                </p>
              </Title>
              <PostContainer>
                <img
                  src={Memories3}
                  alt="User Post"
                  className=" rounded-t-[5px] w-full h-auto object-cover "
                />
              </PostContainer>
            </div>
          </Left>
          <Right>
            <RightTop>
              <UserContainer>
                <div className="flex flex-row gap-2 text-center  items-center  ">
                  <UserImage>
                    <a
                      href="/"
                      className="block bg-white p-0.5 rounded-full cursor-pointer "
                    >
                      <img
                        src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                        alt="profile "
                        className="w-8 h-8 rounded-full "
                      />
                    </a>
                  </UserImage>

                  <div className="flex flex-row items-center justify-center flex-1">
                    <Username>Rasheed Azeez</Username>
                  </div>
                </div>

                <ThreeDotsContainer>
                  <BsThreeDots size={20} />
                </ThreeDotsContainer>
              </UserContainer>
            </RightTop>

            <Comments>
              <CommentWrapper>
                <UserCommentImage>
                  <img
                    src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                    alt="User"
                    className="rounded-full w-8 inline max-w-none"
                  />
                </UserCommentImage>
                <UserNameAndCommentWrapper>
                  <Comment>
                    <CommentUsername> Lukman</CommentUsername>
                    This is great
                  </Comment>
                </UserNameAndCommentWrapper>
              </CommentWrapper>
            </Comments>

            <RightBottom>
              <IconsContainer>
                <IconsWrapper>
                  <LikesContainer>
                    <FiHeart size={28} />
                  </LikesContainer>

                  <CommentContainer>
                    <FaRegCommentDots size={28} />
                  </CommentContainer>
                </IconsWrapper>

                <AmountOfLikesContainer>2000 likes</AmountOfLikesContainer>
                <Date>20 mins ago</Date>
              </IconsContainer>
              <CommentInputContainer>
                <div className="flex flex-1 flex-row w-full gap-2 items-center">
                  <Emoji onClick={() => setShowPicker(!showPicker)}>
                    <BsEmojiSmile />
                  </Emoji>
                  <Input
                    value={inputStr}
                    onChange={(e) => setInputStr(e.target.value)}
                    placeholder="Add a comment..."
                  />
                </div>
                {showPicker && (
                  <div className="absolute">
                    <Picker
                      onEmojiClick={onEmojiClick}
                      skinTone={SKIN_TONE_MEDIUM_DARK}
                    />
                  </div>
                )}

                <div className="flex items-center text-sm text-sky-500 font-medium ">
                  {inputStr && (
                    <PostButton onClick={handlePostMessage}>
                      <p>Post</p>
                    </PostButton>
                  )}
                </div>
              </CommentInputContainer>
            </RightBottom>
          </Right>
        </ModalWrapper>
      </Modal>
    );
  }

  return <></>;
}

export default ModalPost;
