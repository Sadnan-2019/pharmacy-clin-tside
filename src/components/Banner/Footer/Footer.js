import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-parent">
      <footer className="   mt-4    footer">
        <div className="text-light bg-dark d-flex justify-content-between align-items-center ">
          <div className="">
            <div className=" ms-5 ">
              <h5>Address</h5>
              <span> Road no :5/a </span>
              <p>Dhanmondi,Dhaka 1205 </p>
            </div>
          </div>
          <div className=" ms-5 ">
            <h5>Address</h5>
            <span> Road no :5/a </span>
            <p>Dhanmondi,Dhaka 1205 </p>
          </div>
          <div className=" me-5 ">
            <h5>Address</h5>
            <span> Road no :5/a </span>
            <p>Dhanmondi,Dhaka 1205 </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
