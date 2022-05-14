import { useEffect, useState } from "react";

const useManage = () => {
  const [manages, setManages] = useState([]);
  useEffect(() => {
    fetch(`https://radiant-reef-89107.herokuapp.com/inventory`)
      .then((res) => res.json())
      .then((data) => setManages(data));
  }, []);

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
            console.log(manages);
            const remainingIteam = manages.filter(
              (manage) => manage._id !== id
            );

            setManages(remainingIteam);
            console.log("REMAINING", remainingIteam);
          }
          // console.log(data);
        });
    }
  };

  return [manages, IteamDelete];
};
export default useManage;
