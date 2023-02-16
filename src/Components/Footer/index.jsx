import React from 'react';
import './Style.css'
import Payment from '../../assets/Images/Payment icon.png' 
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <footer className="footer-wrapper footer navbar-fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="footer-wrapper-content">
                <div className="linklist">
                  <h4>Quick Links</h4>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="footer-wrapper-content footer-wrapper-main">
                <div className="linklist">
                  <h4>My Account</h4>
                  <ul>
                    <Link to='/my-account'><li>My Account</li></Link>
                    <Link to='/online-support'><li>Online Support</li></Link>
                    <Link to='/shipping-policy'><li>Shipping Policy</li></Link>
                    <Link to='/return-policy'><li>Return Policy</li></Link>
                    <Link to='/privacy-policy'><li>Privacy Policy</li></Link>
                    <Link to='/terms-condition'><li>Terms And Condition</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="footer-wrapper-content footer-wrapper-main">
                <div className="linklist">
                  <h4>Contact Details</h4>
                  <div className="contact-info">
                    <div className="d-flex contact-icon">
                      <div>
                        <i className="fa-solid fa-location-dot" />
                      </div>
                      <div>
                        <p>Demo Store, Lorem Ipsum Dolor
                          Lorem Ipsum</p>
                      </div>
                    </div>
                    <div className="d-flex contact-icon">
                      <div>
                        <FontAwesomeIcon icon={faPhone} className='me-2' />
                      </div>
                      <div>
                        <p>+00 123 456 789</p>
                      </div>
                    </div>
                    <div className="d-flex contact-icon">
                      <div>
                        <FontAwesomeIcon icon={faEnvelope} className='me-2' />
                      </div>
                      <div>
                        <p>demo@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div>
                <div className="linklist newsletter">
                  <h4>Newsletter</h4>
                  <div className="email-subscription">
                    <p>You will be notified when somthing new will be appear.</p>
                    <input type="text" placeholder="Email Address" />
                    <button className="subscribe-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Accordion className='accordion-footer'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="linklist">
              <h4>Quick Links</h4>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="linklist accordion-linklist">
              <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about-us'>About Us</Link>
              </li>
              <li>
                <Link to='/categories'>Categories</Link>
              </li>
              <li>
                <Link to='/blogs'>Blog</Link>
              </li>
              <li>
                <Link to='/contact-us'>Contact Us</Link>
              </li>
            </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="linklist">
              <h4>My Account</h4>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="linklist accordion-linklist">
              <ul>
                <Link to='/my-account'><li>My Account</li></Link>
                <Link to='/online-support'><li>Online Support</li></Link>
                <Link to='/shipping-policy'><li>Shipping Policy</li></Link>
                <Link to='/return-policy'><li>Return Policy</li></Link>
                <Link to='/privacy-policy'><li>Privacy Policy</li></Link>
                <Link to='/terms-condition'><li>Terms And Condition</li></Link>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <div className="linklist">
              <h4>Contact Details</h4>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="contact-info">
              <div className="d-flex contact-icon">
                <div>
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div>
                  <p>Demo Store, Lorem Ipsum Dolor
                    Lorem Ipsum</p>
                </div>
              </div>
              <div className="d-flex contact-icon">
                <div>
                  <FontAwesomeIcon icon={faPhone} className='me-2 text-white' />
                </div>
                <div>
                  <p>+00 123 456 789</p>
                </div>
              </div>
              <div className="d-flex contact-icon">
                <div>
                  <FontAwesomeIcon icon={faEnvelope} className='me-2 text-white' />
                </div>
                <div>
                  <p>demo@gmail.com</p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <div className="linklist newsletter">
          <h4>Newsletter</h4>
          <div className="email-subscription">
            <p>You will be notified when somthing new will be appear.</p>
            <input type="text" placeholder="Email Address" />
            <button className="subscribe-btn-main">Subscribe</button>
          </div>
        </div>
      </Accordion>
      <div className="badfooter-after-block">
        <div className="container badfooter-after-block-inner">
          <div className="row badfooter-block-copyright">
            <div className="badpaymenticon-block col-lg-4 col-md-12 col-sm-12">
              <div className="badpaymenticon-content-inner">
                <div className="badpaymenticon-item">
                  <Link to="/" title="Demo Title 1">
                    <img src={Payment} alt="png" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="badfooter-copyright col-lg-4 col-md-12 col-sm-12">
              <div className="badfooter-copyright-content">
                <a href="#" title="Copyright © 2022 - All Right Reserved PrestaShop™">© 2022 - Ecommerce software by
                  PrestaShop™</a>
              </div>
            </div>
            <div className="badfooter-socialicon-block col-lg-4 col-md-12 col-sm-12">
              <div className="badfooter-socialicon-content-wrapper">
                <ul className="badfooter-socialicon-content">
                  <li className="facebook">
                    <a href="#" title="Facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="linkedin">
                    <a href="#" title="LinkedIn">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="#" title="Twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="linkedin">
                    <a href="#" title="Instagram">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="linkedin">
                    <a href="#" title="Pinterest">
                      <i className="fab fa-pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;