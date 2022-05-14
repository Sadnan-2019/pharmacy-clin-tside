import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import useManage from "../../hooks/useManage";

const Myitem = () => {
  const [myItem, setmyItem] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getMyIteam = async () => {
      const email = user?.email;
      // console.log(email);
      const url = `https://radiant-reef-89107.herokuapp.com/my-inventory/${email}`;
      const { data } = await axios.get(url,{



        headers: {

          authorization :`Bearer ${localStorage.getItem("accessToken")}`
      
      


        }
        
      });
      
      
      setmyItem(data);
    };
     
    getMyIteam();
  }, [user]);

  const IteamDelete = (id) => {
    const proceed = window.confirm("Are you sure");
    //     console.log(id)
    if (proceed) {
      const url = `https://radiant-reef-89107.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            // console.log(manages)
            const remainingIteam = myItem.filter((manage) => manage._id !== id);

            setmyItem(remainingIteam);
            // console.log("REMAINING",remainingIteam)
          }
          // console.log(data);
        });
    }
  };

  return (
    <div>
      {/* <span>W{user?.email}</span> */}

      <div>
        <div className="container my-5">
          <h4 className="text-center">My Iteam:{myItem.length} </h4>
          <Table responsive>
            <thead>
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Short Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {myItem.map((item) => (
                <tr key={item._id}>
                  <td>{user?.email}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.shortdescription}</td>
                  <td>
                    <img className="w-50" src={item.img} alt="" />
                  </td>
                  <td className="text-end">
                    <button
                      className="btn btn-danger"
                      onClick={() => IteamDelete(item._id)}
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

export default Myitem;
