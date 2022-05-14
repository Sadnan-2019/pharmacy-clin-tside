import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

import auth from "../../firebase.init";
import "./Login.css";
import Loading from "../Loading/Loading";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [currentEmail, setcurrentEmail] = useState("");
  let errorMessage;
  const location = useLocation();

  const [signInWithEmailAndPassword, user, emailloading, emailerror] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, errorrReset] =
    useSendPasswordResetEmail(auth);

  const [signInWithGoogle, userGoogle, loading, error] =
    useSignInWithGoogle(auth);
  // if (emailerror) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //     </div>
  //   );
  // }
  if (emailloading || sending || loading) {
    return <Loading></Loading>;
  }
  if (userGoogle) {
    navigate("/");
  }
  if (error) {
    errorMessage = (
      <div>
        <p className="text-danger">Error : {error.message}</p>
      </div>
    );
  }
  let from = location.state?.from?.pathname || "/";
  if (user) {
    // navigate("/");
    navigate(from, { replace: true });
  }

  const loginHandler = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email, password);
    await signInWithEmailAndPassword(email, password);

    const { data } = await axios.post(
      "https://radiant-reef-89107.herokuapp.com/login",
      { email }
    );
    // console.log(data)
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  const handleBluremail = (event) => {
    const email = event.target.value;
    setcurrentEmail(email);
  };
  const handleForget = async () => {
    if (currentEmail) {
      // const email = event.current.value;
      await sendPasswordResetEmail(currentEmail);
      toast("send mail");
    }
  };

  const registerNavigate = () => {
    navigate("/registration");
  };
  return (
    <div className="container">
      <h1 className="text-center my-4"> Login</h1>
      <div className="row g-4 my-5">
        <div className="col-md-6 col-lg-6   ">
          <div className="p-4   text-light rounded   bg-dark">
            <Form onSubmit={loginHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onBlur={handleBluremail}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </Form.Group>

              <input className=" btn btn-info" type="submit" value="Login" />
            </Form>
            {errorMessage}
            <div className="d-flex justify-content-between align-items-center">
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-info my-2  "
              >
                SignWithGoogle
              </button>
              <button
                onClick={() => handleForget()}
                className="btn btn-info my-2  "
              >
                Forget Password
              </button>
            </div>
          </div>
        </div>

        <div className="  col-12 col-sm-12 col-md-6 col-lg-6  ">
          <div className=" login  ">
            <img
              src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="d-block    img-thumbnail   img-fluid"
              alt="..."
            />
            <div className="text  ">
              <p className="text-center   mt-2 rounded">
                If you visit first time?
                <button className="btn btn-dark  ">
                  {" "}
                  <Link
                    to="/registration"
                    onClick={registerNavigate}
                    className="text-center text-light   text-decoration-none  "
                  >
                    Please Register
                  </Link>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
