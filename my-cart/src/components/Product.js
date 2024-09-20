import React from "react";

export default function Product(props) {
  
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <h2>
            {props.product.name}
            <span className="badge text-bg-secondary">${props.product.price}</span>
          </h2>
        </div>
        <div className="col-2">
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
        <div className="col-3 ">
        <button type="button" class="btn btn-secondary ">
        ${props.product.quantity * props.product.price}
      </button>
      </div>
     
    </div>
    
  );
}
