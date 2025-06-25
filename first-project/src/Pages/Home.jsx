import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Container from '../Components/Container/Container'
import Trending from '../Components/Trending/Trending'
import {useState,useEffect} from 'react';

const Home = () => {
  const [cartList, setcartList] = useState([]);
  return (
    <>
      <Navbar cartList={cartList}/>
      <Container/>
      <Trending cartList={cartList} setcartList={setcartList} />
    </>
  )
}

export default Home
