import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createDocFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/Form-Input.component";
import Button from "../button/Button.component";

import "./singUpForm.style.scss";

const defaultState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultState);

  const { userName, email, password, confirmPassword } = formFields;
  const handleFormInput = (ev) => {
    const { name, value } = ev.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(formFields);
  };

  const resetFormFields = () => {
    setFormFields(defaultState);
  };

  const submitHandler = async (ev) => {
    ev.preventDefault();
    if (password !== confirmPassword) {
      alert("Your passwords do not match!");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userData = await createDocFromAuth(response, {
        displayName: userName,
      });

      resetFormFields();
      //   console.log(userData);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user! This email is already in use");
      }
      console.error(error);
    }
  };

  return (
    <div className="sing-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with you email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Username"
          name="userName"
          type="text"
          value={userName}
          required
          onChange={handleFormInput}
        />
        <FormInput
          label="E-mail"
          name="email"
          type="email"
          value={email}
          required
          onChange={handleFormInput}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          required
          onChange={handleFormInput}
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          onChange={handleFormInput}
        />
        <Button>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
