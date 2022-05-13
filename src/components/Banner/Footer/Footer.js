import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-parent">
      <footer className="  text-light bg-dark  mt-4 d-flex  justify-content-around  align-items-center   footer">
        <div className="  ms-5 ">
          <span className="adress">
          <h6>Office address</h6>
          <p>Zero Building 49</p>
          <p> Road no : 5/a </p>
          <p>Dhanmondi,Dhaka 1205 </p>
          </span>
        </div>
        <div className="adress  ">
          <h6>Contact us</h6>
          <p>Mobile : 017000000</p>
          <p>Email : zero@gmail.com</p>
        </div>

        <div className="  ">
          <button className="btn btn-light">
            <a
              href="https://play.google.com/store/apps"
              className="text-dark google"
            >
              <i className="fab fa-google-play google  "></i>Get on Google play
            </a>
          </button>
          <br></br>
          <br></br>
          <button className="btn btn-light">
            <a href="https://www.apple.com/" className="text-dark google">
              <i class="fab fa-apple apple mx-1"></i>Get on Apple play
            </a>
          </button>
        </div>

      </footer>
      
    </div>
  );
};

export default Footer;
