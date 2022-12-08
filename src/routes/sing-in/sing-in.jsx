import SignUpForm from "../../components/sign-up/signUpForm.component";
import SignInForm from "../../components/sign-in/SignInForm.component";

import "./sing-in.style.scss";

// import { getRedirectResult } from "firebase/auth";

const SingIn = () => {
  // making sure the app doesn't remount
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       const userRef = createDocFromAuth(response.user);
  //     }
  //   }, []);

  return (
    <div className="sing-in-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SingIn;
