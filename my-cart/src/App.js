import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Product from './components/Product';
import React,{ useState } from 'react';
import AddIten from './components/AddIten';

function App() {
 const products = [
  {
    name : "Tv",
    price : 8999,
    quantity : 0
},
{
  name : "Mobile",
  price : 899,
  quantity : 0
}
]



let [productList, setProductList] = useState(products);
let [totalAmount, setTotalAmount] = useState();

let incrementQuantity = (index) =>{
  let newProductList = [...productList];
  newProductList[index].quantity++;
  let newTotalAmounnt = totalAmount;
  newTotalAmounnt += newProductList[index].price;
  setTotalAmount(newTotalAmounnt);
  setProductList(newProductList);
}

let decrementQuantity = (index) => {
  let newProductList = [...productList];
  let newTotalAmounnt = totalAmount;
  if(newProductList[index].quantity > 0){
    newProductList[index].quantity--;
    newTotalAmounnt -= newProductList[index].price;

  }
  setTotalAmount(newTotalAmounnt);
  setProductList(newProductList);
};
  let resetQuantity = () =>{
    let newProductList = [...productList];
    newProductList.map((products)=>{
      products.quantity = 0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  };

  let removeItem = (index) =>{
    let newProductList = [...productList];
    let newTotalAmounnt = totalAmount;
    newTotalAmounnt -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmounnt);
    
   };

   let addItem = (name, price)=>{
    let newProductList = [...productList];
    newProductList.push(
      {
        price : price,
        name : name,
        quantity:0
      }
    );
    setProductList(newProductList);
  }

  return (
    <>
       <Navbar />
       <main className='container mt-5 mx-5'>
        <AddIten addItem= {addItem} />
       <ProductList productList = {productList} incrementQuantity = {incrementQuantity} decrementQuantity ={decrementQuantity} removeItem ={removeItem}/>
       </main>
      <Footer totalAmount ={totalAmount} resetQuantity ={resetQuantity} />
      
    </>
  );
}


export default App;
