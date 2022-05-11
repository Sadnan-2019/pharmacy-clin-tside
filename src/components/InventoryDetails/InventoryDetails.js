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
  const handleDelivered=()=>{

    console.log("ow click")
  }

  return (
    <div>
      <div className="container">
        
          <h4 className="text-center">Iteam Details</h4>
          <div className="row row-cols-1 row-cols-md-1     g-4">
            <div className="col  d-flex justify-content-center  align-items-center">
              <div className="card h-100">
                <img src={inventory.img} alt="..." className="p-4" />
                <div className="card-body">
                  <h5 className="card-title">Name: {inventory.name}</h5>
                  <h6 className="card-text">Quantity: {inventory.quantity}</h6>
                  <h6 className="card-text">Price: ${inventory.price}</h6>
                  <h6 className="card-text">
                    Suppliername: {inventory.suppliername}
                  </h6>
                  <h6 className="card-text">
                    Shortdescription: {inventory.shortdescription}
                  </h6>
                </div>
                <div className="card-footer bg-dark d-flex  ">
                  <p className="text-light">Please click the button for delivered</p><br></br>
                  
                  <button className="btn btn-info ms-3" onClick={handleDelivered()} >Delivered</button>
                </div>
              </div>
              <div className="  ms-5 bg-dark text-light   p-4  ">
                <p>If you want add quantity?Please Add</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quantity"
                  name="quantity"
                />
                <button className="btn btn-info mt-4 mb-2">Add Quantity</button>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default InventoryDetails;
