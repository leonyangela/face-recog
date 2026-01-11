import "./sign-up.styles.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  createUserWithEmailAndPass,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import SubmitBtn from "../button/submit-btn/submit-btn.component";

const defaultSignUpForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpComponent = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultSignUpForm);
  const [errorMessage, setErrorMessage] = useState({});
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultSignUpForm);
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

      // also revalidate confirmPassword if password changes
      if (name === "password") {
        setErrorMessage((prevErrors) => ({
          ...prevErrors,
          confirmPassword: validateField(
            "confirmPassword",
            updatedFields.confirmPassword,
            updatedFields
          ),
        }));
      }

      return updatedFields;
    });
  };

  const validateField = (name, value, formFields) => {
    let error = "";

    switch (name) {
      case "displayName":
        if (!value.trim()) error = "Name is required";
        break;

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

      case "confirmPassword":
        if (!value) {
          error = "Confirm password is required";
        } else if (value !== formFields.password) {
          error = "Passwords do not match";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) return;

    try {
      const { user } = await createUserWithEmailAndPass(email, password);

      await createUserDocFromAuth(user, { displayName });

      resetFormFields();
      navigate("/sign-in");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage({ email: "Email is already in use" });
      } else {
        console.log("user creation error", error);
      }
    }
  };

  return (
    <div className="signup">
      <h1 className="text-3xl font-black text-center">Login</h1>
      <p className="text-center text-base">
        Signup to use the face recognition app.
      </p>

      <div className="signup__formGroup">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            className="form-input"
            placeholder="Your name here"
            onChange={handleChange}
            value={displayName}
          />

          <p className="signup__errorMessage">{errorMessage?.displayName}</p>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            placeholder="Your email here"
            onChange={handleChange}
            value={email}
          />

          <p className="signup__errorMessage">{errorMessage?.email}</p>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
          <p className="signup__errorMessage">{errorMessage?.password}</p>
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="form-input"
            placeholder="confirm password"
            onChange={handleChange}
            value={confirmPassword}
          />
          <p className="signup__errorMessage">
            {errorMessage?.confirmPassword}
          </p>
        </div>
        <SubmitBtn text="Submit" className="mt-4" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default SignUpComponent;
