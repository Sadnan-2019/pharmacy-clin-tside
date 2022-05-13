import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mt-5 bg-dark text-light rounded">
            <div className="">
              <h3> Difference between javascript and nodejs</h3>

              <span className=" fw-bolder text-align-justify">Javascript:</span>
              <p>
                Javascript is a programming language used for scriptwriting.
                Javascript only runs in the browser. It's used for the clint
                side. Javascript is available enough to create HTML and play
                with DOM. Frontend development used for javascript.Javascript
                framework RamdaJs, TypedJs, etc.
              </p>
              <span className=" fw-bolder ">Node JS:</span>
              <p className=" align-justify">
                Node js is a cross-platform open-source run time environment
                that is helpful in executing javascript code on the server.
                Generally is for server-side. Javascript community represented
                by node project.Node js is only supported by the v8 engine. It
                uses c++ and js. ALL modules are to be imported from npm.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div>
              <h3> Difference between javascript and nodejs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
