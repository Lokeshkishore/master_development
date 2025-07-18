import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminOrders = () => {
  const [odersList,setOrdersList]= useState([]);
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/crackers/admin-orders").then((response) => {
        if(response){
            debugger
            setOrdersList(response.data);
        }
    });
  },[]);



  return (
    <>

    
    </>
  )
}

export default AdminOrders