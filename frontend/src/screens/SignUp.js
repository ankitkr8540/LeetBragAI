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

  const dispatch = useDispatch();
  const userSignUp = useSelector((state) => state.userRegister);
  const emailState = useSelector((state) => state.checkEmail);
  const leetCodeInfo = useSelector((state) => state.leetCode);

  const { emailLoading, emailError, emailData } = emailState;
  const { leetcodeInfoLoading, leetCodeInfoError } = leetCodeInfo;

  console.log("sign up info ", userSignUp);
  console.log("email state ", emailState);
  console.log("leetcode info ", leetCodeInfo);

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    setInputFieldErrorMessage("");
    setPasswordErrorMessage("");

    // check if all input fields are filled
    if (name && email && username && password && confirmPassword) {
      // check if the password is valid
      if (
        password.length === confirmPassword.length &&
        password === confirmPassword &&
        password.length >= 12 &&
        password.length >= 12
      ) {
        dispatch(checkUserEmail(email));
        dispatch(getUserInfo(username));

        if (
          !emailLoading &&
          emailError === "" &&
          !leetcodeInfoLoading &&
          leetCodeInfoError === ""
        ) {
          dispatch(register(name, email, username, password));
        }
        if (!leetcodeInfoLoading && leetCodeInfoError !== "") {
          setInputFieldErrorMessage("Please enter correct leetcode username");
        }
        if (!emailLoading && emailError !== "") {
          setInputFieldErrorMessage("Please enter valid email address");
        }
      }
      if (password !== confirmPassword) {
        setPasswordErrorMessage("Passwords do not match");
      }
      if (password === confirmPassword && password.length < 12) {
        setPasswordErrorMessage(
          "Please make sure password has at least 12 characters"
        );
      }
    } else {
      setInputFieldErrorMessage("Please fill in all fields");
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
          <LabelInputContainer className="mb-4">
            <Input
              id="confirm-password"
              placeholder="Confirm Password"
              type="password"
              className="text-slate-100"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </LabelInputContainer>
          {passwordErrorMessage && (
            <p className="text-red-500 text-sm">{passwordErrorMessage}</p>
          )}
          {inputFieldErrorMessage && (
            <p className="text-red-500 text-sm">{inputFieldErrorMessage}</p>
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
