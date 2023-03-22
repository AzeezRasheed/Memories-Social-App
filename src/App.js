import React, { useState } from "react";
import Home from "./pages/home/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import ModalSettings from "./components/Modal/ModalSettings";
import ModalPost from "./components/Modal/ModalPost";

function App() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [commentModalPostOpen, setCommentModalPostOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <Profile
              isSettingsModalOpen={isSettingsModalOpen}
              setIsSettingsModalOpen={setIsSettingsModalOpen}
            />
          }
        />
        {/* <Route
          path="/p/rasheed/comments"
          element={
            <>
              <ModalPost
                isOpen={commentModalPostOpen}
                setIsOpen={setCommentModalPostOpen}
                // post={post}
                // currentUserId={currentUserId}
              />
            </>
          }
        /> */}
        {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<Reset />} /> */}
      </Routes>
      <ModalSettings
        isOpen={isSettingsModalOpen}
        setIsOpen={setIsSettingsModalOpen}
      />
    </>
  );
}

export default App;
