import React from "react";
import Banner from "../Banner/Banner";

const Upcoming = () => {
  return (

          
    <div>
              <Banner></Banner>


<h3 className="fw-bolder text-center my-5">Our Upcoming Product</h3>





<div className="container">
  <div className="row">


  <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col  " data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="5000"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out">
    <div className="card">
      <img src="https://www.beltmannlogistics.com/wp-content/uploads/2019/01/medical-equipment-transportation.png" 
      className="card-img-top" alt="..."/>
     
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.plm.automation.siemens.com/media/global/en/IDC_Digital_Layer_Image_MDP_2018_tcm27-56987.jpg" className="card-img-top" alt="..."/>

    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.designworldonline.com/wp-content/uploads/2014/09/home-medical-device.jpg" className=" card-img-top" alt="..."/>
      
    </div>
  </div>
  <div className="col" data-aos="fade-left"
          data-aos-offset="300"
          data-aos-delay="5000"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out">
    <div className="card">
      <img src="https://thehealthcaretechnologyreport.com/wp-content/uploads/2019/06/medical_devices.jpg" className=" card-img-top" alt="..."/>
      
    </div>
  </div>
</div>
  </div>
</div>







      <div className="container-fluid" style={{backgroundColor :"#5B96B6"}}>
        
        <div className="row  my-5  g-4 " >
          <div
            className="col-md-6 col-lg-6   "
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
          >
            <div className="p-5 text-light my-5                 ">
              <h3>Best Service</h3>
              <h6
                data-aos="fade-up-right"
                data-aos-offset="300"
                data-aos-delay="5000"
                data-aos-duration="3000"
                className="fw-bloder h5 "
              >
                We provide best & good service and we proved customer 
                satisfection.
              </h6>

              <h3 className=" ">Pharmacy Care Center</h3>

              <button className="btn btn-light fw-bolder my-4 rounded-pill p-2">Click more</button>
              <button className="btn btn-light fw-bolder my-4 rounded-pill ms-3 p-2">Book now</button>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-6 text-light"
            data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="p-5  my-5    ">
              <img
                src="https://acitrainings.com/wp-content/uploads/2016/03/Picture1-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
