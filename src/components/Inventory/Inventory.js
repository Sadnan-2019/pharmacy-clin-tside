import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import InventoryItem from "../InventoryItem/InventoryItem";
import Loading from "../Loading/Loading";

const Inventory = () => {
  const [inventorys, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const datas = inventorys.slice(0, 6);

  useEffect(() => {
    fetch(`http://localhost:5000/inventory`)
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center fw-bolder py-5">Inventory Iteams</h2>

        {datas.map((inventory) => (
          <InventoryItem
            key={inventory._id}
            inventory={inventory}
          ></InventoryItem>
        ))}

        <Link to="/manage-iteam" className="App py-3">
          <button className="btn  bg-dark text-light">Manage Iteam</button>
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
