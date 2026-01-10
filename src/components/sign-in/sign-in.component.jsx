import "./sign-in.styles.css";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import SubmitBtn from "../button/submit-button.component";
import { useNavigate } from "react-router";

const SignInComponent = () => {
  const navigate = useNavigate();

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div className="signin">
      <h1 className="text-3xl font-black text-center">Login</h1>
      <p className="text-center text-base">
        Login to use the face recognition app.
      </p>

      <div className="signin__formGroup">
        <div className="pb-2">
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            placeholder="Your email here"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            placeholder="Password"
          />
        </div>
      </div>
      <p className="text-center py-4">or</p>
      <div
        className="border px-2 py-1 rounded-md global-cursor-pointer global-transition-all hover:border-accent w-3/4 mx-auto text-center"
        onClick={logGoogleUser}
      >
        Sign in With Google Popup
      </div>
      <div className="py-4 w-3/4">
        <SubmitBtn text="Login" className="" />
        <p className="text-center pt-2">
          Don't have an account?{" "}
          <span
            className="global-cursor-pointer global-transition-all hover:text-accent underline font-bold "
            onClick={() => navigate("/sign-up")}
          >
            sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInComponent;
