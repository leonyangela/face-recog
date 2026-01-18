import "./login.styles.css";
import { useEffect } from "react";
import { useLocation } from "react-router";

import SignInComponent from "../../components/sign-in/sign-in.component";

import LoginImage from "../../assets/images/login-image.jpg";
import SignUpComponent from "../../components/sign-up/sign-up.component";
import Logo from "../../components/logo/logo.component";
import BuildByComponent from "../../components/text/built-by.component";

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
        <Logo />

        <div className="overflow-hidden grow">
          {isSignUp ? <SignUpComponent /> : <SignInComponent />}
        </div>

        <div>
          <BuildByComponent />
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
