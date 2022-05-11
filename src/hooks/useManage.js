import { useEffect, useState } from "react";

const useManage = () => {
  const [manages, setManage] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/inventory`)
      .then((res) => res.json())
      .then((data) => setManage(data));
  }, []);

  return [manages, setManage];
};
export default useManage;
