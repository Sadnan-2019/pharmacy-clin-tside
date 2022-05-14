import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetails = () => {
  const { inventoryID } = useParams();
  const [inventory, setInventory] = useState({});
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const url = `https://radiant-reef-89107.herokuapp.com/inventory/${inventoryID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventoryID, update]);
  const handleDelivered = () => {
    // console.log("ow click")
    let oldQuentity = inventory?.quantity;
    let Quentity = parseInt(oldQuentity - 1);
    // console.log(Quentity);
    if (Quentity > 0) {
      const url = `https://radiant-reef-89107.herokuapp.com/inventory/${inventoryID}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ Quentity }),
      })
        .then((res) => res.json())
        .then((data) => {
          setInventory({ ...inventory, quantity: Quentity });
          // console.log(data);
        });
    }
  };

  const handleAddQuentity = (event) => {
    event.preventDefault();

    let quentityOld = inventory?.quantity;
    // console.log(quentityOld)
    const newQuentity = parseInt(event.target.quantity.value);
    // console.log("mamama");

    if (newQuentity > 0) {
      quentityOld = parseInt(quentityOld) + newQuentity;
      // console.log(quentityOld);
      const Quentity = { Quentity: quentityOld };

      const url = `https://radiant-reef-89107.herokuapp.com/inventory/${inventoryID}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(Quentity),
      })
        .then((res) => res.json())
        .then((data) => {
          // setInventory({ ...inventory, quantity: Quentity });
          // console.log(data);
          setUpdate(!update);
          event.target.reset();
        });
    }
  };

  return (
    <div>
      <div className="container">
        <h4 className="text-center">Iteam Details</h4>
        <div className="row   row-cols-1">
           

          <div className="col d-flex justify-content-center  align-items-center">
            <div className="card w-50 h-100  col-12 col-sm-12 col-md-12 col-lg-6">
              <img src={inventory?.img} alt="..." className="p-4 w-50" />
              <div className="card-body">
                <h5 className="card-title">Name: {inventory?.name}</h5>
                <h6 className="card-text">Quantity: {inventory?.quantity}</h6>
                <h6 className="card-text">Price: ${inventory?.price}</h6>
                <h6 className="card-text">
                  Suppliername: {inventory?.suppliername}
                </h6>
                <h6 className="card-text">
                  Shortdescription: {inventory?.shortdescription}
                </h6>
              </div>
              <div className="card-footer bg-dark d-flex  ">
                <p className="text-light">
                  Please click the button for delivered
                </p>
                <br></br>

                <button className="btn btn-info ms-3" onClick={handleDelivered}>
                  Delivered
                </button>
              </div>
            </div>
            <div className="  ms-5 bg-dark text-light   p-4  ">
              <p>If you want add quantity?Please Add</p>
              <form onSubmit={handleAddQuentity}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quantity"
                  name="quantity"
                />
                <button className="btn btn-info mt-4 mb-2" type="submit">
                  Add Quantity
                </button>
              </form>
            </div>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
