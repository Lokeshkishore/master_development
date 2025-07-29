import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import logo1 from '../../assets/logo1.jpg'
import likeSvg from '../../assets/heart-svgrepo-com.svg'
import {useState,useEffect} from 'react';
import Trending from '../Trending/Trending'
import { Link } from 'react-router';

const Navbar = ({ cartList }) => {
   const totalPrice = cartList.reduce((sum, item) => sum + Number(item.display_price), 0);
  return (
    <div>
    <div className="preloader-wrapper">
      <div className="preloader">
      </div>
    </div>

    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasCart" aria-labelledby="My Cart">
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">{cartList.length}</span>
          </h4>
          <ul className="list-group mb-3">
            {cartList.map((product)=>{
            return  <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="my-0">{product.name}</h6>
                        {/* <small className="text-body-secondary">Brief description</small> */}
                      </div>
                      <span className="text-body-secondary">₹ {product.display_price}</span>
                    </li>
            })}
          
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (INR)</span>
              <strong>₹ {totalPrice}</strong>
            </li>
          </ul>
  
          {/* <button className="w-100 btn btn-primary btn-lg" type="">Continue to checkout</button> */}
          <Link to='/order' className="w-100 btn btn-primary btn-lg" state={{ items: cartList }} > Continue to checkout</Link>
        </div>
      </div>
    </div>
    
    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasSearch" aria-labelledby="Search">
      <div className="offcanvas-header justify-content-center">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Search</span>
          </h4>
          <form role="search" action="index.html" method="get" className="d-flex mt-3 gap-0">
            <input className="form-control rounded-start rounded-0 bg-light" type="email" placeholder="What are you looking for?" aria-label="What are you looking for?"/>
            <button className="btn btn-dark rounded-end rounded-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>

    <header>
      <div className="container-fluid">
        <div className="row py-3 border-bottom">
          
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <a href="">
                <img src={logo1} alt="logo" className="img-fluid logo-img"/>
              </a>
            </div>
          </div>
          
          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
            <div className="search-bar row bg-light p-2 my-2 rounded-4">
              {/* <div className="col-md-4 d-none d-md-block">
                <select className="form-select border-0 bg-transparent">
                  <option>All Categories</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
              </div> */}
              <div className="col-11 col-md-7">
                <form id="search-form" className="text-center" action="index.html" method="post">
                  <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                </form>
              </div>
              <div className="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
              </div>
            </div>
          </div>
          
          <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
            <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 text-muted">For Support?</span>
              <h5 className="mb-0">+91 8428252445</h5>
            </div>

            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a href="#" className="rounded-circle bg-light p-2 mx-1">
                  <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#user"></use></svg>
                </a>
              </li>
              <li>
                <a href="#" className="rounded-circle bg-light p-2 mx-1">
                  <img src={likeSvg} alt="" style={{height:24,width:24}}/>
                </a>
              </li>
              <li className="d-lg-none">
                <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                  <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#cart"></use></svg>
                </a>
              </li>
              <li className="d-lg-none">
                <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                  <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#search"></use></svg>
                </a>
              </li>
            </ul>

            <div className="cart text-end d-none d-lg-block dropdown">
              <button className="border-0 bg-transparent d-flex flex-column gap-2 lh-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                <span className="fs-6 text-muted dropdown-toggle">Your Cart</span>
                <span className="cart-total fs-5 fw-bold">₹ {totalPrice}</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row py-3">
          <div className="d-flex  justify-content-center justify-content-sm-between align-items-center">
            <nav className="main-menu d-flex navbar navbar-expand-lg">

              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                <div className="offcanvas-header justify-content-center">
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body">
              
                  <select className="filter-categories border-0 mb-0 me-5">
                    <option>Shop by Departments</option>
                    <option>Groceries</option>
                    <option>Drinks</option>
                    <option>Chocolates</option>
                  </select>
              
                  <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                    <li className="nav-item active">
                      <a href="#women" className="nav-link">Women</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="#men" className="nav-link">Men</a>
                    </li>
                    <li className="nav-item">
                      <a href="#kids" className="nav-link">Kids</a>
                    </li>
                    <li className="nav-item">
                      <a href="#accessories" className="nav-link">Accessories</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" role="button" id="pages" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                      <ul className="dropdown-menu" aria-labelledby="pages">
                        <li><a href="index.html" className="dropdown-item">About Us </a></li>
                        <li><a href="index.html" className="dropdown-item">Shop </a></li>
                        <li><a href="index.html" className="dropdown-item">Single Product </a></li>
                        <li><a href="index.html" className="dropdown-item">Cart </a></li>
                        <li><a href="index.html" className="dropdown-item">Checkout </a></li>
                        <li><a href="index.html" className="dropdown-item">Blog </a></li>
                        <li><a href="index.html" className="dropdown-item">Single Post </a></li>
                        <li><a href="index.html" className="dropdown-item">Styles </a></li>
                        <li><a href="index.html" className="dropdown-item">Contact </a></li>
                        <li><a href="index.html" className="dropdown-item">Thank You </a></li>
                        <li><a href="index.html" className="dropdown-item">My Account </a></li>
                        <li><a href="index.html" className="dropdown-item">404 Error </a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#brand" className="nav-link">Brand</a>
                    </li>
                    <li className="nav-item">
                      <a href="#sale" className="nav-link">Sale</a>
                    </li>
                    <li className="nav-item">
                      <a href="#blog" className="nav-link">Blog</a>
                    </li>
                  </ul>
                
                </div>

              </div>
            </nav>  
          </div>
        </div>
      </div> */}
    </header>
    </div>
  )
}

export default Navbar
