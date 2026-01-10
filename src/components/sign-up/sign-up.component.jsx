import "./sign-up.styles.css";
import { useState } from "react";

const defaultSignUpForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpComponent = () => {
  const [formFields, setFormFields] = useState(defaultSignUpForm);
  const { name, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return <div>SignUpComponent</div>;
};

export default SignUpComponent;
