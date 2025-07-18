import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import OrderPage from './Pages/OrderPage';
import AdminOrdersPage from './Pages/AdminOrdersPage';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AddProduct from './Pages/AddProduct';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/admin" element={<AddProduct />} />
        {/* <Route path="/admin/home" element={<AddProduct />} /> */}
        <Route path="/order" element={<OrderPage />} />
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
