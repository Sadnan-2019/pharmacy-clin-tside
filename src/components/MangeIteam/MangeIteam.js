import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useManage from "../../hooks/useManage";
import ManageDetails from "../ManageDetails/ManageDetails";

const MangeIteam = () => {
  const [manages, setManage] = useManage();
  useEffect(() => {
    fetch(`http://localhost:5000/inventory`)
      .then((res) => res.json())
      .then((data) => setManage(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <Table className="table-responsive">
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
        </Table>

        {manages.map((inventory) => (
          <ManageDetails
            key={inventory._id}
            inventory={inventory}
          ></ManageDetails>
        ))}
      </div>
    </div>
  );
};

export default MangeIteam;
