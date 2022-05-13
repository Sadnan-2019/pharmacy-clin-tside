import React from "react";
import { Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  let errorMessage;
  const location = useLocation()

  const [signInWithEmailAndPassword, user, emailloading, emailerror] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, userGoogle, loading, error] = useSignInWithGoogle(auth);
  if (userGoogle) {
    navigate("/");
  }
  if (error || emailerror) {
     
          errorMessage = <div>
        <p className="text-danger">Error : {error.message}</p>
      </div>
     
  }
  let from = location.state?.from?.pathname || "/";
if(user){
  
  // navigate("/");
  navigate(from, { replace: true });

  
}

  const loginHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password)
    signInWithEmailAndPassword(email, password);
   
   
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
            {errorMessage}
            <div className="d-flex justify-content-center align-items-center">
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-info my-2  "
              >
                SignWithGoogle
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
