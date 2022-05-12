import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import useManage from "../../hooks/useManage";

const Myitem = ( ) => {
  const [myItem, setmyItem] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getMyIteam = async () => {
      const email = user?.email;
      console.log(email);
      const url = `http://localhost:5000/my-inventory/${email}`;
      const { data } = await axios.get(url);
      setmyItem(data);
    };

    getMyIteam();
  }, [user]);

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
            // console.log(manages)
            const remainingIteam = myItem.filter(
              (manage) => manage._id !== id
            );
            
            setmyItem(remainingIteam);
            // console.log("REMAINING",remainingIteam)
          }
          // console.log(data);
        });
    }
  };


  return (
    <div>
      <h4>my item:{myItem.length} </h4>
      <span>W{user?.email}</span>

      <div>
        <h2 className="text-center border-bottom pb-2 my-3">My Items</h2>
        <div className="container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myItem.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  {/* <td>{product.shortdescription}</td> */}
                  {/* <td>{product.quantity}</td> */}
                  <td className="text-end">
                    <button className="btn btn-danger" onClick={()=>IteamDelete(item._id)}>x</button>
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

export default Myitem;
