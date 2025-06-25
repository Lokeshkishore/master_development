import React from 'react'
import './Order.css'
import { useLocation } from 'react-router-dom';
const Order = () => {
  const location = useLocation();
  const cartList = location.state?.items || [];
  const totalPrice = cartList.reduce((sum, item) => sum + Number(item.display_price), 0);
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
                <form action="">
                  <div className='d-block'>
                    <label className='mb-1'>Name</label>
                      <div className="">
                      <input type="text" className="order-input" name="name" placeholder="Enter your name"  value=""/>
                      </div>
                  </div>
                  <div className='d-block'>
                    <label className='mb-1'>Email</label>
                      <div className="">
                      <input type="email" className="order-input" name="email" placeholder="Enter your email"  value=""/>
                      </div>
                  </div>
                  <div className='d-block'>
                    <label className='mb-1'>Phone</label>
                      <div className="">
                      <input type="text" className="order-input" name="phone" placeholder="Enter your mobile number"  value=""/>
                      </div>
                  </div>
                   <div className='d-block'>
                    <label className='mb-1'>Address</label>
                      <div className="">
                     <textarea class="form-control" placeholder="Enter your address" id="floatingTextarea"></textarea>
                      </div>
                  </div>
                  <div>
                     <button type="button" class="w-100 btn btn-warning">Place order</button>
                  </div>
                </form>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Order