import { useState } from "react";
import {
  createDocFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase.utils";

import FormInput from "../form-input/Form-Input.component";
import Button from "../button/Button.component";

import "./SignInForm.style.scss";

const defaultState = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultState);

  const { email, password } = formFields;
  const handleFormInput = (ev) => {
    const { name, value } = ev.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(formFields);
  };

  const logInGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    // console.log(response);
    const userDocRef = await createDocFromAuth(response);
  };

  const resetFormFields = () => {
    setFormFields(defaultState);
  };

  const submitHandler = async (ev) => {
    ev.preventDefault();

    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password!");
          break;
        case "auth/user-not-found":
          alert("Incorrect Email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sing-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="E-mail"
          name="email"
          type="email"
          value={email}
          required
          onChange={handleFormInput}
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          value={password}
          required
          onChange={handleFormInput}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logInGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
