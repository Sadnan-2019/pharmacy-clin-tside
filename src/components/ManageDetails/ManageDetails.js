import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useManage from "../../hooks/useManage";

const ManageDetails = ({ inventory }) => {
  const [inventorys, setInventory] = useManage([]);
    // console.log(inventorys)
  const { _id, name, price, img, quantity, suppliername, shortdescription } =
    inventory;

  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`http://localhost:5000/inventory`)
  //     .then((res) => res.json())
  //     .then((data) => setInventory(data));
  // }, [ ]);

  const navigateInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  const IteamDelete = (id) => {
    const proceed = window.confirm("Are you sure");
    //     console.log(id)
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const deleteIteam = inventorys.filter(
              (inventory) => inventory._id !== id
            );
            setInventory(deleteIteam);
            console.log(deleteIteam)
          }
          // console.log(data);
        });
    }
  };
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{suppliername}</td>
            <td>{shortdescription}</td>
            <td>
              <img className="img-fluid w-25" src={img} alt="" />
            </td>
            <td>
              <button
                className="btn btn-info"
                onClick={() => navigateInventoryDetail(_id)}
              >
                Update
              </button>
              <button
                className="btn btn-danger ms-3"
                onClick={() => IteamDelete(_id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageDetails;
