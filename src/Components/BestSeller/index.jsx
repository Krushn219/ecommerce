import React from "react";
import BestSellersSingle from "../BestSellerSingle";


const BestSeller = ({ productlist }) => {
  return (
    <div className="seller-box-wrapper">
      <div className="seller-box">
        <div>
          <h4>BEST SELLERS</h4>
        </div>

        {productlist?.length ? (
          productlist.map((item, i) => {
            if (i < 4) {
              return <BestSellersSingle key={i} item={item} />;
            } else {
              return "";
            }
          })
        ) : (
          <p className="ps-3 m-2">No product</p>
        )}

        <div className="view-product">
          <p>View All Products </p>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
