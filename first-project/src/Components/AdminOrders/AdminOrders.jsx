import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './AdminOrders.css'
const AdminOrders = () => {
  const [odersList,setOrdersList]= useState([]);
  const [cartList,setCartList]= useState([]);
  const [selectedOrder,setSelectedOrder] = useState({});
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/crackers/admin-orders").then((response) => {
        if(response){
            setOrdersList(response.data);
        }
    });
  },[]);
  const [isActive, setIsActive] = useState(false);

  const viewDetails = (order) => {
     setIsActive(!isActive);
     order.cartlist = typeof(order.cartlist)=='string'?JSON.parse(order.cartlist):order.cartlist;
     setCartList(order.cartlist);
     setSelectedOrder(order);
  }


  return (
    <>
      <div id="detailsDiv" className={isActive ? "show_rightside_div" : "hide_rightside_div"}>
        <div className='d-flex'>
          <h3>Order details</h3>
          <span onClick={() => viewDetails()}>Close</span>
        </div>
        <div>
             <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList.lengtn>0 && cartList.map((product)=>{
                        return    <tr>
                                        <td><img src={product.image} className="order-image"/></td>
                                        <td>{product.name}</td>
                                        <td>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex product-qty">
                                                        <input type="text" id={`quantity${product.id}`} value={product.buying_quantity} name="" className="w-25 form-control"/>
                                                    </div>
                                                </div>
                                        </td>
                                        <td>₹ {product.display_price}</td>
                                    </tr>
                        })}
                            <tr>
                            <td>Total</td>
                            <td></td>
                            <td></td>
                            <td>{selectedOrder.total_price}</td>
                            </tr>
                    </tbody>
                </table>
        </div>  
      </div>

      <table class="table m-md-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone </th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Total price</th>
              <th scope="col">View details</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {odersList.map((order)=>{
             return  <tr>
                      <td>{order.name}</td>
                      <td>{order.phone}</td>
                      <td>{order.email}</td>
                      <td>{order.address}</td>
                      <td>{order.total_price}</td>
                      <td style={{color: "blue"}}onClick={() => viewDetails(order)} >View details</td>
                      <td>{order.status==0?<span style={{color: "red"}}>Ordered</span>:<span style={{color: "green"}}>Completed</span>}</td>
                    </tr>
            })}
          </tbody>
      </table>
    
    </>
  )
}

export default AdminOrders