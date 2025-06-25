import React from 'react'
import './Container.css'
import { useState } from 'react';
import {image_list} from '../../assets/assets';
import banner5 from '../../assets/banner5.jpg'
import banner4 from '../../assets/banner4.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner6 from '../../assets/banner6.jpg'


const Container = () => {
  const contextValue ={
    image_list
  }
 // const [swiperFun, setSwiperFun] = useState(swiperFun());
  function setSwiperFun() {
     var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 6,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });

    var brand_swiper = new Swiper(".brand-carousel", {
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".brand-carousel-next",
        prevEl: ".brand-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
      }
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".products-carousel-next",
        prevEl: ".products-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });
  }
  setSwiperFun();
  return (
    <div>
       <section className="py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">

            <div className="banner-blocks">
            
              <div className="banner-ad large bg-info block-1">

                <div className="swiper main-swiper">
                  <div className="swiper-wrapper">
                    
                    <div className="swiper-slide">
                      <div className="row banner-content p-5">
                        <div className="content-wrapper col-md-7">
                          <div className="categories my-3">100% natural</div>
                          <h3 className="display-4">Fresh Smoothie & Summer Juice</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                          <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Shop Now</a>
                        </div>
                        <div className="img-wrapper col-md-5">
                          <img src={banner5} className="img-fluid"/>
                        </div>
                      </div>
                    </div>
                    
                    <div className="swiper-slide">
                      <div className="row banner-content p-5">
                        <div className="content-wrapper col-md-7">
                          <div className="categories mb-3 pb-3">100% natural</div>
                          <h3 className="banner-title">Fresh Smoothie & Summer Juice</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                          <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</a>
                        </div>
                        <div className="img-wrapper col-md-5">
                          <img src={banner4} className="img-fluid"/>
                        </div>
                      </div>
                    </div>
                    
                    <div className="swiper-slide">
                      <div className="row banner-content p-5">
                        <div className="content-wrapper col-md-7">
                          <div className="categories mb-3 pb-3">100% natural</div>
                          <h3 className="banner-title">Heinz Tomato Ketchup</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                          <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</a>
                        </div>
                        <div className="img-wrapper col-md-5">
                          <img src={banner3} className="img-fluid"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="swiper-pagination"></div>

                </div>
              </div>
              
              <div className="banner-ad bg-success-subtle block-2" style={{  
        backgroundImage: "url(" + banner3 + ")",
        backgroundRepeat: 'no-repeat'
        }}>
                <div className="row banner-content p-5">

                  <div className="content-wrapper col-md-7">
                    <div className="categories sale mb-3 pb-3">20% off</div>
                    <h3 className="banner-title">Fruits & Vegetables</h3>
                    <a href="#" className="d-flex align-items-center nav-link">Shop Collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></a>
                  </div>

                </div>
              </div>

              <div className="banner-ad bg-danger block-3" style={{  
        backgroundImage: "url(" + banner6 + ")",
        backgroundRepeat: 'no-repeat'
        }}>
                <div className="row banner-content p-5">

                  <div className="content-wrapper col-md-7">
                    <div className="categories sale mb-3 pb-3">15% off</div>
                    <h3 className="item-title">Baked Products</h3>
                    <a href="#" className="d-flex align-items-center nav-link">Shop Collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg></a>
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

export default Container
