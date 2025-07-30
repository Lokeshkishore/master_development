import React from 'react'
import './Trending.css'
import likeSvg from '../../assets/heart-svgrepo-com.svg'
import plusSvg from '../../assets/plus.svg'
import {useState,useEffect} from 'react';
import axios from 'axios'
import.meta.env

const Trending = ({ cartList, setcartList }) => {
  const [productlist, setProductlist] = useState([]);
  const DOMAIN_URL = import.meta.env.VITE_DOMAIN_URL;

  useEffect(() => {
    axios.get(`${DOMAIN_URL}/crackers/home`).then((response) => {
      if(response){
          response.data.forEach((item)=>{
              item.display_price = item.price;
              item.buying_quantity = 1;
              item.addCart = true;
          });
         setProductlist(response.data);
      }
    });
  },[]);

  const changeQuantity=(product,id,type)=>{
    if(type=='plus'){
        document.getElementById(id).value = Number(document.getElementById(id).value) +1;
    }
    else if(type=='minus'){
        document.getElementById(id).value = Number(document.getElementById(id).value) - 1;
    }
    var priceTag = Number(document.getElementById(id).value) * Number(product.price);
    setProductlist(prevItems =>
      prevItems.map(item =>
        item.id === product.id ? { ...item, display_price: priceTag,buying_quantity:Number(document.getElementById(id).value)} : item
      )
    );
  }
  const addToCart = (ele) => {
    const updatedItems = productlist.map(item =>
      item.id === ele.id ? { ...item, addCart: false } : item
    );
    setProductlist(updatedItems);
    setcartList([...cartList, ele]);
  }
  return (
    <div>
      <section className="py-5">
      <div className="container-fluid">
        
        <div className="row">
          <div className="col-md-12">

            <div className="bootstrap-tabs product-tabs">
              <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                <h3>Trending Products</h3>
                {/* <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a href="#" className="nav-link text-uppercase fs-6 active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all">All</a>
                    <a href="#" className="nav-link text-uppercase fs-6" id="nav-fruits-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits">Fruits & Veges</a>
                    <a href="#" className="nav-link text-uppercase fs-6" id="nav-juices-tab" data-bs-toggle="tab" data-bs-target="#nav-juices">Juices</a>
                  </div>
                </nav> */}
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">

                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                   {productlist.map((product)=>{
                     return <div className="col">
                      <div className="product-item">
                        <span className="badge bg-success position-absolute m-3">-30%</span>
                        <a href="#" className="btn-wishlist"> <img src={likeSvg} alt="" style={{height:24,width:24}}/></a>
                        <figure>
                          <a href="index.html" title="Product Title">
                            <img src={product.image}  className="tab-image"/>
                          </a>
                        </figure>
                        <h3>{product.name}</h3>
                        <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                        <span className="price">₹ {product.display_price}</span>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" onClick={() => changeQuantity(product,`quantity${product.id}`,'minus')} className="quantity-left-minus btn btn-danger btn-number">
                                    -
                                  </button>
                              </span>
                              <input type="text" id={`quantity${product.id}`} value={product.buying_quantity} name="" className="form-control"/>
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" onClick={() => changeQuantity(product,`quantity${product.id}`,'plus')}>
                                  +
                                  </button>
                              </span>
                          </div>
                            {product.addCart && (
                              <a  onClick={() => addToCart(product)} className='addCartBtn'>Add to Cart <iconify-icon icon="uil:shopping-cart"/></a>
                            )}
                            {!product.addCart && (
                              <a  onClick={() => addToCart(product)} className='removeCartBtn'>Remove Cart <iconify-icon icon="uil:shopping-cart"/></a>
                            )}
                        </div>
                      </div>
                    </div>
                   })}
                  </div>
                </div>

                <div className="tab-pane fade" id="nav-fruits" role="tabpanel" aria-labelledby="nav-fruits-tab">
                  
                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                    <div className="col">
                      <div className="product-item">
                        <span className="badge bg-success position-absolute m-3">-30%</span>
                        <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                        <figure>
                          <a href="index.html" title="Product Title">
                            <img src="images/thumb-cucumber.png"  className="tab-image"/>
                          </a>
                        </figure>
                        <h3>Sunstar Fresh Melon Juice</h3>
                        <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                        <span className="price">$18.00</span>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                              <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1"/>
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                      <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                  </button>
                              </span>
                          </div>
                          <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"/></a>
                        </div>
                      </div>
                    </div>

                  </div>
                 

                </div>
                <div className="tab-pane fade" id="nav-juices" role="tabpanel" aria-labelledby="nav-juices-tab">

                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                    <div className="col">
                      <div className="product-item">
                        <a href="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></a>
                        <figure>
                          <a href="index.html" title="Product Title">
                            <img src="images/thumb-cucumber.png"  className="tab-image"/>
                          </a>
                        </figure>
                        <h3>Sunstar Fresh Melon Juice</h3>
                        <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                        <span className="price">$18.00</span>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="input-group product-qty">
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                  </button>
                              </span>
                              <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1"/>
                              <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <img src={plusSvg} alt="" style={{height:24,width:24}}/>
                                  </button>
                              </span>
                          </div>
                          <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"/></a>
                        </div>
                      </div>
                    </div>

                   

                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Trending
