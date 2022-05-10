import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from "../../firebase.init";
import './Register.css'

const Register = () => {
          const [
                    createUserWithEmailAndPassword,
                    user,
                    loading,
                    error,
                  ] = useCreateUserWithEmailAndPassword(auth);
          const navigate = useNavigate();

          const registerHandler=(event)=>{

                    event.preventDefault();
                    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    event.target.reset()
    navigate("/")
          }
         

          const loginNavigate=()=>{
                    navigate("/login");

          }
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
        <div className=" login  ">
         
            <img
              src="https://img.freepik.com/free-photo/wooden-spoon-filled-with-pills-stethoscope_23-2148439036.jpg?size=626&ext=jpg&ga=GA1.1.1622403396.1642791622"
              className="d-block    img-thumbnail   img-fluid"
              alt="..."
               
            />
            <div className="text  ">
              
              <p className="text-center  text-dark mt-2 rounded">
        Already account?
      <button className="btn btn-info  ">  <Link onClick={loginNavigate}
          to="/login"
          className="text-center   text-decoration-none  " >
          Please Login
        </Link></button>
      </p>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
