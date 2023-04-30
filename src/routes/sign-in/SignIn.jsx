import SignUpForm from "../../components/signup-form/SignUpForm";
import {
  signInWithGooglePopup,
  createUserDocfromAuth,
} from "../../utils/firebase/firebase.utils";

import "./signIn.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocfromAuth(user);
  };

  return (
    <div>
      <h1>Signin page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
