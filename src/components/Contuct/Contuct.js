import React from "react";

const Clint = () => {
  return (
    <div>
      <section className="container">
        <div className="row py-5  ">
          <h1 className="text-center fw-bolder py-2">Contact us</h1>

          <div className="col-lg-6 col-md-6  py-5  ">
            <img src="https://img.theweek.in/content/dam/week/news/health/images/2019/9/3/drugs-medicine-capsule-medical-health-tablet.jpg"
             className="img-fluid rounded p-4 " alt="" />
          </div>
          <div className="col-md-6 col-lg-6 p-4 py-5 ">
            

            
            <form method="" className="py-2 bg-dark rounded p-4 text-light">
              <div className="mb-3">
                <label   className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label   className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill"
                  placeholder="Enter your mail"
                />
              </div>
              <div className="mb-3">
                <label   className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-pill  "
                  placeholder="Enter your password"
                />
              </div>

              <button type="submit"  className="btn  bg-light text-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clint;
