import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular, faStarHalfStroke  } from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { faStar, faShare, faPen, faHeart, faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Loader from '../../Components/Loader';
import { postUpdateCart } from '../../Utils/APIs';
import { ProgressBar } from "react-bootstrap"
import { toast } from 'react-toastify';

const ProductMainPage = ({ product, isLoading, openWriteReviewModal }) => {
  
  const { id, image, title, withDiscount, inStock, rating = 4, description } = product;
  
  const navigate = useNavigate()
  const [currentImage, setcurrentImage] = useState(image)
  const [quantity, setquantity] = useState(1);
  const [isSize, setisSize] = useState(false)
  // const [background, setbackground] = useState({
  //   backgroundImage: `url(${currentImage})`,
  //   backgroundPosition: '0% 0%'
  // })
  
  useEffect(() => {
    if(!isLoading) {
      setcurrentImage(image[0])
    }
  }, [isLoading])

  const handleChange = (e) => {
    setquantity(e.target.value);
  }

  const decrementQuantity = () => {
    if(quantity > 1) {
      setquantity(quantity-1)
    } else {
      toast.error("Quantity should be greater than zero")
    }
  }

  const getIDFromHover = (e) => {
    setcurrentImage(image[e.target.id])
  }

  const addToCart = async () => {
    try {
      if(quantity < 1) {
        toast.error("Quantity should be greater than zero")
      } else {
        const res = await postUpdateCart({
          productId: id,
          quantity: quantity,
        });
        if (res.status === 200) {
          toast.info("Cart Updated");
          navigate(`/cart`);
        } else {
          toast.error("Cart is not updated");
        }
      }
    } catch (e) {
      toast.error(e?.response.data.message || "Internal server error")
    }
  };

  // const handleMouseMove = (e) => {
  //   const { left, top, width, height } = e.target.getBoundingClientRect()
  //   const x = (e.pageX - left) / width * 100
  //   const y = (e.pageY - top) / height * 100
  //   setbackground({ ...background, backgroundPosition: `${x}% ${y}%` })
  // }
  return (
    <div className="product-main-wrapper">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12 main-product">
        <div className='row'>
          <div className='col-lg-10 col-md-10 col-sm-10 col-9'>
            <div className='product-inner-new-pro'>
              <div className="product-main-img">
                <div className="d-flex justify-content-between product-top-remove">
                  <div className='new-product'>
                    <p>New Product</p>
                  </div>
                  <div className='on-sale'>
                    <p>on Sale!</p>
                  </div>
                </div>
                { !isLoading && !!image ? <img alt="img" src={currentImage} className="img-fluid" /> : <div><Loader /></div>}
              </div>
            </div>
          </div>
          <div id='MainDiv' className='col-lg-2 col-md-2 col-sm-2 col-3'>
            { !isLoading && !!image ? image.map((item, index) => {
              return <div key={index} className='product-page-slide-img'>
              <img src={item} alt='img' id={index} className='img-fluid' onMouseOver={getIDFromHover} />
            </div>
            }): <div><Loader /></div>}
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="m-3 product-iphone margin-top-iphone">
          <h4>{title}</h4>
          <div className="d-flex align-items-center review-stars">
            <div className="star-icon">
            {[...Array((Math.floor(rating) > 5 ? 5 : Math.floor(rating)))].map((e, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
            {rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfStroke} />}
            {[...Array(5-(Math.ceil(rating) > 5 ? 5 : Math.ceil(rating)))].map((e, i) => <FontAwesomeIcon key={i} icon={faStarRegular} />)}
            </div>
            <p className="product-reviews">REVIEWS</p>
          </div>
          <div className="d-flex align-items-center product-tax">
            <p> ${withDiscount}</p>
            <span className="product-tax-label">TAX INCLUDED</span>
          </div>
          <div className="product-page-desc">
            <p>
             {description?.inTheBox?.length ? description.inTheBox[0] : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum rerum harum commodi quos nihil quas sequi. Iure officiis voluptate laborum?" }
            </p>
          </div>
        </div>
        <div className="product-quantity-wrapper mx-3">
          {isSize && <div className='product-size product-quantity'>
            <div>
              <p>SIZE :</p>
            </div>
            <div className='product-main-size'>
              <div className='small-size'>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
            </div>
          </div>}
          <div className="product-quantity d-flex align-items-center">
            <p>QUANTITY :</p>
            <div>
              <input type="text" value={quantity} onChange={handleChange} />
              <button onClick={() => decrementQuantity()}>-</button>
              <button onClick={() => setquantity(Number(quantity+1))}>+</button>
            </div>
          </div>
          <div className="wishlist-compare-view-page">
            <button type='button' onClick={addToCart} className="product-cart-btn">Add To Cart</button>
            <div className="d-flex ">
              <Link to='/wishlist'>
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
            <ProgressBar variant="info" now={inStock > 75 ? "100" : inStock > 40 ? "50" : inStock > 10 ? "15" : "5"} />
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
            <div className="me-3 product-share-iconmain">
              <FontAwesomeIcon icon={faShare} />
            </div>
            <span className="product-share pe-3"> Size Guide</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="me-3 product-share-iconmain">
              <FontAwesomeIcon icon={faPen} onClick={openWriteReviewModal} />
            </div>
            <span onClick={openWriteReviewModal} className="product-share">Write your review</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProductMainPage;