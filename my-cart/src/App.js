import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
// import Footer from './components/Footer';
// import Product from './components/Product';
import React,{ useState } from 'react';

function App() {
 const products = [
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



let [productList, setProductList] = useState(products);
let incrementQuantity = (index) =>{
  let newProductList = [...productList];
  newProductList[index].quantity++;
  setProductList(newProductList);
}

let decrementQuantity = (index) => {
  let newProductList = [...productList];
  if(newProductList[index].quantity > 0){
    newProductList[index].quantity--;
  }
  setProductList(newProductList);
}

  return (
    <>
       <Navbar />
       <main className='container mt-5 mx-5'>
       <ProductList productList = {productList} incrementQuantity = {incrementQuantity} decrementQuantity ={decrementQuantity}/>
       </main>
      {/* <Footer /> */}
      
    </>
  );
}


export default App;
