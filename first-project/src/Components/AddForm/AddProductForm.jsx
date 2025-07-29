import React from 'react'
import './AddProductForm.css';
import {useState,useEffect} from 'react';
import axios from 'axios'
import { FaEdit, FaTrash } from 'react-icons/fa';
const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    image: null,
  });
  const [productlist, setProductlist] = useState([]);
  useEffect(() => {
    axios.get("https://master-development.vercel.app/crackers/home").then((response) => {
      if(response){
         setProductlist(response.data);
      }
    });
  },[]);

  const handleChange = (e) => {
     const { name, type, value, files } = e.target;

    if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  
  };

  const editProduct=(data)=>{
     debugger
  }

  const addNewProductData=()=>{
   event.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('quantity', formData.quantity);
    data.append('image', formData.image);

     const res = axios.post('https://master-development.vercel.app/crackers/addProduct', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function (response) {
       setProductlist(response.data);
    });
  }
  return (
    <>
    <div>
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="addProductCart" aria-labelledby="My Cart">
          <div className="offcanvas-body">
             <div className="d-flex justify-content-between">
               <div className="">
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Add Product</span>
                  </h4>
                </div>
                <div className="">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
              </div>
              <form action="" onSubmit={addNewProductData}>
                  <div>
                    <label htmlFor="">Name</label>
                      <div className="input-group mb-3">
                      <input type="text" className="form-control" name="name" placeholder="name" onChange={handleChange} value={formData.name}/>
                      </div>
                  </div>
                  <div>
                  <label htmlFor="">Price</label>
                    <div className="input-group mb-3">
                     <input type="number" className="form-control" onChange={handleChange} value={formData.price}  name="price" placeholder="price"/>
                    </div>
                  </div>
                  <div>
                  <label htmlFor="">Quantity</label>
                    <div className="input-group mb-3">
                     <input type="number" name="quantity" onChange={handleChange} value={formData.quantity} className="form-control" placeholder="quantity"/>
                    </div>
                  </div>
                  <div>
                  <label htmlFor="">Image</label>
                    <div className="input-group mb-3">
                     <input type="file" className="form-control" name="image" onChange={handleChange} placeholder="name"/>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-primary">Save</button>
                      <button type="submit" className="btn btn-secondary">Cancel</button>
                  </div>
              </form>
          </div>
        </div>
        <div className="titleDiv">
          <div><h2>Products</h2></div>
          <div className="cart text-end d-none d-lg-block dropdown">
              <button type="button" className="btn btn-success"  data-bs-toggle="offcanvas" data-bs-target="#addProductCart" aria-controls="addProductCart">Add Product</button>
            </div>
        </div>
        <table class="table m-md-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productlist.map((product)=>{
             return  <tr>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td><img src={product.image} alt="Pencil" height={70} width={70} /></td>
                      <td>{product.quantity}</td>
                      <td>
                          <div style={{ display: 'flex', gap: '10px', cursor: 'pointer' }}>
                          <FaEdit 
                            title="Edit" onClick={() => editProduct(product)}
                          />
                          <FaTrash 
                            title="Delete" 
                          />
                        </div>
                      </td>
                    </tr>
            })}
            
          </tbody>
        </table>
    </div>
    </>
  )
}

export default AddProductForm


            
               
