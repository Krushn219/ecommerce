import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {
  faShare,
  faPen,
  faHeart,
  faCodeCompare,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import product2 from "../../assets/Images/Products/11.jpg";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { postUpdateCart } from "../../Utils/APIs";

const ViewModal = (props) => {
  const { id, image, withDiscount, inStock } = props.product;

  const [currentImage, setcurrentImage] = useState(image ? image[0] : product2);

  let [num, setNum] = useState(1);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  const getIDFromHover = (e) => {
    setcurrentImage(image[e.target.id]);
  };

  const navigate = useNavigate();

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
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        className="mt-4 category-view-modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="d-flex justify-content-between">
              <div>View Product</div>
              <div>
                <FontAwesomeIcon
                  icon={faClose}
                  className="close-btn"
                  onClick={props.onHide}
                />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product-main-wrapper">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 main-product">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                    <div className="product-inner-new-pro">
                      <div className="product-main-img">
                        <div className="d-flex justify-content-between product-top-remove">
                          <div className="new-product">
                            <p>New Product</p>
                          </div>
                          <div>
                            <p className="on-sale">on Sale!</p>
                          </div>
                        </div>
                        <img
                          alt="img"
                          src={currentImage}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    id="MainDiv"
                    className="col-lg-4 col-md-4 col-sm-4 col-4"
                  >
                    {image?.length ? (
                      image.map((item, index, i) => {
                        return (
                          <div key={i} className="product-page-slide-img">
                            <img
                              src={item}
                              alt="img"
                              id={index}
                              className="img-fluid"
                              onMouseOver={getIDFromHover}
                            />
                          </div>
                        );
                      })
                    ) : (
                      <p>No Image Found</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="m-3 product-iphone">
                  <h4>IPhone</h4>
                  <div className="d-flex align-items-center review-stars">
                    <div className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className="product-reviews">REVIEWS </p>
                  </div>
                  <div className="d-flex align-items-center product-tax">
                    <p>${withDiscount}</p>
                    <span className="product-tax-label">TAX INCLUDED</span>
                  </div>
                  <div className="product-page-desc">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ducimus quibusdam repellat necessitatibus. Vero labore
                      inventore totam, quisquam perferendis voluptatum
                      doloribus?
                    </p>
                  </div>
                </div>
                <div className="product-quantity-wrapper mx-3">
                  <div className="product-quantity d-flex align-items-center">
                    <p>QUANTITY :</p>
                    <div>
                      <input type="text" value={num} onChange={handleChange} />
                      <button onClick={decNum}>-</button>
                      <button onClick={incNum}>+</button>
                    </div>
                  </div>
                  <div className="wishlist-compare-view-page">
                    <button
                      type="submit"
                      onClick={addToCart}
                      className="product-cart-btn"
                    >
                      Add To Cart
                    </button>
                    <div className="d-flex ">
                      <Link to="/wishlist">
                        <div className="wishlist-view pe-3">
                          <FontAwesomeIcon icon={faHeart} />
                        </div>
                      </Link>
                      <div className="compare-view">
                        <FontAwesomeIcon icon={faCodeCompare} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-4 row">
                  <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="progress product-progress">
                      <div
                        className="progress-bar product-progress-bar"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="available-product-item">
                      <p>In Stock {inStock} Available Items</p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="product-social-main">
                      <li className="facebook product-facebook">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </li>
                      <li className="twitter product-twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                      </li>
                      <li className="instagram product-instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                      </li>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center ms-3">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <FontAwesomeIcon icon={faShare} />
                    </div>
                    <span className="product-share pe-3"> Size Guide</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <FontAwesomeIcon icon={faPen} />
                    </div>
                    <span className="product-share">Write your review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewModal;
