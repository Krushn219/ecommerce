import React from 'react';
import product1 from '../../assets/Images/Products/1.jpg'
import wishlist from "../../assets/Images/Product wishlist.png"
import compare from "../../assets/Images/Product Compare.png"
import cart from "../../assets/Images/Product Cart Icon.png"
import view from "../../assets/Images/Product view.png"
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ViewModal from '../Categories/ViewModal';

function ProductCategory({ item }) {
  const {  image, title, originalPrice, withDiscount, id } = item;
  const [modalShow, setModalShow] = React.useState(false);
  const closeModal = () => setModalShow(false)

  const navigate = useNavigate()

  const handleProductClick = () => {
   navigate(`/products/${id}`);
  }

  return (
    <>
    <ViewModal
        product={item}
        show={modalShow}
        onHide={closeModal}
      />
    <div>
      <div className="product-itemmain me-3">
        <div className='thumbnail-container'>
          <div className='tvproduct-wrapper grid'>
            <div className='tvproduct-image'>
              <div className='thumbnail product-thumbnail' onClick={() => handleProductClick()}>
                <img src={image} alt='img' className='tvproduct-defult-img tv-img-responsive img-fluid'/>
                <img src={product1} alt='img' className='tvproduct-hover-img tv-img-responsive img-fluid'/>
              </div>
              <ul className='tvproduct-flags tvproduct-online-new-wrapper'>
                <li className='product-flag new'>New product</li>
              </ul>
              <ul className='tvproduct-flags tvproduct-sale-pack-wrapper'>
                <li className='product-flag on-sale'>On Sale!</li>
              </ul>
              <div className='tvproduct-hover-btn'>
                <div className='tvproduct-quick-btn'>
                  <img alt='png' src={view} className='img-fluid' onClick={() => setModalShow(true)}  />
                </div>
                <div className='tvproduct-cart-btn'>
                  <Link to='/Cart' className='btn add-to-cart tvproduct-add-to-cart'>
                    <img alt='png' src={cart} className='img-fluid' />
                  </Link>
                </div>
                <div className='tvcompare-wrapper product_id_7'>
                  <div className='tvproduct-compare tvcmsproduct-compare-btn tvproduct-compare-icon'>
                    <img alt='png' src={compare} className='img-fluid' />
                  </div>
                </div>
                <div className='tvproduct-wishlist'>
                  <Link to='/wishlist'>
                    <img alt='png' src={wishlist} className='img-fluid' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='tvproduct-info-box-wrapper'>
              <div className='product-description'>
                <div className='tvall-product-star-icon'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h6 className='name'>{title}</h6>
              </div>
              <div className='tv-product-price tvproduct-name-price-wrapper'>
                <div className='product-price-and-shipping'>
                  <span className='price'>${withDiscount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductCategory;
