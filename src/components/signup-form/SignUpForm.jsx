import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocfromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./signUpForm.scss";

// will be the initial state of the form fields below
const defaultFormFeilds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFeilds);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFeilds);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // confirm that the password matches
    if (password !== confirmPassword) {
      alert("your passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocfromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("there is a user error", error.message);
      }
    }

    // check to see if the user was auth with email and password

    //create a user document
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account</h2>
      <span>sign up with your email and password</span>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="DisplayName"
          type="text"
          required
          onChange={(event) => {
            handleChange(event);
          }}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={(event) => {
            handleChange(event);
          }}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
