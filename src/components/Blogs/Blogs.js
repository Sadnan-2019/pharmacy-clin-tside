import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h3 className="py-4 fw-bolder text-center">Answer my question</h3>
          <div className="col-sm-12 col-md-6 col-lg-6 mt-5  text-light rounded">
            <div className="p-4 rounded bg-dark">
              <h3> Difference between javascript and nodejs?</h3>

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
          <div className="col-sm-12 col-md-6 col-lg-6 mt-5  text-light rounded">
            <div className="p-4 rounded bg-dark">
              <h3> Differences between sql and nosql databases?</h3>

              <span className=" fw-bolder text-align-justify">SQL:</span>
              <p>
                Sql is structures query language.Sql database are vertically
                scalable.Sql database are table based. Sql databases are better
                for multi-row transactions. It is best for anlytical queires.Sql
                database have predifined fixed schema. Tables are fixed row and
                columns. Mysql, Oracle, etc.
              </p>
              <span className=" fw-bolder ">No SQL:</span>
              <p className=" align-justify">
                No sql databases are horixontally scalable.No sql databases are
                document key value graphs or wide column stores.No Sql is better
                for unstructured data like JSON.No sql is generally faster than
                sql.No sql databse have dynamic schema. Mongo DB,Bigtable, etc
              </p>
            </div>
          </div>
          <div className="col-sm-12 mx-auto col-md-6 col-lg-6 mt-5  text-light rounded">
            <div className="p-4 rounded  bg-dark">
              <h3> What is the purpose of jwt and how does it work ?</h3>

              <p>
                JWT JSON web token is mostly used for user authorization. it's
                popular for microservice. Accordingly, RFC 7519 when exchanging
                information jwt creates a structure like the Ecma script created
                standard for javascript. JWT has a three-part header, payload,
                and signature. when a user requested from clint side then jwt
                checking its valid user or not. Find the valid user checking by
                access token storage in session or local storage then the token
                is valid to access done otherwise unauthorized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
