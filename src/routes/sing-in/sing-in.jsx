import React from "react";
import {
  signInWithGooglePopup,
  createDocFromAuth,
} from "../../utils/firebase.utils";

const SingIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createDocFromAuth(response);
  };
  return (
    <div>
      <h2>sing-in</h2>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SingIn;
