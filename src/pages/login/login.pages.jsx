import "./login.styles.css";
import { useEffect } from "react";
import { useLocation } from "react-router";

import SignInComponent from "../../components/sign-in/sign-in.component";

import LoginImage from "../../assets/images/login-image.jpg";
import SignUpComponent from "../../components/sign-up/sign-up.component";

const LoginPages = () => {
  const location = useLocation();

  const isSignUp = location.pathname === "/sign-up";

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  return (
    <div className="login base-class">
      <div
        className="login__imageContainer"
        style={{ backgroundImage: `url(${LoginImage})` }}
      ></div>
      <div className="login__loginContainer ">
        <h1 className="text-2xl font-black py-2">Logo</h1>

        <div className="overflow-hidden grow">
          {isSignUp ? <SignUpComponent /> : <SignInComponent />}
        </div>

        <h1 className="text-sm py-1">Built by Leoni Angela</h1>
      </div>
    </div>
  );
};

export default LoginPages;
