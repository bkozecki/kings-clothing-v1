import Reac from "react";
import SignUpForm from "../../components/sign-up/signUpForm.component";

// import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createDocFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase.utils";

const SingIn = () => {
  // making sure the app doesn't remount
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       const userRef = createDocFromAuth(response.user);
  //     }
  //   }, []);
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createDocFromAuth(response);
  };

  return (
    <div>
      <h2>sing-in</h2>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SingIn;
