import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Product from './components/Product';
import React,{ useState } from 'react';

function App() {
 let product = [
  {
      name : "Tv",
      price : 8999,
      quantity : 2
  },
  {
    name : "Mobile",
    price : 899,
    quantity : 1
  }
]


let [productList, setProductList] = useState(product);
let incrementQuantity = (index) =>{
  let newProductList = [...productList];
  newProductList[index].quantity++;
  setProductList(newProductList);
}

  return (
    <>
       <Navbar />
       <main className='container mt-5 mx-5'>
       <ProductList product = {product} incrementQuantity = {incrementQuantity}/>
       </main>
      <Footer />
      
    </>
  );
}

export default App;
