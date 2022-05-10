import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetails = () => {
  const { inventoryID } = useParams();
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div class="row g-4 my-5">
          <div class="col-md-6 col-lg-6   ">
            <div class="p-3   text-light    bg-dark">
              <p>ID:{inventoryID}</p>
              <p>Name:{inventory.name}</p>
              <p>Quantity:{inventory.quantity}</p>
              <p>Price:{inventory.price}</p>
              
            </div>
          </div>

          <div class="col-md-6 col-lg-6 text-light">
            <div class="p-3     ">
              <img src={inventory.img} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

 
        

          
    </div>
  );
};

export default InventoryDetails;
