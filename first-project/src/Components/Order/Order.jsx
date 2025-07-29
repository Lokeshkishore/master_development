import React from 'react'
import './Order.css'
import {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import orderConfirm from '../../assets/order_confirmed.jpg'
const Order = () => {
  const location = useLocation();
  const initialCart = location.state?.items || [];
  const [cartList, setCartList] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const totalPrice = cartList.reduce((sum, item) => sum + Number(item.display_price), 0);

  const [orderForm,setOrderForm] = useState({
    name:'',
    email:'',
    phone:'',
    address:'',
  });
 const handleChange = (e) => {
     const { name,value} = e.target;
      setOrderForm((prev) => ({
        ...prev,
        [name]: value,
      }));  
};
  useEffect(() => {
    setCartList(initialCart);
  }, [initialCart]);

  const changeQuantity=(product,id,type)=>{
    if(type=='plus'){
        document.getElementById(id).value = Number(document.getElementById(id).value) +1;
    }
    else if(type=='minus'){
        document.getElementById(id).value = Number(document.getElementById(id).value) - 1;
    }
    var priceTag = Number(document.getElementById(id).value) * Number(product.price);
    
    setCartList(prevItems =>
      prevItems.map(item =>
        item.id === product.id ? { ...item, display_price: priceTag,buying_quantity:Number(document.getElementById(id).value)} : item
      )
    );
  }
const orderSubmit=()=>{
    event.preventDefault();
      orderForm['cartlist'] = JSON.stringify(cartList);
      orderForm['total_price'] = totalPrice;
      var data={
        data:orderForm
      }
      const res = axios.post('https://master-development.vercel.app/crackers/addOrder', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
          if(response.data=='True'){
             setOrderPlaced(true);
          }
       });

}

  return (
    <>
    <div className='orderPage'>
        <div>
            <h2>Your Products</h2>
        </div>
        <div className="order-parent">
            <div className="w-50">
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
                        {cartList.map((product)=>{
                        return    <tr>
                                        <td><img src={product.image} className="order-image"/></td>
                                        <td>{product.name}</td>
                                        <td>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex product-qty">
                                                        <span className="input-group-btn">
                                                            <button type="button" onClick={() => changeQuantity(product,`quantity${product.id}`,'minus')} className="quantity-left-minus btn btn-danger btn-number">
                                                                -
                                                            </button>
                                                        </span>
                                                        <input type="text" id={`quantity${product.id}`} value={product.buying_quantity} name="" className="w-25 form-control"/>
                                                        <span className="input-group-btn">
                                                            <button type="button" className="quantity-right-plus btn btn-success btn-number" onClick={() => changeQuantity(product,`quantity${product.id}`,'plus')}>
                                                            +
                                                            </button>
                                                        </span>
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
                            <td>{totalPrice}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <div className="w-50 order-form">
                {!orderPlaced&&(
                  <form action="" onSubmit={orderSubmit}>
                    <div className='d-block'>
                      <label className='mb-1 label'>Name</label>
                        <div className="">
                        <input type="text" className="form-input" name="name" placeholder="Enter your name" onChange={handleChange}  value={orderForm.name}/>
                        </div>
                    </div>
                    <div className='d-block'>
                      <label className='mb-1 label'>Email</label>
                        <div className="">
                        <input type="email" className="form-input" name="email" placeholder="Enter your email"  onChange={handleChange}  value={orderForm.email}/>
                        </div>
                    </div>
                    <div className='d-block'>
                      <label className='mb-1 label'>Phone</label>
                        <div className="">
                        <input type="text" className="form-input" name="phone" placeholder="Enter your mobile number"  onChange={handleChange}  value={orderForm.phone}/>
                        </div>
                    </div>
                    <div className='d-block'>
                      <label className='mb-1 label'>Address</label>
                        <div className="">
                      <textarea className="form-input" name='address' onChange={handleChange}  value={orderForm.address} placeholder="Enter your address" id="floatingTextarea"></textarea>
                        </div>
                    </div>
                    <div>
                      <button type="submit" class="w-100 btn btn-warning">Place order</button>
                    </div>
                  </form>
                )
                }
                {orderPlaced&&(
                  <img src={orderConfirm} className="img-fluid"/>
                )
                }
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Order