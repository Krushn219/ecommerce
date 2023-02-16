import React from 'react';
import FeaturedProductSingle from '../FeaturedProductSingle';


const FeaturedProduct = ({ productlist }) => {
  return (
    <div className="seller-box-wrapper">
    <div className="seller-box">
      <div>
        <h4>Featured Products</h4>
      </div>
      {productlist?.length ?
        productlist.map((item, i) => {
          if(i < 4){
            return <FeaturedProductSingle key={i} item={item} />
          }else{
           return ""
          }
        }):<p className="m-2 ps-3">No product</p>}
      <div className="view-product">
        <p>View All Products </p>
      </div>
    </div>
  </div>
  );
}

export default FeaturedProduct;