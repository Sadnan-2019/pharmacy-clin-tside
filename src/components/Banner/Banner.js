import { Carousel } from "react-bootstrap";
import React from "react";
import "./Banner.css"

const Banner = () => {
  return (
    <div>
      <Carousel className="text-dark">
      <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 banner"
            src="https://i.cbc.ca/1.6095971.1625826980!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/covid-mix-and-match-vaccines-20210618.jpg"
            alt="Third slide"
            data-aos="fade-up"
            // data-aos-offset="500"
            // data-aos-delay="500"
            // data-aos-duration="1000"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000"
           
          />
          <Carousel.Caption className=" ">
          <h3>Our Pharmacy Manegment </h3>
            <p>We are good for manegment</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img 
            className="d-block w-100  banner"
            src="https://globalcarehospital.com/wp-content/uploads/2020/04/arredi-farmacie-min-olcdbjm9lkfarlthxu7qceilefhwmv8ravp8czhnr4-1024x512.jpg"
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
