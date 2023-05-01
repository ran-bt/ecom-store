import SignInForm from "../../components/signin-form/SignInForm";
import SignUpForm from "../../components/signup-form/SignUpForm";

import "./authenticationForm.scss";

const AuthenticationForm = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default AuthenticationForm;
