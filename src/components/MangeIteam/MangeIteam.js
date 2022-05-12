

import useManage from "../../hooks/useManage";
import ManageDetails from "../ManageDetails/ManageDetails";

const MangeIteam = () => {
  const [inventorys, IteamDelete] = useManage();

 
  return (

    <ManageDetails inventorys={inventorys}
    IteamDelete={IteamDelete}
    ></ManageDetails>
    
  );
};

export default MangeIteam;
