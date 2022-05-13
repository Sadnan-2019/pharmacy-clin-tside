import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
import "./Register.css";
import Loading from "../Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  const registerHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    // console.log(email, password,name);
    event.target.reset();
    navigate("/");
  };

  if(loading){
    return <Loading></Loading>
  }

  const loginNavigate = () => {
    navigate("/login");
  };
  return (
    <div className="container">
      <h1 className="text-center my-4"> Registration</h1>
      <div className="row g-4 my-5">
        <div className="col-md-6 col-lg-6   ">
          <div className="p-3   text-light    bg-dark">
            <Form onSubmit={registerHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
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

              <input className=" btn btn-info" type="submit" value="Register" />
            </Form>
          </div>
        </div>

        <div className="  col-12 col-sm-12 col-md-6 col-lg-6  ">
          <div className=" login   ">
            <img
              src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="d-block    img-thumbnail   img-fluid"
              alt="..."
            />
            <div className="text  ">
              <div className="text-center  text-dark mt-2 rounded">
                Already account?
                <button className="btn btn-dark  ">
                  {" "}
                  <Link
                    onClick={loginNavigate}
                    to="/login"
                    className="text-center text-light  text-decoration-none  "
                  >
                    Please Login
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
