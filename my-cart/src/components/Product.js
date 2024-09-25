import React from "react";

export default function Product(props) {
  
  return (
    <div>
      <div className="row mt-4">
        <div className="col-5">
          <h2>
            {props.product.name}
            <span className="badge text-bg-secondary">${props.product.price}</span>
          </h2>
        </div>
        <div className="col-3">
            <button type="button" class="btn btn-primary" onClick={
              ()=>{
                  props.decrementQuantity(props.index);
            }}>
             -
            </button>
            <button type="button" class="btn btn-secondary">
             {props.product.quantity}
            </button>
            <button type="button" class="btn btn-success " 
            onClick={()=> {
              props.incrementQuantity(props.index);
              }}
            >
             +
            </button>
           </div>
          </div>
        <div className="col-4 ">
        <button type="button" class="btn btn-secondary ">
        ${props.product.quantity * props.product.price}
      </button>
      </div>
      <div>
        <button className="col-3 btn btn-danger red"
         onClick={()=>{
          props.removeItem(props.index)
         }}>Remove</button>
      </div>
     
    </div>
    
  );
}
