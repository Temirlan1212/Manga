import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "../Chat/Chat";
import SighIn from "../Chat/SighIn";
import fire from "../fire";

// import { auth } from "../fire";

const ChatPage = () => {
  const auth = fire.auth();

  const [user] = useAuthState(auth);
  return (
    <div style={{ marginTop: "100px" }}>{user ? <Chat /> : <SighIn />}</div>
  );
};

export default ChatPage;
