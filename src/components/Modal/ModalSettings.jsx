import React from "react";
import Modal from "./Modal";
import tw from "twin.macro";
import styled from "styled-components";

const Link = styled.a`
  ${tw`
border-b 
text-center
py-3
block
    `}
`;

function ModalSettings(props) {
  return (
    <Modal {...props} size="xs">
      <ul className="w-full items-center  text-sm  md:px-0 cursor-pointer">
        <li>
          <Link>Change Password</Link>
        </li>
        <li>
          <Link>Edit Profile</Link>
        </li>
        <li>
          <Link>Log Out</Link>
        </li>
        <li>
          <span
            onClick={() => props.setIsOpen(false)}
            className="text-center items-center block  py-3 "
          >
            Cancel
          </span>
        </li>
      </ul>
    </Modal>
  );
}

export default ModalSettings;
