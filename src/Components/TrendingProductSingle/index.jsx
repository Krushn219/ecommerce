import React from "react";
import "./style.css";
import ProductCartIcon from "../../assets/Images/Product Cart Icon.png";
import Productview from "../../assets/Images/Product view.png";
import product1 from "../../assets/Images/Products/1.jpg";
import ProductCompare from "../../assets/Images/Product Compare.png";
import Productwishlist from "../../assets/Images/Product wishlist.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ViewModal from "../../pages/Categories/ViewModal";
import { postUpdateCart } from "../../Utils/APIs";
import { toast } from "react-toastify";
import Timer from "../Timer";

export const TrendingProductSingle = ({ item }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const { id, image, title, withDiscount, isAvailable } = item;

  const addToCart = async (data) => {
    const res = await postUpdateCart({
      productId: id,
      quantity: data.quantity,
    });
    if (res.status === 200) {
      toast.info("Cart Updated");
      navigate(`/cart`);
    } else {
      toast.error("Cart is not updated");
    }
  };

  const handleProductClick = () => {
    navigate(`/products/${id}`);
  };

  const addtoCompare = () => {
    navigate(`/compare`)
  }
  
  const closeModal = () => setModalShow(false);

  return (
    <>
      <ViewModal product={item} show={modalShow} onHide={closeModal} />
      <div className="tab-product-item me-3">
        <div className="thumbnail-container">
          <div className="tvproduct-wrapper grid">
            <div className="tvproduct-image">
              <div
                className="thumbnail product-thumbnail"
                onClick={() => handleProductClick()}
              >
                <img
                  src={image}
                  alt="img"
                  className="tvproduct-defult-img tv-img-responsive img-fluid"
                />
                <img
                  src={product1}
                  alt="img"
                  className="tvproduct-hover-img tv-img-responsive img-fluid"
                />
              </div>
              <ul className="tvproduct-flags tvproduct-online-new-wrapper">
                <li className="product-flag new">New product</li>
              </ul>
              <ul className="tvproduct-flags tvproduct-sale-pack-wrapper">
                <li className="product-flag on-sale">On Sale!</li>
              </ul>
              { isAvailable && <Timer /> }
              <div className="tvproduct-hover-btn">
                <div className="tvproduct-quick-btn">
                  <img
                    alt="png"
                    src={Productview}
                    className="img-fluid"
                    onClick={() => setModalShow(true)}
                  />
                </div>
                <div className="tvproduct-cart-btn">
                  <div className="btn add-to-cart tvproduct-add-to-cart">
                    <img
                      alt="png"
                      src={ProductCartIcon}
                      className="img-fluid"
                      onClick={addToCart}
                    />
                  </div>
                </div>
                <div className="tvcompare-wrapper product_id_7">
                  <div className="tvproduct-compare tvcmsproduct-compare-btn tvproduct-compare-icon">
                    <img alt="png" src={ProductCompare} className="img-fluid" onClick={addtoCompare}/>
                  </div>
                </div>
                <div className="tvproduct-wishlist">
                  <Link to="/wishlist">
                    <img
                      alt="png"
                      src={Productwishlist}
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="tvproduct-info-box-wrapper" onClick={() => handleProductClick()}>
              <div className="product-description">
                <div className="tvall-product-star-icon">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h6 className="name">{title}</h6>
              </div>
              <div className="tv-product-price tvproduct-name-price-wrapper">
                <div className="product-price-and-shipping">
                  <span className="price">${withDiscount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TrendingProductSingle;
  