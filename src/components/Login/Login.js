import React from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const loginHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    navigate('/')
  };

  const registerNavigate = () => {
    navigate("/registration");
  };
  return (
    <div className="container">
      <h1 className="text-center my-4"> Login</h1>
      <div className="row g-4 my-5">
        <div className="col-md-6 col-lg-6   ">
          <div className="p-3   text-light    bg-dark">
            <Form onSubmit={loginHandler}>
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

              <input className=" btn btn-info" type="submit" value="Login" />
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
                If you visit first time?<br></br>
                <button className="btn btn-info  ">
                  {" "}
                  <Link
                    to="/registration"
                    onClick={registerNavigate}
                    className="text-center   text-decoration-none  "
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
