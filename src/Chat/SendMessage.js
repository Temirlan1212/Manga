import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import fire from "../fire";
import firebase from "firebase/compat/app";

const SendMessage = () => {
  const auth = fire.auth();
  const firestore = fire.firestore();
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    const { uid, photoURL } = auth.currentUser;

    await firestore.collectionGroup("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
  }

  return (
    <div>
      <form>
        <Input
          value={msg}
          placeholder="Message..."
          onChange={(e) => setMsg(e.target.value)}
        />
        <Button onClick={sendMessage}>Send</Button>
      </form>
    </div>
  );
};

export default SendMessage;
