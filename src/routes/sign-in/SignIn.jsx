import {
  signInWithGooglePopup,
  createUserDocfromGoogleAuth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocfromGoogleAuth(user);
  };

  return (
    <div>
      <h1>Signin page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
