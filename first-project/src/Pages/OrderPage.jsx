import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Order from '../Components/Order/Order';
import {useState,useEffect} from 'react';
const OrderPage = () => {
  const [cartList, setcartList] = useState([]);
  return (
    <>
      {/* <Navbar cartList={cartList}/> */}
      <Order/>
    </>
  )
}

export default OrderPage