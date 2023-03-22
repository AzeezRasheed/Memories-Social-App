import React, { Fragment } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { TbSquarePlus } from "react-icons/tb";
import { SCREENS } from "../responsive/SCREENS.js";
import { FaUserAlt } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Containers = styled.div`
  ${tw`

sticky
top-0
min-h-fit
bg-white
w-full
border
border-b-2
z-50
`}
`;

const Container = styled.div`
  ${tw`
flex
items-center
justify-center
w-full
p-1
py-2

`}
`;

const LogoContainer = styled.div`
  ${tw`
flex
items-center
justify-center
text-center
w-full
h-full
`}
`;

//would be changed to img later
const Logo = styled.div`
  ${tw`

text-center
`}
`;

const SearchContainer = styled.div`
  ${tw`
flex
items-center
justify-center
relative

`}

@media (max-width: ${SCREENS.sm}) {
    ${tw`
hidden
`}

`;

const Search = styled.input`
  ${tw`
pl-10
h-full
bg-gray-100 
outline-none
p-2
w-80
rounded-lg
flex-1
placeholder:font-light

`}
`;

const SearchLogo = styled.div`
  ${tw`
absolute
top-3
left-3
  `}
`;

const NavbarContainer = styled.ul`
  ${tw`
flex
flex-wrap
items-center
justify-center
w-full
gap-6
  `}
`;

const NavItem = styled.li`
  ${tw`
items-center
  `}
`;

const Avatar = styled.div`
  ${tw`    `}
`;
function Navbar() {
  return (
    <Containers>
      <Container>
        <div className="flex flex-row justify-between w-full max-w-5xl items-center">
          <LogoContainer>
            <Logo>Rasheed</Logo>
          </LogoContainer>

          <SearchContainer>
            <Search placeholder="search" />
            <SearchLogo>
              <AiOutlineSearch />
            </SearchLogo>
          </SearchContainer>

          <NavbarContainer>
            <NavItem>
              <a href="/">
                <AiFillHome size={30} />
              </a>
            </NavItem>
            <NavItem>
              <a href="/direct/inbox">
                <FaRegCommentDots size={24} />
              </a>
            </NavItem>
            <NavItem>
              <a href="/">
                <TbSquarePlus size={24} />
              </a>
            </NavItem>

            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="overflow-hidden rounded-full  block bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5  justify-center  cursor-pointer ">
                <img
                  src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                  alt="user profile "
                  className=" w-8 h-8 bg-white rounded-full "
                />
              </Menu.Button>

              {/* Use the `Transition` component. */}
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          // to={`/${data.me.username}`}
                          to={`/profile`}
                          className={
                            active
                              ? "bg-gray-100 text-gray-900 flex items-center flex-row  px-4 py-2 text-sm"
                              : "text-gray-700 flex flex-row  items-center px-4 py-2 text-sm"
                          }
                        >
                          <FaUserAlt icon="fa-solid fa-user" className="mr-3" />
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          // to={`/${data.me.username}`}
                          to={`/profile`}
                          className={
                            active
                              ? "bg-gray-100 text-gray-900 flex items-center flex-row  px-4 py-2 text-sm"
                              : "text-gray-700 flex flex-row  items-center px-4 py-2 text-sm"
                          }
                        >
                          <BsFillGearFill
                            icon="fa-solid fa-user"
                            className="mr-3"
                          />
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={
                            active
                              ? "bg-gray-100 text-gray-900 flex items-center flex-row gap-1 px-4 py-2 text-sm"
                              : "text-gray-700 flex flex-row gap-1 items-center px-4 py-2 text-sm"
                          }
                          href="/"
                          // onClick={() => signOut(client, navigate, logout)}
                        >
                          Log Out
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </NavbarContainer>
        </div>
      </Container>
    </Containers>
  );
}

export default Navbar;
