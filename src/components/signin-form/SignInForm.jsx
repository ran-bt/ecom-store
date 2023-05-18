import { useState } from "react";
import {
  createUserDocfromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./signInForm.scss";

// will be the initial state of the form fields below

const defaultFormFeilds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFeilds);

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => setFormFields(defaultFormFeilds);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("account not found. please try again");
          break;
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>sign in with your email and password</span>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Email"
          type="email"
          required
          onChange={(event) => {
            handleChange(event);
          }}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={(event) => {
            handleChange(event);
          }}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button onClick={signInWithGoogle} buttonType="google" type="button">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
