import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import OrderPage from './Pages/OrderPage';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AddProduct from './Pages/AddProduct';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/home" element={<AddProduct />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
