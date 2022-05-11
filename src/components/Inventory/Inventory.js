import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import InventoryItem from "../InventoryItem/InventoryItem";

const Inventory = () => {
  const [inventorys, setInventory] = useState([]);
  const datas =inventorys.slice(0,6);

  useEffect(() => {
    fetch(`http://localhost:5000/inventory`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return (
    <div className="container">
  <div className="row">

  <h2 className="text-center">Inventory Iteams</h2>
      <Table className="table-responsive">

      <thead>
    <tr>
       
      <th>Name</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Suppliername</th>
      <th>Shortdescription</th>
    </tr>
   <tr>
   
   </tr>
  </thead>
      </Table>
   

 
{datas.map((inventory) => (
        <InventoryItem key={inventory._id} inventory={inventory}></InventoryItem>
      ))}
 


  </div>
      
    </div>
  );
};

export default Inventory;
