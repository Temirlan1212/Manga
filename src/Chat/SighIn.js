import { Button } from "@mui/material";
import React from "react";
import fire from "../fire";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SighIn = () => {
  const auth = fire.auth();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    // auth.signInWithPopup(provider);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user, "user");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, "error Message");
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <Button onClick={signInWithGoogle} sx={{ marginTop: "100px" }}>
        Sign In with Google
      </Button>

      <Button onClick={() => auth.signOut}> Sign Out</Button>
    </div>
  );
};

export default SighIn;
