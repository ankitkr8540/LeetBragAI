import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LabelInputContainer from "../components/LabelInputContainer";
import { login } from "../actions/userAction";
import { Input } from "../components/ui/Input";
import { createPortal } from "react-dom";

const LoginScreen = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const leetCode_info = useSelector((state) => state.leetCode.leetCode_info);
  console.log(leetCode_info.username);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
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
        <h2 className="font-bold md:text-xl text-neutral-200">Welcome Back</h2>
        <p className="md:text-sm max-w-sm mt-2 text-neutral-300 text-[12px]">
          Sign In To LeetBragAI
        </p>

        <form className="my-8" onSubmit={submitHandler}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Input
                id="username"
                placeholder="Enter Leetcode Username"
                className="text-slate-100"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-2">
            <Input
              id="password"
              placeholder="Enter Password"
              type="password"
              value={password}
              className="text-slate-100"
              onChange={(e) => setPassword(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <button className="text-slate-100 text-sm text-left ml-1">
              Forgot Password?
            </button>
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn bg-slate-100
            block w-full text-slate-800
            rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
            dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign In &rarr;
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
  // <FormContainer>
  //   <h1>Sign In</h1>
  //   {loading && <h1>Loading...</h1>}
  //   <Form onSubmit={submitHandler}>
  //     <Form.Group controlId="username">
  //       <Form.Label>Enter Username</Form.Label>
  //       <Form.Control
  //         type="text"
  //         placeholder="Enter Leetcode Username"
  //         value={username}
  //         onChange={(e) => setUsername(e.target.value)}
  //       ></Form.Control>
  //     </Form.Group>

  //     <Form.Group controlId="password">
  //       <Form.Label>Enter Password</Form.Label>
  //       <Form.Control
  //         type="password"
  //         placeholder="Enter Password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       ></Form.Control>
  //     </Form.Group>
  //     <Row className="py-2">
  //       <Col>
  //         <Button type="submit" variant="primary">
  //           Sign In
  //         </Button>
  //       </Col>
  //     </Row>
  //   </Form>
  // </FormContainer>
};

export default LoginScreen;
