import { Carousel } from "react-bootstrap";
import React from "react";
import "./Banner.css"

const Banner = () => {
  return (
    <div>
      <Carousel className="text-dark">
      <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 banner"
            src="https://images.unsplash.com/photo-1579154392128-bf8c7ebee541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />
          <Carousel.Caption className=" ">
          <h3>Our Pharmacy Manegment </h3>
            <p>We are good for manegment</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img 
            className="d-block w-100  banner"
            src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="">
            <h3>Our Pharmacy Manegment </h3>
            <p>We are good for manegment</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 banner"
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h3>Our Pharmacy Manegment </h3>
            <p>We are good for manegment</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
          <h3>Our Pharmacy Manegment </h3>
            <p>We are good for manegment</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default Banner;
