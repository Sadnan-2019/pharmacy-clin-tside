import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const InventoryItem = ({ inventory }) => {
  const { _id, name, price, img, quantity, suppliername, shortdescription } =
    inventory;

  const navigate = useNavigate();

  const navigateInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
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
              <img src={img} alt="" />
            </td>
            <td>
              {" "}
              <button
                className="btn btn-info"
                onClick={() => navigateInventoryDetail(_id)}
              >
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default InventoryItem;
