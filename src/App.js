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

function App() {
  return (
    <div className=" ">
     <Header></Header>
     <Routes>

       <Route path="/registration" element={<Register/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/add-iteam" element={<AddItem/>}></Route>
       <Route path="/manage-iteam" element={<MangeIteam/>}></Route>
       <Route path="/inventory/:inventoryID" element={<InventoryDetails/>}></Route>

       
     </Routes>

     <Footer></Footer>
    </div>
  );
}

export default App;
