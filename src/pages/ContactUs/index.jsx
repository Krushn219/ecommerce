import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faBandage, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
  return (
    <div className='contact-us-wrapper'>
      <div className='container'>
          <div className='pt-3'>
              <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                  </ol>
              </nav>
          </div>
        <div className='contact-us-main-wrapper'>
          <div className='contact-us-wrapper2'>
            <div className='store-info-title'>
              <h4>Store Information</h4>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className='location location-border'>
                  <div className='main-svg-contact-location'>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className='contact-location'>
                    <p>Demo Store, Lorem Ipsum Dolor<br />
                      Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className='location location-phone'>
                  <div className='main-svg-contact-location'>
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className='contact-call-info'>
                    <p>Call us:</p>
                    <p className='contact-mail'>+00 123 456 789</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className='location location-border'>
                  <div className='main-svg-contact-location'>
                    <FontAwesomeIcon icon={faBandage} />
                  </div>
                  <div className='contact-call-info'>
                    <p>Fax:</p>
                    <p className='contact-mail'>+00 823 406 789</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className='location contact-email-subscription'>
                  <div className='main-svg-contact-location'>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className='contact-call-info'>
                    <p>Email us:</p>
                    <p className='contact-mail'>demo@demo.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-us-wrapper2 mt-4 px-3">
            <div className='store-info-title'>
              <h4>Contact Us</h4>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className='main-contact-detail-item px-3'>
                  <div className='social-title user-name'>
                    <label>Subject</label>
                    <input type="text" />
                  </div>
                  <div className='social-title user-name'>
                    <label>Email Address</label>
                    <input type="email" />
                  </div>
                  <div className='social-title user-name'>
                    <label>Password</label>
                    <input type="password" />
                  </div>
                  <div className='social-title user-name contact-file-input'>
                    <label>Attachment   ( Optional )</label>
                    <input type="file" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className='main-contact-detail-item px-3'>
                  <div className='social-title user-name contact-message'>
                    <label>Message</label>
                    <textarea type="text"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-end'>
              <button className='back-account ms-0 mt-4'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
