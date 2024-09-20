import React from "react";

export default function Product(props) {
 


  return (
    <div>
      <div className="row">
        <div className="col-5">
          <h2>
            {props.product.name}
            <span class="badge text-bg-secondary">${props.product.price}</span>
          </h2>
        </div>
        <div className="col-3">
            <button type="button" class="btn btn-primary">
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
         {props.product.quantity * props.product.price}
      
      </div>
     
    </div>
    
  );
}
