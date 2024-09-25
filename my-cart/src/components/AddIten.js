import React from 'react'
class AddIten extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        productName:"",
        productPrice:null
    };
  }
    render() { 
        return (
            <div>
               
            <form className="row mb-5"
            // for avoding relode after submit form
            onSubmit={(e) => {
                e.preventDefault();
                this.props.addItem(this.state.productName, Number(this.state.productPrice));
            }}>
              <div className="mb-3 col-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  placeholder="Enter product name"
                  required
                  name='productName'
                  onChange={(e) =>{
                    this.setState({productName: e.currentTarget.value});
                  }}
                  value={this.state.productName}
                />
              </div>
        
             
        
              <div className="mb-3 col-6">
                <label htmlFor="productPrice" className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="productPrice"
                  placeholder="Enter product price"
                  required
                  name='productPrice'
                  onChange={(e) =>{
                    this.setState({
                        productPrice: Number(e.currentTarget.value)});
                  }}
                  value={this.state.productPrice}
                />
              </div>
        
              
        
              <button type="submit" className="btn btn-primary col-4" >Add Product</button>
            </form>
              
            </div>
          
        );
    }
}
 
export default AddIten;
