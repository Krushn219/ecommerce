import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import returnpolicy from '../../assets/Images/returnpolicy.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faHome, faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      className='mt-4'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Return Policy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='return-modal'>
          <p>Reviews are public and include your account and device info</p>
          <p>Everyone can see your Google Account name and photo associated with your review. Past edits are visible to users unless you delete your review.</p>
          <div className='returnpolicy-star mt-3 mb-4'>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <textarea type="text" placeholder='Describe Your Experience (Optional)' />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ReturnPolicy = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className='return-policy-wrapper terms-condition-use-wrapper'>
        <div className="container">
          <div className='pt-3'>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Return Policy</li>
              </ol>
            </nav>
          </div>
          <div className='terms-condition-use-main-wrapper'>
            <div className='terms-codition-use-wrapper2'>
              <div className='text-center terms-of-use-img'>
                <img src={returnpolicy} alt="img" className='img-fluid' />
              </div>
              <div className='terms-title mb-4'>
                <h4>Return Policy</h4>
              </div>
              <div className='d-flex align-items-center return-policy-item'>
                <div className='pe-4'>
                  <FontAwesomeIcon icon={faMobile} />
                  <p>Mobile</p>
                </div>
                <div className='pe-4'>
                  <p>11 hr 37 min</p>
                  <p>Unabridged</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHome} />
                  <p>Eligible</p>
                </div>
              </div>
              <div className='mt-3'>
                <button className='return-btn me-2'>85,000
                  <del className='ps-2 pe-2'>95,000</del>
                  <span>Iphone</span>
                </button>
                <button className='me-2 resume-btn'>Resume</button>
                <Link to='/wishlist'><button className='add-wishlist'>Add To Wishlist</button></Link>
              </div>
              <p className='mt-2'>Want a free 14 min sample? Listen anytime, even offline.</p>

              <div className='about-this-product'>
                <h5 className='mt-4'>About This Product <FontAwesomeIcon icon={faArrowRight} className='ps-1' /></h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore illum sequi aliquid laboriosam, deleniti accusamus voluptatem reprehenderit rerum quos sint? Ducimus ratione doloremque, illo perspiciatis quos omnis nobis perferendis exercitationem pariatur temporibus architecto debitis porro quaerat facere fugit non numquam dolorem cupiditate eius? Vero, quod. Rem rerum fuga nam accusantium.</p>
              </div>
              <div className='about-this-product'>
                <h5 className='mt-4'>About the author<FontAwesomeIcon icon={faArrowRight} className='ps-2' /></h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, repellat dolores. Quibusdam aperiam incidunt praesentium hic, harum assumenda? Tenetur tempora deleniti non consequuntur veniam? Architecto dolore cupiditate explicabo unde culpa!</p>
              </div>
              <div className='about-this-product'>
                <h5 className='mt-4'>Rate this Product</h5>
                <p>Tell us what you think.</p>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                  <div className='returnpolicy-star'>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <button className='write-review-btn' onClick={() => setModalShow(true)}>Write Review</button>
                </div>
              </div>
              <div className='about-this-product'>
                <h5 className='mt-5'>Listening information</h5>
                <h6 className='mt-3'>Smartphones and tablets :</h6>
                <p>Install the Google Play Books app for Android and iPad/iPhone. It syncs automatically with your account and allows you to read online or offline wherever you are.</p>
                <h6 className='mt-3'>Laptops and computers :</h6>
                <p>You can read books purchased on Google Play using your computer's web browser.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReturnPolicy
