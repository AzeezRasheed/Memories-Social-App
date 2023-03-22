import React from "react";
import Modal from "./Modal";
import tw from "twin.macro";
import styled from "styled-components";
function ModalPostAction(props) {
  const Link = styled.a`
    ${tw`
  border-b 
  text-center
  py-3
  block
      `}
  `;

  return (
    <Modal {...props} size="xs">
      <ul className="w-full items-center  text-sm  md:px-0 cursor-pointer">
        <li className="text-red-600">
          <Link>Report</Link>
        </li>
        <li className="text-red-600">
          <Link>Unfollow</Link>
        </li>
        <li>
          <Link>Go to Post</Link>
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

export default ModalPostAction;
