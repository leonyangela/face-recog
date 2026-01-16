import "./sign-in.styles.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithEmailAndPass,
} from "../../utils/firebase/firebase.utils";

import { useAuthStore } from "../../store";

import SubmitBtn from "../button/submit-btn/submit-btn.component";

import GoogleIcon from '@mui/icons-material/Google';

const defaultSignInForm = {
  email: "",
  password: "",
};

const SignInComponent = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultSignInForm);
  const [errorMessage, setErrorMessage] = useState({});
  const { email, password } = formFields;

  const setUser = useAuthStore((state) => state.setUser);

  const resetFormFields = () => {
    setFormFields(defaultSignInForm);
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);

    setUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    });

    navigate("/");
  };

  const validateField = (name, value, formFields) => {
    let error = "";

    switch (name) {
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email address";
        }
        break;

      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const isFormValid = () => {
    const newErrors = {};

    Object.keys(formFields).forEach((key) => {
      const error = validateField(key, formFields[key], formFields);
      if (error) newErrors[key] = error;
    });

    setErrorMessage(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields((prev) => {
      const updatedFields = { ...prev, [name]: value };

      // live validation
      setErrorMessage((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value, updatedFields),
      }));

      return updatedFields;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) return;

    try {
      const { user } = await signInWithEmailAndPass(email, password);

      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      });

      resetFormFields();
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          setErrorMessage({ password: "incorrect password for email" });
          break;
        case "auth/user-not-found":
          setErrorMessage({ email: "no user associated with this email" });
          break;
        case "auth/invalid-credential":
          setErrorMessage({ email: "no user associated with this email" });
          break;
        default:
          console.log("user sign in error", error.code);
      }
    }
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
            onChange={handleChange}
            value={email}
          />
          <p className="signin__errorMessage">{errorMessage?.email}</p>
        </div>
        <div className="pb-2">
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
          <p className="signin__errorMessage">{errorMessage?.password}</p>
        </div>
        <SubmitBtn text="Login" onClick={handleSubmit} />
      </div>
      <p className="text-center py-4">or</p>
      <div
        className="border px-2 py-1 rounded-md global-cursor-pointer global-transition-all hover:border-accent w-3/4 mx-auto text-center flex justify-center items-center"
        onClick={logGoogleUser}
      >
        <GoogleIcon className="pr-1" />Sign in With Google
      </div>
      <div className="py-4 w-3/4">
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
