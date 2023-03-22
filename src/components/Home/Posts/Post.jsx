import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BsThreeDots } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
// import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
// import { FcLike } from "react-icons/fc";
// import Memories1 from "../../../assets/testing_images/Memories1.jpeg";
// import Memories2 from "../../../assets/testing_images/Memories2.jpeg";
import Memories3 from "../../../assets/testing_images/Memories3.jpeg";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";
import ModalPostAction from "../../Modal/ModalPostAction";
import ModalPost from "../../Modal/ModalPost";

const Container = styled.div`
  ${tw`
flex flex-col gap-2 items-start bg-white w-full   rounded-lg p-4
`}
`;

const UserContainer = styled.div`
  ${tw`
flex flex-row gap-2 w-full  justify-between items-center md:px-4
`}
`;

const PostContainer = styled.div`
  ${tw`
flex items-center justify-center bg-white w-full md:px-4 py-2 h-full rounded-lg
`}
`;

const IconsContainer = styled.div`
  ${tw`
  flex items-start  gap-4 flex-row
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

const Comment = styled.div`
  ${tw`
  text-black font-normal gap-2 w-full 
`}
`;

const Title = styled.div`
  ${tw`
  text-black font-normal gap-2 w-full 
`}
`;

const NumCommentsContainer = styled.button`
  ${tw`
  text-gray-400 cursor-pointer text-[14px] text-start font-medium items-start
`}
`;

const CommentInputContainer = styled.div`
  ${tw`
`}
`;

const UserImage = styled.div`
  ${tw`
  bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full
`}
`;

const Username = styled.span`
  ${tw`
 text-black font-bold text-sm w-full mr-2

`}
`;

const PostCreatedAtDate = styled.h2`
  ${tw`
 text-gray-500 text-sm  w-[80px]
`}
`;

// const Dot = styled.h2`
//   ${tw`
//  text-gray-400 text-[20px] text-center items-center
// `}
// `;

const ThreeDotsContainer = styled.button`
  ${tw`
 text-black items-center cursor-pointer 
`}
`;

const AmountOfLikesContainer = styled.div`
  ${tw`
text-black items-start  font-bold text-sm
`}
`;

const EmojiWrapper = styled.div`
  ${tw`
flex flex-row gap-2 w-full  justify-center items-center 
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
function Post() {
  const [showMore, setShowMore] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [commentModalPostOpen, setCommentModalPostOpen] = useState(false);

  const onEmojiClick = (emojiData, event) => {
    setInputStr((prevInput) => prevInput + event.emoji);
    setShowPicker(false);
  };

  const handlePostMessage = (message) => {
    console.log(inputStr);
    setInputStr("");
  };
  const text =
    "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae itaque beatae voluptatum facilis nulla repellat consequatur ipsam libero accusantium. Facere voluptates sunt molestias quidem ipsum dicta accusantium aut quam!    ";
  const shortenWord = (text) => {
    return text.substring(0, 120);
  };

  return (
    <Container>
      <>
        <ModalPost
          isOpen={commentModalPostOpen}
          setIsOpen={setCommentModalPostOpen}
          // post={post}
          // currentUserId={currentUserId}
        />
      </>
      {postModalOpen && (
        <ModalPostAction isOpen={postModalOpen} setIsOpen={setPostModalOpen} />
      )}
      <UserContainer>
        <div className="flex flex-row gap-2 text-center  items-center  ">
          <UserImage className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full  ">
            <a
              href="/"
              className="block bg-white p-0.5 rounded-full cursor-pointer "
            >
              <img
                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                alt="profile "
                className="w-6 h-6 rounded-full "
              />
            </a>
          </UserImage>

          <div className="flex flex-row items-center justify-center flex-1">
            <Username>Rasheed Azeez</Username>

            <RxDotFilled size={10} className="mr-2" />

            <PostCreatedAtDate>43 m</PostCreatedAtDate>
          </div>
        </div>

        <ThreeDotsContainer onClick={() => setPostModalOpen(true)}>
          <BsThreeDots size={20} />
        </ThreeDotsContainer>
      </UserContainer>
      <Title>
        <p className="gap-2 w-full h-full text-black text-semibold text-lg md:px-6 px-4  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          doloribus, optio est nihil blanditiis ducimus deserunt facere,
          perspiciatis ipsum voluptatibus facilis porro numquam dolores debitis
          ut quidem voluptates alias beatae!
        </p>
      </Title>
      <PostContainer>
        <img
          src={Memories3}
          alt="User Post"
          className=" rounded-t-[5px] w-full h-auto object-cover "
        />
      </PostContainer>
      <div className="flex flex-col w-full  gap-2 px-4">
        <IconsContainer>
          {/* {like? <FcLike/> : <FcLike/> }   */}
          {/* <FcLike /> */}
          <LikesContainer>
            <FiHeart size={28} />
          </LikesContainer>

          <CommentContainer onClick={() => setCommentModalPostOpen(true)}>
            <FaRegCommentDots size={28} />
          </CommentContainer>
        </IconsContainer>
        <AmountOfLikesContainer>2000 likes</AmountOfLikesContainer>

        <Comment>
          <p className="gap-2 w-full h-full   ">
            <Username menu>Azeez Rasheed</Username>
            {showMore ? text : shortenWord(text)}
            <span
              className="text-slate-500 text-sm cursor-pointer  ml-3"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {showMore ? "less" : "... more "}
            </span>
          </p>
        </Comment>

        <NumCommentsContainer>View all 20 comments</NumCommentsContainer>
        <CommentInputContainer>
          <EmojiWrapper>
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

            <div className="block items-center p-2">
              {inputStr && (
                <PostButton onClick={handlePostMessage}>
                  <p>Post</p>
                </PostButton>
              )}
            </div>
          </EmojiWrapper>
        </CommentInputContainer>
      </div>
    </Container>
  );
}

export default Post;
