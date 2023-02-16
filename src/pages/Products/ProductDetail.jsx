import React from "react";
const ProductDetail = ({ product }) => {
  return (
    <div>
      {/* PRODUCT-DETAILS  */}
      <div className="product-disc-wrapper">
        {/* <div className="reference d-flex">
          <h4>Reference </h4>
          <p>Demo_1</p>
        </div> */}
        <div className="reference d-flex">
          <h4>In stock</h4>
          <p>{product.inStock} Items</p>
        </div>
        <div className="reference d-flex">
          <h4>Data Sheet</h4>
        </div>
        <div className="table-product">
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <td>Compositions</td>
                <td>Basic</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>White</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>720×1280</td>
              </tr>
              <tr>
                <td>Frame Size</td>
                <td>Wool</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="reference d-flex">
          <h4>Specific References</h4>
        </div> */}
      </div>
    </div>
  );
}

export default ProductDetail;
