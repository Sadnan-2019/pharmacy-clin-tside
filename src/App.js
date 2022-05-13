import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Banner/Footer/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import AddItem from './components/AddItem/AddItem';
import MangeIteam from './components/MangeIteam/MangeIteam';
import RequiireAuth from './components/RequiireAuth/RequiireAuth';
import Myitem from './components/Myitem/Myitem';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className=" ">
     <Header></Header>
     <Routes>

       <Route path="/registration" element={<Register/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/blog" element={<Blogs/>}></Route>
       <Route path="/add-iteam" element={<RequiireAuth>
        <AddItem/>
       </RequiireAuth>}></Route>
       <Route path="/my-item" element={<RequiireAuth><Myitem/></RequiireAuth>}></Route>
       <Route path="/manage-iteam" element={<RequiireAuth><MangeIteam/></RequiireAuth>}></Route>
       <Route path="/inventory/:inventoryID" element={<RequiireAuth><InventoryDetails/></RequiireAuth>}></Route>

       
     </Routes>

     <Footer></Footer>
    </div>
  );
}

export default App;
