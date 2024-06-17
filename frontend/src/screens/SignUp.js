import React, { useState, useEffect } from "react";
import LabelInputContainer from "../components/LabelInputContainer";
import { Input } from "../components/ui/Input";
import { createPortal } from "react-dom";
import { register, checkUserEmail, getUserInfo } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const SignUp = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [inputFieldErrorMessage, setInputFieldErrorMessage] = useState("");
  const [emailFieldErrorMessage, setEmailFieldErrorMessage] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const userSignUp = useSelector((state) => state.userRegister);
  const emailState = useSelector((state) => state.checkEmail);
  const userLeetCodeInfo = useSelector((state) => state.leetCode);

  console.log("1 email state ", emailState);
  console.log("2 leetcode info ", userLeetCodeInfo);

  useEffect(() => {
    if (submitted && emailState.error) {
      setEmailFieldErrorMessage("Please enter valid email address");
    } else {
      setEmailFieldErrorMessage("");
    }
  }, [submitted, emailState.error]);

  useEffect(() => {
    if (
      submitted &&
      userLeetCodeInfo.leetCode_info &&
      userLeetCodeInfo.leetCode_info.errors
    ) {
      setUsernameErrorMessage("Please enter valid Leetcode username");
    } else {
      setUsernameErrorMessage("");
    }
  }, [submitted, userLeetCodeInfo.leetCode_info]);

  const validateInputFields = (
    name,
    email,
    username,
    password,
    confirmPassword
  ) => {
    if (!name || !email || !username || !password || !confirmPassword) {
      setInputFieldErrorMessage("Please fill in all fields");
      return false;
    }
    return true;
  };

  const validateEmailAddress = (email, emailState) => {
    dispatch(checkUserEmail(email));
    if (!emailState.loading && emailState.error) {
      return false;
    }
    return true;
  };

  const validateLeetCodeUsername = (username) => {
    dispatch(getUserInfo(username));
    if (
      !userLeetCodeInfo.loading &&
      userLeetCodeInfo.leetCode_info &&
      userLeetCodeInfo.leetCode_info.errors
    ) {
      return false;
    }
    return true;
  };

  const validatePassword = (password, confirmPassword) => {
    if (
      password.length !== confirmPassword.length ||
      password !== confirmPassword ||
      password.length < 12 ||
      confirmPassword.length < 12
    ) {
      setPasswordErrorMessage(
        "Please make sure passwords match and have at least 12 characters"
      );
      return false;
    }
    return true;
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    setInputFieldErrorMessage("");
    setEmailFieldErrorMessage("");
    setUsernameErrorMessage("");
    setPasswordErrorMessage("");
    setSubmitted(true);

    // check if all inputs are filled in, if not show input error message
    // check if email address is valid, if not show email error message
    // check if leetcode username is valid, if not show username error message
    // check if passwords are valid - match, >= 12, if not show password error message
    // it is possible user has multiple input errors at once, so errors in separate states

    // todo: check if username, name, email already exist in the DB. if so prompt user to sign in

    const areInputsValid = validateInputFields(
      name,
      email,
      username,
      password,
      confirmPassword
    );
    const isEmailValid = validateEmailAddress(email, emailState);
    const isLeetCodeUsernameValid = validateLeetCodeUsername(username);
    const arePasswordsValid = validatePassword(password, confirmPassword);

    if (
      areInputsValid &&
      isEmailValid &&
      isLeetCodeUsernameValid &&
      arePasswordsValid
    ) {
      dispatch(register(name, email, username, password));
      console.log("3 sign up info ", userSignUp);
    }
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 bg-slate-900 font-openSansMedium">
      <div className="max-w-md md:w-full w-3/4 mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input bg-slate-950 relative opacity-90">
        <button
          className="absolute top-2 right-2 text-white rounded-full px-2 py-1 text-sm"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="font-bold md:text-xl text-neutral-200">
          Welcome To LeetBragAI!
        </h2>
        <p className="text-neutral-600 md:text-sm max-w-sm mt-2 dark:text-neutral-300 text-[12px]">
          Please Sign Up With Your Email and Your Leetcode Username
        </p>

        <form className="my-8" onSubmit={handleSubmitSignUp}>
          <LabelInputContainer className="mb-4">
            <Input
              id="name"
              placeholder="Enter Your Name"
              type="text"
              className="text-slate-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Input
              id="email"
              placeholder="Enter Your Email"
              type="text"
              className="text-slate-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Input
              id="username"
              placeholder="Enter Leetcode Username"
              className="text-slate-100"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Input
              id="password"
              placeholder="Enter Password"
              type="password"
              className="text-slate-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
            <Input
              id="confirm-password"
              placeholder="Confirm Password"
              type="password"
              className="text-slate-100"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </LabelInputContainer>
          {inputFieldErrorMessage && (
            <p className="text-red-500 text-sm mb-3 ml-1">
              {inputFieldErrorMessage}
            </p>
          )}
          {passwordErrorMessage && (
            <p className="text-red-500 text-sm mb-3 ml-1">
              {passwordErrorMessage}
            </p>
          )}
          {emailFieldErrorMessage && (
            <p className="text-red-500 text-sm mb-3 ml-1">
              {emailFieldErrorMessage}
            </p>
          )}
          {usernameErrorMessage && (
            <p className="text-red-500 text-sm mb-3 ml-1">
              {usernameErrorMessage}
            </p>
          )}
          <button
            className="bg-gradient-to-br relative group/btn bg-slate-100
                block w-full text-slate-800
                rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
                dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign Up &rarr;
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default SignUp;
