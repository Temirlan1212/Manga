import React, { useEffect, useState, useRef } from "react";
// import { db } from "../fire";

import SignOut from "./SignOut";
import fire from "../fire";
import SendMessage from "./SendMessage";

const Chat = () => {
  const firestore = fire.firestore();
  console.log(firestore);
  const auth = fire.auth();

  const scroll = useRef();

  const [messages, setMessages] = useState([]);
  console.log(messages);

  useEffect(() => {
    firestore
      .collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div style={{ marginTop: "300px" }}>
      <SignOut />
      <SendMessage scroll={scroll} />
      {messages.map(({ id, text, photoURL, uid }) => (
        <div
          key={id}
          className={`msg ${
            uid === auth.currentUser.uid ? "sent" : "received"
          }`}
        >
          <img src={photoURL} alt="" />
          <p style={{ color: "black" }}>{text}</p>
        </div>
      ))}

      <div ref={scroll}></div>
    </div>
  );
};

export default Chat;
