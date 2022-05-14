import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./InventoryItem.css"

const InventoryItem = ({ inventory }) => {
  const { _id, name, price, img, quantity, suppliername, shortdescription } =
    inventory;

  const navigate = useNavigate();
  

  const navigateInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
     
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 g-4 my-4">
        <div 
        className="card h-100 
          text-light">
          <img src={img} className="card-img-top img-fluid h-50 p-4" alt="..." />
          <div className="card-body   bg-dark text-light">
            <h5 className=" ">Name: {name}</h5>
            <h5 className=" ">Suppliername: {suppliername}</h5>
            <p>Price: ${price}</p>
            <p>quantity: {quantity}</p>
            <p className="card-text">Short-description: {shortdescription}</p>
          </div>
          <div className="card-footer">
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            <button
              className="btn btn-info"
              onClick={() => navigateInventoryDetail(_id)}
            >
              Update
            </button>
          </div>
        </div>
      </div>

     
     
  );
};

export default InventoryItem;
