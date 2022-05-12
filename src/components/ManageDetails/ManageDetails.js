import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useManage from "../../hooks/useManage";

const ManageDetails = ({ inventorys,IteamDelete }) => {

  const navigate = useNavigate();
  const navigateInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
   
  return (
    <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      <Table className=" responsive ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Suppliername</th>
            <th>Shortdescription</th>
          </tr>
          <tr></tr>
        </thead>
      
      <tbody>
        {inventorys.map((inventory) => (
          <tr key={inventory._id}>
            
            <td>{inventory.name}</td>
            <td>{inventory.quantity}</td>
            <td>{inventory.price}</td>
            <td>{inventory.suppliername}</td>
            <td>{inventory.shortdescription}</td>
            <td>
              <img className="img-fluid w-25" src={inventory.img} alt="" />
            </td>
            <td>
              <button
                className="btn btn-info"
                onClick={() => navigateInventoryDetail(inventory._id)}
              >
                Update
              </button>
              <button
                className="btn btn-danger ms-3"
                onClick={() => IteamDelete(inventory._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      </Table>
      </div>
    </div>
  </div>
  );
};

export default ManageDetails;
